import React from "react";
import { useParams } from "react-router-dom";
import careersData from "../data/careers";
import careerDetails from "../data/career-details";
import "./CareerDetail.css";

const CareerDetail = () => {
  const { id } = useParams();
  const career = careersData.find(item => item.id === parseInt(id));
  const detail = careerDetails[id] || {};

  if (!career) {
    return (
      <div className="not-found-container">
        <div className="not-found">
          <h2>Karir tidak ditemukan</h2>
          <p>Mohon maaf, informasi karir yang Anda cari tidak tersedia.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="career-detail-container">
      {/* Hero Section */}
      <div className="career-hero">
        <div className="hero-content">
          <h1 className="career-title">
            <span className="icon-wrapper">
              <i className="fas fa-code"></i>
            </span>
            {career.title}
          </h1>
          <div className="career-meta">
            <span className="salary-badge">
              <i className="fas fa-money-bill-wave"></i> {career.salary}
            </span>
            <span className={`demand-badge ${career.demand.toLowerCase()}`}>
              <i className="fas fa-chart-line"></i> Permintaan: {career.demand}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="detail-tabs">
        <a href="#deskripsi" className="tab-item active">
          <i className="fas fa-file-alt"></i> Deskripsi
        </a>
        <a href="#skill" className="tab-item">
          <i className="fas fa-lightbulb"></i> Skill
        </a>
        <a href="#perusahaan" className="tab-item">
          <i className="fas fa-building"></i> Perusahaan
        </a>
        <a href="#peminat" className="tab-item">
          <i className="fas fa-users"></i> Peminat
        </a>
      </nav>

      {/* Content Sections */}
      <div className="detail-content">
        {/* Deskripsi Section */}
        <section id="deskripsi" className="content-section">
          <div className="section-header">
            <h2>
              <i className="fas fa-file-alt"></i> Deskripsi Pekerjaan
            </h2>
            <div className="divider"></div>
          </div>
          <p className="section-description">{detail.description}</p>
          
          <h3 className="subsection-title">Tugas Utama:</h3>
          <ul className="task-list">
            {detail.jobDesc?.map((task, index) => (
              <li key={index} className="task-item">
                <i className="fas fa-check-circle"></i> {task}
              </li>
            ))}
          </ul>
        </section>

        {/* Skill Section */}
        <section id="skill" className="content-section">
          <div className="section-header">
            <h2>
              <i className="fas fa-lightbulb"></i> Kompetensi yang Dibutuhkan
            </h2>
            <div className="divider"></div>
          </div>
          <div className="skills-container">
            {detail.skills?.map((skill, index) => (
              <div key={index} className="skill-pill">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Perusahaan Section */}
        <section id="perusahaan" className="content-section">
          <div className="section-header">
            <h2>
              <i className="fas fa-building"></i> Perusahaan yang Merekrut
            </h2>
            <div className="divider"></div>
          </div>
          <div className="company-grid">
            {detail.companies && Object.entries(detail.companies).map(([type, companies]) => (
              <div key={type} className="company-card">
                <h3 className="company-type">
                  {type === 'technology' ? 'Perusahaan Teknologi' :
                   type === 'consulting' ? 'Konsultan IT' :
                   type === 'enterprise' ? 'Perusahaan Besar' :
                   type === 'manufacturing' ? 'Manufaktur/Industri' :
                   'Agensi Digital'}
                </h3>
                <ul className="company-list">
                  {companies.map((company, index) => (
                    <li key={index} className="company-item">
                      <i className="fas fa-briefcase"></i> {company}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Peminat Section */}
        <section id="peminat" className="content-section">
          <div className="section-header">
            <h2>
              <i className="fas fa-users"></i> Prospek Karir
            </h2>
            <div className="divider"></div>
          </div>
          <div className="popularity-content">
            <p>{detail.popularity?.description}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareerDetail;