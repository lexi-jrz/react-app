import { useState, useEffect } from 'react';
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about--container">
      <div className="about--card">
        <h2>Carlos Alexis Juárez</h2>
      </div>
      <div className="about--card">
        <h2>28 años</h2>
      </div>
      <div className="about--card">
        <h2>Aprendiendo React</h2>
      </div>
    </div>
  );
}

export default About;