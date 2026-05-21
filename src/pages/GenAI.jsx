import React from "react";
import { useNavigate } from "react-router-dom";

function GenAI() {
  const navigate = useNavigate();

  return (
    <div className="roadmap-page">
      <header className="roadmap-header">
        <button className="back-btn" onClick={() => navigate("/home")}>
          Back to Home
        </button>

        <h1>Generative AI Roadmap 🤖</h1>
        <p>Step-by-step roadmap for students to start learning Generative AI.</p>
      </header>

      <div className="roadmap-container">
        <div className="roadmap-step">
          <h2>1. Learn Python Fundamentals</h2>
          <p>Start with Python basics, functions, OOPs, and libraries used in AI development.</p>

          <div className="links">
            <a href="https://www.youtube.com/c/programmingwithmosh" target="_blank">
              Programming with Mosh
            </a>
            <a href="https://www.geeksforgeeks.org/python-programming-language-tutorial/" target="_blank">
              GFG Python Tutorial
            </a>
          </div>
        </div>

        <div className="roadmap-step">
          <h2>2. Understand AI & Machine Learning Basics</h2>
          <p>Learn core concepts of AI, machine learning, neural networks, and deep learning.</p>

          <div className="links">
            <a href="https://www.youtube.com/c/KrishNaik" target="_blank">
              Krish Naik
            </a>
            <a href="https://www.geeksforgeeks.org/machine-learning/" target="_blank">
              GFG Machine Learning
            </a>
          </div>
        </div>

        <div className="roadmap-step">
          <h2>3. Learn Prompt Engineering</h2>
          <p>Understand how to write effective prompts for ChatGPT, Gemini, Claude, and other LLMs.</p>

          <div className="links">
            <a href="https://www.youtube.com/c/AIAnytime" target="_blank">
              AI Anytime
            </a>
            <a href="https://www.geeksforgeeks.org/prompt-engineering/" target="_blank">
              GFG Prompt Engineering
            </a>
          </div>
        </div>

        <div className="roadmap-step">
          <h2>4. Learn LLMs & Transformers</h2>
          <p>Explore Large Language Models, transformers, embeddings, tokens, and attention mechanisms.</p>

          <div className="links">
            <a href="https://www.youtube.com/c/AssemblyAI" target="_blank">
              AssemblyAI
            </a>
            <a href="https://www.geeksforgeeks.org/transformers-in-machine-learning/" target="_blank">
              GFG Transformers
            </a>
          </div>
        </div>

        <div className="roadmap-step">
          <h2>5. Build AI Applications</h2>
          <p>Create AI chatbots, text generators, AI assistants, and image generation projects using APIs.</p>

          <div className="links">
            <a href="https://www.youtube.com/c/Freecodecamp" target="_blank">
              FreeCodeCamp
            </a>
            <a href="https://www.geeksforgeeks.org/artificial-intelligence-projects/" target="_blank">
              GFG AI Projects
            </a>
          </div>
        </div>

        <div className="roadmap-step">
          <h2>6. Learn AI Frameworks & Deployment</h2>
          <p>Learn tools like LangChain, OpenAI API, Hugging Face, and deployment using Streamlit or Flask.</p>

          <div className="links">
            <a href="https://www.youtube.com/c/codebasics" target="_blank">
              Codebasics
            </a>
            <a href="https://www.geeksforgeeks.org/langchain-tutorial/" target="_blank">
              GFG LangChain Tutorial
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

export default GenAI;