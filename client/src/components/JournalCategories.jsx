import React from "react";
import Navbar from "./Navbar";
import "../css/JournalCategories.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
function JournalCategories() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/homepage");
  };
  return (
    <div style={{ fontFamily: "Comfortaa, sans-serif" }}>
      <Navbar />
      <button className="back-button" onClick={handleBackClick}>
        <FaArrowLeft />
      </button>
      <div className="questions">
        <div className="qs">
          <h1 className="qtitle">Journal Questions</h1>

          <h2 className="qcategory">Love and relationships</h2>

          <p style={{ textDecoration: "underline" }}>Prompts:</p>
          <div className="boldquestions">
            <p>
              1. Who do you trust most? Why?
              <br />
              <br />
              2. What do you value most in relationships,What five traits do you value most in potential partners? (trust, respect, sense
              of humor, etc.)?
              <br />
              <br />
              3. What three important things have you learned from previous
              relationships?
              <br />
              <br />
              4. How do you show compassion to others? How can you extend that
              same compassion to yourself?
              <br />
              <br />
              5. What are three things working well or worked well in your current or past
              relationships? What are three things that could be better?
              <br />
              <br />
              6. What boundaries could you set in your relationships to
              safeguard your own well-being?
              <br />
              <br />
              7. What do you most want your children (or future children) to
              learn from you?
              <br />
              <br />
              8. What does love mean to you? How do you recognize it in a
              relationship?
              <br />
              <br />
            </p>
          </div>
          <h2 className="qcategory">Work and career</h2>

          <p style={{ textDecoration: "underline" }}>Prompts:</p>
          <p className="boldquestions">
            1. why you work at all?. your motivations for working? (necessity,
            passion, a sense of duty, or something else)
            <br />
            <br />
            2. What is the purpose or goal of work in your life? what do you aim
            to achieve through your work?(financial stability, personal
            satisfaction, contributing to society, or something else)
            <br />
            <br />
            3. How do you define work?what are your Personal
            value,beliefs,attitude,worth for your work (calling, a job, a
            career, a means to an end, way to express yourself)
            <br />
            <br />
            4. How does your work affects/contributes you as an individual,
            those around you (family, friends, colleagues), and society at
            large?
            <br />
            <br />
            5. What makes work good or worthwhile in your eyes? Is it about the
            impact, the effort, the results, or the moral and ethical aspects?
            <br />
            <br />
            6. what is the role of financial compensation in your workview. How
            important is money in your perception of work? Is it the primary
            motivator, a necessary component, or secondary to other factors like
            fulfillment and purpose?
            <br />
            <br />
            7. How do you value experience, growth, and fulfillment in your
            work? Do you seek work that helps you learn, grow, and feel
            fulfilled?
            <br />
            <br />
            8. How does work fulfill you? Does it leave you wanting more?
            <br />
            <br />
            9. What part of your workday do you most enjoy?
            <br />
            <br />
            10. What about your work feels real, necessary, or important to you?
            <br />
            <br />
            11. Do you see yourself in the same job in 10 years?
            <br />
            <br />
            12. What are your career ambitions?
           and  What three things can help you begin working to accomplish those
            goals?
            <br />
            13. What can you do to improve your work performance?
            <br />
            <br />
            14. What does your work teach you? Does it offer continued
            opportunities for learning and growth?
            <br />
            <br />
            15. Does your work drain or overwhelm you? Why? Is this something
            you can change?
            <br />
            <br />
          </p>

          <h2 className="qcategory">Self-reflection</h2>

          <p style={{ textDecoration: "underline" }}>Prompts:</p>
          <p className="boldquestions">
            1. What values do you consider most important in life ?<br />
            ( justice, altruism, loyalty, Honesty, authenticity,
Growth, Learning, achievement, challenge 
 Compassion, kindness, teamwork,
Life Balance, Adventure, enjoyment, health, Citizenship, community,
, Autonomy, courage, freedom, Intelligence, creativity, knowledge, Presence, spirituality ,etc.) <br/>- How do your actions align with
            those values?
            <br />
            <br />
            2. What three changes can you make to live according to your
            personal values?
            <br />
            <br />
            3. Describe yourself using the first 10 words that come to mind.
            Then, list 10 words that you’d like to use to describe yourself.
            List a few ways to transform those descriptions into reality.
            <br />
            <br />
            4. What do you appreciate most about your personality? What aspects
            do you find harder to accept?
            <br />
            <br />
            5. Explore an opinion or two that you held in the past but have
            since questioned or changed. What led you to change that opinion?
            <br />
            <br />
            6. List three personal beliefs that you’re willing to reconsider or
            further explore.
            <br />
            <br />
            7. Finish this sentence: “My life would be incomplete without …”
            <br />
            <br />
            8. Describe one or two significant life events that helped shape you
            into who you are today.
            <br />
            <br />
            9. When do you trust yourself most? When do you find it harder to
            have faith in your instincts?
            <br />
            <br />
            10. What three things would you most like others to
            know about you?(loved ones,
              potential friends and partners, professional acquaintances, etc.)
            <br />
            <br />
          </p>

          <h2 className="qcategory">Uncomfortable emotions</h2>

          <p style={{ textDecoration: "underline" }}>Prompts:</p>
          <p className="boldquestions">
            1. What difficult thoughts or emotions come up most frequently for
            you?
            <br />
            <br />
            2. Which emotions do you find hardest to accept (guilt, anger,
            disappointment, etc.)? How do you handle these emotions?
            <br />
            <br />
            3. Describe a choice you regret. What did you learn from it?
            <br />
            <br />
            4. What parts of daily life cause stress, frustration, or sadness?
            What can you do to change those experiences?
            <br />
            <br />
            5. What are three things that can instantly disrupt a good mood and
            bring you down? What strategies do you use to counter these effects?
            <br />
            <br />
            6. What are three self-defeating thoughts that show up in your
            self-talk? How can you reframe them to encourage yourself instead?
            <br />
            <br />
            7. What go-to coping strategies help you get through moments of
            emotional or physical pain?
            <br />
            <br />
            8. Who do you trust with your most painful and upsetting feelings?
            How can you connect with them when feeling low?
            <br />
            <br />
            9. What do you fear most? Have your fears changed throughout life?
            <br />
            <br />
          </p>

          <h2 className="qcategory">Living your best life</h2>

          <p style={{ textDecoration: "underline" }}>Prompts:</p>
          <p className="boldquestions">
            1. Describe your favorite thing to do when feeling low.
            <br />
            <br />
            2. What three ordinary things bring you the most joy?
            <br />
            <br />
            3. How do you prioritize self-care?
            <br />
            <br />
            4. Describe two or three things you do to relax.
            <br />
            <br />
            5. What aspects of your life are you most grateful for?
            <br />
            <br />
            6. How do you show yourself kindness and compassion each day?
            <br />
            <br />
            7. Write a short love letter to some object or place that makes you
            happy.
            <br />
            <br />
            8. What place makes you feel most peaceful? Describe that place
            using all five senses.
            <br />
            <br />
            9. List 10 things that inspire or motivate you.
            <br />
            <br />
            10. What are your favorite hobbies? Why?
            <br />
            <br />
          </p>

          <h2 className="qcategory">Personal growth and life goals</h2>

          <p style={{ textDecoration: "underline" }}>Prompts:</p>
          <p className="boldquestions">
            1. What parts of life surprised you most? What turned out the way
            you expected it would?
            <br />
            <br />
            2. What three things would you share with your teenage self? What
            three questions would you want to ask an older version of yourself?
            <br />
            <br />
            3. List three important goals. How do they match up to your goals
            from 5 years ago?
            <br />
            <br />
            4. Do your goals truly reflect your desires? Or do they reflect what
            someone else (a parent, partner, friend, etc.) wants for you?
            <br />
            <br />
            5. What’s your biggest obstacle to success?
            <br />
            <br />
            6. What are three things you’d most like to accomplish in the next 5
            years?
            <br />
            <br />
            7. What important lesson did you learn in the past year?
            <br />
            <br />
            8. What’s one step you can take today to work toward a long-term
            goal?
            <br />
            <br />
            9. Describe your ideal life. What’s one small thing you can change
            to make that vision more realistic?
            <br />
            <br />
            10. Describe your perfect day, from waking to turning in for the
            night.
            <br />
            <br />
            11. List three of your greatest strengths and three areas for
            improvement. How do you plan to work on those areas of growth?
            <br />
            <br />
            12. How have you grown as a person in the last year? How do you hope
            to grow in the next year?
            <br />
            <br />
            13. Write a letter to your future self about what’s happening in
            your life right now.
            <br />
            <br />
            14. What’s one thing you’ve always wanted to try but haven’t gotten
            around to yet? Write about how you could make it happen.
            <br />
            <br />
            15. Write about your proudest moment. How did that experience change
            you?
            <br />
            <br />
            16. Describe your favorite way to spend time alone.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default JournalCategories;
