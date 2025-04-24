import React from "react";
import { Link } from "react-router-dom";
import careerImage from "../assets/bg.png";
import careersData from "../data/careers";
import "./Home.css";

const Home = () => {
  // Fisher-Yates shuffle function
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const formatSkills = (skills) => {
    if (Array.isArray(skills)) return skills.join(", ");
    return typeof skills === 'string' ? skills.replace(/,(\S)/g, ', $1') : '';
  };

  const popularCareers = shuffleArray(
    careersData.filter(career => career.demand?.toLowerCase() === "tinggi")
  ).slice(0, 6);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Selamat Datang di TechCareer!</h1>
          <p className="hero-subtitle">
            Temukan jalur karier teknologi yang cocok untuk Anda dan mulailah
            perjalanan profesional Anda hari ini.
          </p>
          <div className="hero-cta">
            <Link to="/careers" className="cta-button primary">
              Jelajahi Karir
            </Link>
            <Link to="/quiz" className="cta-button secondary">
              Tes Minat
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-image-container">
          <img 
            src={careerImage} 
            alt="Tech Career" 
            className="banner-image" 
            loading="lazy"
          />
        </div>
        <div className="banner-content">
          <h2>Tentang TechCareer</h2>
          <p>
            Website ini dirancang untuk Anda, mahasiswa ongoing atau freshgrad bidang teknologi 
            yang masih bingung dengan jalur karir yang ingin dicapai. Kami menyediakan informasi 
            lengkap tentang berbagai karir teknologi dan tes minat untuk membantu Anda menemukan 
            karir yang paling sesuai.
          </p>
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Informasi karir terupdate</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Tes minat berbasis sains</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Rekomendasi kursus dan skill</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Careers Section */}
      <section className="careers-section">
        <div className="section-header">
          <p>Pilihan karir dengan permintaan tinggi di industri teknologi</p>
        </div>
        <div className="careers-container">
          <div className="careers-scroll">
            {popularCareers.map((career) => {
              const skillsDisplay = formatSkills(career.skills);
              
              return (
                <div key={career.id} className="career-card">
                  <h3>{career.title}</h3>
                  <p><strong>Gaji:</strong> {career.salary}</p>
                  <p><strong>Skill:</strong> {skillsDisplay}</p>
                  <p><strong>Permintaan:</strong> {career.demand}</p>
                  <Link 
                    to={`/careers/${career.id}`} 
                    className="detail-button"
                    aria-label={`Detail ${career.title}`}
                  >
                    Lihat Detail
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2>Apa Kata Mereka?</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <div className="testimonial-content">
              "TechCareer membantu saya menemukan passion di bidang UI/UX Design. Sekarang saya sudah bekerja di perusahaan startup!"
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">A</div>
              <div className="author-info">
                <strong>Andi</strong>
                <span>UI/UX Designer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              "Tes minatnya akurat! Saya direkomendasikan untuk karir di Cloud Engineering dan sekarang sedang menekuni bidang ini."
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">B</div>
              <div className="author-info">
                <strong>Budi</strong>
                <span>Cloud Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;