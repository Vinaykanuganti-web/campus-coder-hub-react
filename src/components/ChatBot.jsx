import React, { useState } from "react";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleSend = () => {
    const userMessage = message.toLowerCase();

    if (
      userMessage.includes("react")
    ) {
      setReply(
        "React is a JavaScript library for building user interfaces."
      );
    } 
    
    else if (
      userMessage.includes("html")
    ) {
      setReply(
        "HTML is used to structure web pages."
      );
    }

    else if (
      userMessage.includes("css")
    ) {
      setReply(
        "CSS is used for styling web pages."
      );
    }

    else if (
      userMessage.includes("javascript")
    ) {
      setReply(
        "JavaScript adds interactivity to websites."
      );
    }

    else if (
      userMessage.includes("machine learning")
    ) {
      setReply(
        "Machine Learning is a branch of Artificial Intelligence."
      );
    }

    else if (
      userMessage.includes("data science")
    ) {
      setReply(
        "Data Science is used to analyze and visualize data."
      );
    }

    else if (
      userMessage.includes("python")
    ) {
      setReply(
        "Python is widely used in AI, ML, Web Development and Automation."
      );
    }

    else {
      setReply(
        "Sorry, I don't understand the question."
      );
    }
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>AI ChatBot</h2>

      <input
        type="text"
        placeholder="Ask your doubt..."
        onChange={(e) => setMessage(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
        }}
      />

      <button
        onClick={handleSend}
        style={{
          marginLeft: "10px",
          padding: "10px",
        }}
      >
        Send
      </button>

      <p>{reply}</p>
    </div>
  );
}

export default ChatBot;