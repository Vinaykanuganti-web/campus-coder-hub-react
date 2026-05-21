import React from "react";
import { useNavigate } from "react-router-dom";

function FullStack() {
  const navigate = useNavigate();

  return (
    <div className="roadmap-page">

      <header className="roadmap-header">

        <button
          className="back-btn"
          onClick={() => navigate("/home")}
        >
          Back to Home
        </button>

        <h1>Full Stack Development Roadmap 💻</h1>

        <p>
          Step-by-step guide to becoming a Full Stack Web Developer.
        </p>

      </header>

      <div className="roadmap-container">

        <div className="roadmap-step">

          <h2>1. Learn HTML, CSS & JavaScript</h2>

          <p>
            Start with the fundamentals of web development —
            structure (HTML), styling (CSS), and interactivity (JavaScript).
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/Freecodecamp"
              target="_blank"
            >
              freeCodeCamp
            </a>

            <a
              href="https://www.youtube.com/c/TraversyMedia"
              target="_blank"
            >
              Traversy Media
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>2. Learn Version Control (Git & GitHub)</h2>

          <p>
            Understand how to track your code changes
            and collaborate using Git and GitHub.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/TheNetNinja"
              target="_blank"
            >
              The Net Ninja
            </a>

            <a
              href="https://www.youtube.com/c/KunalKushwaha"
              target="_blank"
            >
              Kunal Kushwaha
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>3. Learn Frontend Frameworks</h2>

          <p>
            Master React.js or another modern frontend
            framework to build interactive UIs.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/Codevolution"
              target="_blank"
            >
              Codevolution
            </a>

            <a
              href="https://www.youtube.com/c/Academind"
              target="_blank"
            >
              Academind
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>4. Learn Backend Development</h2>

          <p>
            Learn Node.js, Express.js, or another backend framework
            to handle server-side logic.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/TraversyMedia"
              target="_blank"
            >
              Traversy Media
            </a>

            <a
              href="https://www.youtube.com/c/ProgrammingwithMosh"
              target="_blank"
            >
              Programming with Mosh
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>5. Learn Databases</h2>

          <p>
            Understand SQL and NoSQL databases
            and how to connect them with backend APIs.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/CodeWithHarry"
              target="_blank"
            >
              CodeWithHarry
            </a>

            <a
              href="https://www.youtube.com/c/WebDevSimplified"
              target="_blank"
            >
              Web Dev Simplified
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>6. Learn Authentication & APIs</h2>

          <p>
            Learn login/signup systems,
            JWT authentication, and third-party APIs.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/FaztTech"
              target="_blank"
            >
              Fazt Tech
            </a>

            <a
              href="https://www.youtube.com/c/WebDevSimplified"
              target="_blank"
            >
              Web Dev Simplified
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>7. Learn Deployment & Hosting</h2>

          <p>
            Host applications using platforms like
            Vercel, Netlify, or Render.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/TraversyMedia"
              target="_blank"
            >
              Traversy Media
            </a>

            <a
              href="https://www.youtube.com/c/NetNinja"
              target="_blank"
            >
              The Net Ninja
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>8. Build Real Projects</h2>

          <p>
            Create portfolio websites, blog platforms,
            and e-commerce projects.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/CleverProgrammer"
              target="_blank"
            >
              Clever Programmer
            </a>

            <a
              href="https://www.youtube.com/c/JavaScriptMastery"
              target="_blank"
            >
              JavaScript Mastery
            </a>

          </div>
        </div>

      </div>

      <footer className="roadmap-footer">
        © 2026 Campus Coder Hub | Designed by Vinay Kanuganti
      </footer>

    </div>
  );
}

export default FullStack;