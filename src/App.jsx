import React from "react";
import "./App.css";
import cameraImage from "./assets/camera.png"; 

function App() {
  return (
    <div className="welcome-container">
      {/* Image */}
      <img
        src={cameraImage}
        alt="Camera Illustration"
        className="illustration"
      />

      
      <h1 className="heading">
        Experience Photography In a new Dimension
      </h1>

     
      <div className="button-group">
        <button className="btn">CONTINUE AS CUSTOMER</button>
        <button className="btn">CONTINUE AS PHOTOGRAPHER</button>
      </div>
    </div>
  );
}

export default App;
