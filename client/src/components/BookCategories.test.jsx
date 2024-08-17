import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import BookCategories from "./BookCategories";

// Mock the modules and functions
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

jest.mock("./Navbar", () => () => <div data-testid="navbar">Navbar</div>);
jest.mock("./Category", () => ({ onSelectCategory }) => (
  <select
    data-testid="category-select"
    onChange={e => onSelectCategory(e.target.value)}
  >
    <option value="fiction">Fiction</option>
    <option value="non-fiction">Non-Fiction</option>
  </select>
));
jest.mock("react-icons/fa", () => ({
  FaArrowLeft: () => <div data-testid="back-arrow">Back Arrow</div>,
}));

describe("BookCategories", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          _id: "1",
          title: "Test Book",
          subtitle: "A test book",
          author: "Test Author",
          summary: "This is a test book summary",
          imgUrl: "test-image.jpg",
          ebook: { url: "test-ebook.pdf" },
        },
      ]),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders BookCategories component", () => {
    render(
      <BrowserRouter>
        <BookCategories />
      </BrowserRouter>
    );

    expect(screen.getByText("Book Categories")).toBeInTheDocument();
    expect(screen.getByText("Books")).toBeInTheDocument();
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("category-select")).toBeInTheDocument();
  });

  test("fetches and displays books when a category is selected", async () => {
    render(
      <BrowserRouter>
        <BookCategories />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByTestId("category-select"), {
      target: { value: "fiction" },
    });

    await waitFor(() => {
      expect(screen.getByText("Test Book")).toBeInTheDocument();
      expect(screen.getByText("A test book")).toBeInTheDocument();
      expect(screen.getByText("By Test Author")).toBeInTheDocument();
      expect(
        screen.getByText("This is a test book summary")
      ).toBeInTheDocument();
    });
  });

  test("changes button text when download button is clicked", async () => {
    render(
      <BrowserRouter>
        <BookCategories />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByTestId("category-select"), {
      target: { value: "fiction" },
    });

    await waitFor(() => {
      const downloadButton = screen.getByText("Download PDF");
      fireEvent.click(downloadButton);
      expect(
        screen.getByText("Ebook order is in process...")
      ).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(
          screen.getByText("Downloading starts soon...")
        ).toBeInTheDocument();
      },
      { timeout: 3500 }
    );
  });
});
