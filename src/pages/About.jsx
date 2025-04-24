import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

// Import foto developer (gantilah dengan foto asli)
import aurelPhoto from "../assets/developers/aurel.jpg";
import korezaPhoto from "../assets/developers/koreza.jpg";
import sallaaPhoto from "../assets/developers/sallaa.png";
import hanaPhoto from "../assets/developers/hana.png";

const About = () => {
  const developers = [
    {
      name: "Aurel Moura Athanafisa",
      npm: "G1A023001",
      role: "Halaman Quiz",
      photo: aurelPhoto
    },
    {
      name: "Koreza Almukadima",
      npm: "G1A023011",
      role: "Halaman Daftar Karir",
      photo: korezaPhoto
    },
    {
      name: "Sallaa Fikriyatul Arifah",
      npm: "G1A023015",
      role: "Halaman Home, Halaman About",
      photo: sallaaPhoto
    },
    {
      name: "Hana Syarifah",
      npm: "G1A023017",
      role: "Halaman Tips, Halaman Detail Karir",
      photo: hanaPhoto
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Tentang TechCareer</h1>
          <p className="hero-subtitle">
            Platform yang membantu mahasiswa teknologi menemukan jalur karir yang tepat
          </p>
        </div>
      </section>

      {/* Deskripsi Tim */}
      <section className="team-description">
        <div className="container">
          <h2>Tim Pengembang</h2>
          <p>
            TechCareer dikembangkan oleh tim mahasiswa yang berdedikasi untuk membantu 
            sesama mahasiswa dalam menentukan pilihan karir di bidang teknologi. 
            Setiap anggota tim bertanggung jawab atas pengembangan bagian-bagian penting dari website ini.
          </p>
        </div>
      </section>

      {/* Daftar Developer */}
      <section className="developers-section">
        <div className="container">
          <div className="developers-grid">
            {developers.map((dev, index) => (
              <div key={index} className="developer-card">
                <div className="developer-photo-container">
                  <img 
                    src={dev.photo} 
                    alt={dev.name} 
                    className="developer-photo" 
                  />
                </div>
                <div className="developer-info">
                  <h3>{dev.name}</h3>
                  <div className="developer-meta">
                    <span className="npm">{dev.npm}</span>
                    <span className="role">{dev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <h2>Siap Memulai Perjalanan Karir Anda?</h2>
          <p>
            Temukan karir teknologi yang sesuai dengan minat dan kemampuan Anda
          </p>
          <div className="cta-buttons">
            <Link to="/quiz" className="cta-button primary">
              Ikuti Tes Minat
            </Link>
            <Link to="/careers" className="cta-button secondary">
              Jelajahi Karir
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;