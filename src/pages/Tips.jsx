import React from "react";
import { Link } from "react-router-dom";
import courses from "../data/tips";
import "./Tips.css";

const Tips = () => {
  const handleCourseClick = (url, e) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="tips-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Rekomendasi Platform Belajar Teknologi</h1>
          <p className="subtitle">
            Temukan sumber belajar terbaik untuk meningkatkan skill teknologi Anda
          </p>
        </div>
      </section>

      <section className="courses-section">
        <div className="section-header">
          <p>Platform terbaik yang kami rekomendasikan untuk karir teknologi</p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-content">
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
              </div>
              <div className="course-actions">
                <a 
                  href={course.url} 
                  onClick={(e) => handleCourseClick(course.url, e)}
                  className="visit-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kunjungi
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tips;