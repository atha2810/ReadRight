// src/components/Login.test.jsx

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import Login from "./Login";

jest.mock("axios", () => ({
  default: {
    post: jest.fn(),
  },
}));

describe("Login Component", () => {
  test("renders login form correctly", () => {
    render(<Login />);

    expect(screen.getByText("Login to")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("handles form submission and redirects on successful login as admin", async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(axios, "post").mockResolvedValue({
      data: {
        login: true,
        role: "admin",
      },
    });

    render(<Login setRoleVar={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText(""), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText(""), {
      target: { value: "testpassword" },
    });
    fireEvent.change(screen.getByLabelText("Role"), {
      target: { value: "admin" },
    });

    fireEvent.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
    });
  });

  test("handles form submission and redirects on successful login as user", async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(axios, "post").mockResolvedValue({
      data: {
        login: true,
        role: "user",
      },
    });

    render(<Login setRoleVar={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText(""), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByPlaceholderText(""), {
      target: { value: "testpassword" },
    });
    fireEvent.change(screen.getByLabelText("Role"), {
      target: { value: "user" },
    });

    fireEvent.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/homepage");
    });
  });

  test("handles form submission and shows error on invalid login", async () => {
    jest
      .spyOn(axios, "post")
      .mockRejectedValue(new Error("Invalid credentials"));

    render(<Login setRoleVar={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText(""), {
      target: { value: "invaliduser" },
    });
    fireEvent.change(screen.getByPlaceholderText(""), {
      target: { value: "invalidpassword" },
    });
    fireEvent.change(screen.getByLabelText("Role"), {
      target: { value: "user" },
    });

    fireEvent.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(
        screen.getByText("Invalid username or password")
      ).toBeInTheDocument();
    });
  });
});
