import React from "react";
import { useNavigate } from "react-router-dom";

function MachineLearning() {
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

        <h1>Machine Learning Roadmap 🧠</h1>

        <p>
          Step-by-step roadmap for students to start their ML journey.
        </p>
      </header>

      <div className="roadmap-container">

        <div className="roadmap-step">
          <h2>1. Learn Python Fundamentals</h2>

          <p>
            Start with Python basics and libraries like NumPy,
            Pandas, and Matplotlib.
          </p>

          <div className="links">
            <a
              href="https://www.youtube.com/c/Telusko"
              target="_blank"
            >
              Telusko
            </a>

            <a
              href="https://www.youtube.com/c/programmingwithmosh"
              target="_blank"
            >
              Programming with Mosh
            </a>
          </div>
        </div>

        <div className="roadmap-step">
          <h2>2. Learn Math for ML</h2>

          <p>
            Understand linear algebra, calculus, probability,
            and statistics for ML.
          </p>

          <div className="links">
            <a
              href="https://www.youtube.com/user/joshstarmer"
              target="_blank"
            >
              StatQuest
            </a>

            <a
              href="https://www.youtube.com/c/3blue1brown"
              target="_blank"
            >
              3Blue1Brown
            </a>
          </div>
        </div>

        <div className="roadmap-step">
          <h2>3. Data Preprocessing</h2>

          <p>
            Learn to handle missing data, feature scaling,
            and categorical encoding.
          </p>

          <div className="links">
            <a
              href="https://www.youtube.com/c/KrishNaik"
              target="_blank"
            >
              Krish Naik
            </a>

            <a
              href="https://www.youtube.com/c/codebasics"
              target="_blank"
            >
              Codebasics
            </a>
          </div>
        </div>

        <div className="roadmap-step">
          <h2>4. Machine Learning Algorithms</h2>

          <p>
            Explore supervised, unsupervised, and reinforcement learning algorithms.
          </p>

          <div className="links">
            <a
              href="https://www.youtube.com/c/SimplilearnOfficial"
              target="_blank"
            >
              Simplilearn
            </a>

            <a
              href="https://www.youtube.com/c/Freecodecamp"
              target="_blank"
            >
              FreeCodeCamp
            </a>
          </div>
        </div>

        <div className="roadmap-step">
          <h2>5. Work on Projects</h2>

          <p>
            Build mini-projects like spam classifiers,
            price prediction, or recommendation systems.
          </p>

          <div className="links">
            <a
              href="https://www.youtube.com/c/DataScienceDojo"
              target="_blank"
            >
              Data Science Dojo
            </a>

            <a
              href="https://www.youtube.com/c/KenJee1"
              target="_blank"
            >
              Ken Jee
            </a>
          </div>
        </div>

        <div className="roadmap-step">
          <h2>6. Deep Learning</h2>

          <p>
            Learn about Neural Networks, CNNs,
            and frameworks like TensorFlow and PyTorch.
          </p>

          <div className="links">
            <a
              href="https://www.youtube.com/c/deeplearningai"
              target="_blank"
            >
              DeepLearning.ai
            </a>

            <a
              href="https://www.youtube.com/c/sentdex"
              target="_blank"
            >
              Sentdex
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

export default MachineLearning;