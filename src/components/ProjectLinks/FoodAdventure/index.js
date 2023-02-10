import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function FoodAdventure() {
  return (
    <div className="project-body">
      <div className="head-section">
        <Link to="/" className="go-back">
          {"<"} BACK
        </Link>
        <h1 className="p-heading">FOOD ADVENTURE</h1>
      </div>
      <div className="p-description">
        
      </div>
    </div>
  );
}
