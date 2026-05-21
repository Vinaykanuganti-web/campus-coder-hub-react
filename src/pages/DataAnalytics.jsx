import React from "react";
import { useNavigate } from "react-router-dom";

function DataAnalytics() {
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

        <h1>Data Analytics Roadmap 📊</h1>

        <p>
          Step-by-step roadmap for students to become Data Analysts.
        </p>

      </header>

      <div className="roadmap-container">

        <div className="roadmap-step">

          <h2>1. Learn Excel Basics</h2>

          <p>
            Start with Excel fundamentals including formulas,
            charts, pivot tables, and dashboards.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/ExcelIsFun"
              target="_blank"
            >
              ExcelIsFun
            </a>

            <a
              href="https://www.geeksforgeeks.org/excel-tutorial/"
              target="_blank"
            >
              GFG Excel Tutorial
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>2. Learn SQL</h2>

          <p>
            Understand databases, queries, joins, grouping,
            filtering, and data analysis using SQL.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/codebasics"
              target="_blank"
            >
              Codebasics SQL
            </a>

            <a
              href="https://www.geeksforgeeks.org/sql-tutorial/"
              target="_blank"
            >
              GFG SQL Tutorial
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>3. Learn Python for Analytics</h2>

          <p>
            Learn Python basics and libraries like Pandas,
            NumPy, and Matplotlib for data analysis.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/KrishNaik"
              target="_blank"
            >
              Krish Naik
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

          <h2>4. Data Visualization</h2>

          <p>
            Learn to create charts, dashboards,
            and reports using Power BI and Tableau.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/AlexTheAnalyst"
              target="_blank"
            >
              Alex The Analyst
            </a>

            <a
              href="https://www.geeksforgeeks.org/power-bi-tutorial/"
              target="_blank"
            >
              GFG Power BI Tutorial
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>5. Learn Statistics</h2>

          <p>
            Understand mean, median, probability,
            correlation, and statistical analysis concepts.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/StatQuestwithJoshStarmer"
              target="_blank"
            >
              StatQuest
            </a>

            <a
              href="https://www.geeksforgeeks.org/statistics-for-data-science/"
              target="_blank"
            >
              GFG Statistics
            </a>

          </div>
        </div>

        <div className="roadmap-step">

          <h2>6. Build Real Projects</h2>

          <p>
            Create dashboards and analyze datasets like
            sales reports, customer analysis, and business insights.
          </p>

          <div className="links">

            <a
              href="https://www.youtube.com/c/AlexTheAnalyst"
              target="_blank"
            >
              Project Tutorials
            </a>

            <a
              href="https://www.geeksforgeeks.org/data-analysis-with-python/"
              target="_blank"
            >
              GFG Data Analysis
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

export default DataAnalytics;