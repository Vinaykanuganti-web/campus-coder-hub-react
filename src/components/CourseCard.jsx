import React from "react";

function CourseCard(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <button>Explore</button>
    </div>
  );
}

export default CourseCard;