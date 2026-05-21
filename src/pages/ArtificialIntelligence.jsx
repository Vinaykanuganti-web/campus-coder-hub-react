import React from "react";
import { useNavigate } from "react-router-dom";

function ArtificialIntelligence() {
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

        <h1>Artificial Intelligence Roadmap 🤖</h1>

        <p>
          Step-by-step roadmap for students to start their AI journey.
        </p>
      </header>

      <div className="roadmap-container">

        <div className="roadmap-step">
          <h2>1. Learn Python Fundamentals</h2>

          <p>
            Start with Python basics, data structures,
            functions, and OOP concepts.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/programmingwithmosh"
              target="_blank"
            >
              Programming with Mosh
            </a>

            <a
              href="https://www.geeksforgeeks.org/python-programming-language-tutorial/"
              target="_blank"
            >
              GFG Python Tutorial
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>2. Learn Mathematics for AI</h2>

          <p>
            Understand linear algebra, probability,
            statistics, and calculus concepts used in AI.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/3blue1brown"
              target="_blank"
            >
              3Blue1Brown
            </a>

            <a
              href="https://www.geeksforgeeks.org/maths-for-machine-learning/"
              target="_blank"
            >
              GFG AI Mathematics
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>3. Learn Machine Learning Basics</h2>

          <p>
            Explore supervised learning, unsupervised learning,
            regression, and classification algorithms.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/KrishNaik"
              target="_blank"
            >
              Krish Naik
            </a>

            <a
              href="https://www.geeksforgeeks.org/machine-learning/"
              target="_blank"
            >
              GFG Machine Learning
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>4. Learn Deep Learning</h2>

          <p>
            Understand neural networks, CNNs,
            RNNs, and deep learning frameworks.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/deeplearningai"
              target="_blank"
            >
              DeepLearning.ai
            </a>

            <a
              href="https://www.geeksforgeeks.org/deep-learning-tutorial/"
              target="_blank"
            >
              GFG Deep Learning
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>5. Learn NLP & Computer Vision</h2>

          <p>
            Study Natural Language Processing and Computer Vision
            concepts for real-world AI applications.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/Freecodecamp"
              target="_blank"
            >
              FreeCodeCamp
            </a>

            <a
              href="https://www.geeksforgeeks.org/natural-language-processing-overview/"
              target="_blank"
            >
              GFG NLP Tutorial
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>6. Build Real AI Projects</h2>

          <p>
            Create AI chatbots, recommendation systems,
            image classifiers, and prediction systems.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/codebasics"
              target="_blank"
            >
              Codebasics
            </a>

            <a
              href="https://www.geeksforgeeks.org/artificial-intelligence-projects/"
              target="_blank"
            >
              GFG AI Projects
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

export default ArtificialIntelligence;