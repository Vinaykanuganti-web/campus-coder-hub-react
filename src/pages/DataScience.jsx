import React from "react";
import { useNavigate } from "react-router-dom";

function DataScience() {
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

        <h1>Data Science Roadmap 📊</h1>

        <p>
          Step-by-step guide to becoming a Data Scientist from scratch.
        </p>

      </header>

      <div className="roadmap-container">

        <div className="roadmap-step">
          <h2>1. Learn Python for Data Science</h2>

          <p>
            Start with Python basics and move on to libraries
            like NumPy, Pandas, and Matplotlib.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/codebasics"
              target="_blank"
            >
              Codebasics
            </a>

            <a
              href="https://www.youtube.com/c/KrishNaik"
              target="_blank"
            >
              Krish Naik
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>2. Learn Statistics & Probability</h2>

          <p>
            Understand descriptive statistics, hypothesis testing,
            distributions, and probability concepts.
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

          <h2>3. Data Visualization</h2>

          <p>
            Learn to represent data using visual tools like
            Matplotlib, Seaborn, and Power BI or Tableau.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/AlexTheAnalyst"
              target="_blank"
            >
              Alex The Analyst
            </a>

            <a
              href="https://www.youtube.com/c/LukeBarousse"
              target="_blank"
            >
              Luke Barousse
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>4. Learn Data Cleaning & Analysis</h2>

          <p>
            Work on real datasets to handle missing values,
            outliers, and perform Exploratory Data Analysis.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/KrishNaik"
              target="_blank"
            >
              Krish Naik
            </a>

            <a
              href="https://www.youtube.com/c/DataScienceDojo"
              target="_blank"
            >
              Data Science Dojo
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>5. Learn SQL & Databases</h2>

          <p>
            Understand SQL queries, joins, and database management
            to retrieve and analyze structured data.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/AlexTheAnalyst"
              target="_blank"
            >
              Alex The Analyst
            </a>

            <a
              href="https://www.youtube.com/c/freecodecamp"
              target="_blank"
            >
              freeCodeCamp
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>6. Learn Machine Learning</h2>

          <p>
            Explore regression, classification, clustering,
            and time-series models using scikit-learn.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/KrishNaik"
              target="_blank"
            >
              Krish Naik
            </a>

            <a
              href="https://www.youtube.com/c/Codebasics"
              target="_blank"
            >
              Codebasics
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>7. Work on Real Projects</h2>

          <p>
            Build projects like sales prediction,
            customer segmentation, and recommendation systems.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/KenJee1"
              target="_blank"
            >
              Ken Jee
            </a>

            <a
              href="https://www.youtube.com/c/DataScienceDojo"
              target="_blank"
            >
              Data Science Dojo
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>8. Advanced Topics</h2>

          <p>
            Learn Deep Learning, NLP, and Big Data tools
            like Spark and Hadoop.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/deeplearningai"
              target="_blank"
            >
              DeepLearning.ai
            </a>

            <a
              href="https://www.youtube.com/c/edurekaIN"
              target="_blank"
            >
              Edureka
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

export default DataScience;