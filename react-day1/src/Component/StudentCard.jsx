import React from "react";

function StudentCard({ name, rollNo, course, year }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "250px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    margin: "10px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#a70a0a",
  };

  const detailStyle = {
    fontSize: "14px",
    margin: "4px 0",
    color: "#1af3c4",
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{name}</div>
      <div style={detailStyle}>Roll No: {rollNo}</div>
      <div style={detailStyle}>Course: {course}</div>
      <div style={detailStyle}>Year: {year}</div>
    </div>
  );
}

export default StudentCard;
