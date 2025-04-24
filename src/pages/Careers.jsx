import React, { useState } from "react";
import { Link } from "react-router-dom";
import CareerCard from "../components/CareerCard";
import careersData from "../data/careers";
import "./Careers.css";

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [demandFilter, setDemandFilter] = useState("all");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");

  const extractSalary = (salaryText) => {
    const match = salaryText.match(/Rp\s*(\d+)\s*-\s*(\d+)/);
    return match ? { min: parseInt(match[1]), max: parseInt(match[2]) } : null;
  };

  const filteredCareers = careersData.filter((career) => {
    // Filter pencarian
    const matchesSearch = 
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.skills.some(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    // Filter permintaan
    const matchesDemand = 
      demandFilter === "all" || career.demand === demandFilter;
    
    // Filter gaji
    const salary = extractSalary(career.salary);
    const matchesMinSalary = !minSalary || (salary && salary.min >= parseInt(minSalary));
    const matchesMaxSalary = !maxSalary || (salary && salary.max <= parseInt(maxSalary));
    
    return matchesSearch && matchesDemand && matchesMinSalary && matchesMaxSalary;
  });

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Trigger filter saat Enter ditekan
    }
  };

  return (
    <div className="careers-page">      
      <div className="search-section">
        <h2 className="search-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Cari Karir yang Diminati
        </h2>
        
        <div className="search-labels">
          <div className="search-label">Kata Kunci</div>
          <div className="search-label">Tingkat Permintaan</div>
          <div className="search-label">Kisaran Gaji (Juta/bulan)</div>
        </div>
        
        <div className="search-container">
          <input
            id="searchInput"
            className="search-input"
            type="text"
            placeholder="Cari karir"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          
          <select
            id="jobDemandFilter"
            className="search-select"
            value={demandFilter}
            onChange={(e) => setDemandFilter(e.target.value)}
          >
            <option value="all">Semua Permintaan</option>
            <option value="tinggi">Permintaan Tinggi</option>
            <option value="sedang">Permintaan Sedang</option>
          </select>
          
          <div className="salary-inputs">
            <input
              id="minSalary"
              type="number"
              placeholder="Min"
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <input
              id="maxSalary"
              type="number"
              placeholder="Max"
              value={maxSalary}
              onChange={(e) => setMaxSalary(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="result-info">
          <div className="result-count">
            <svg className="result-count-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <line x1="10" y1="9" x2="8" y2="9"></line>
            </svg>
            Menampilkan <span id="jobCount">{filteredCareers.length}</span> Karir
          </div>
        </div>  
        
        <main className="jobs" id="jobsContainer">
          {filteredCareers.length > 0 ? (
            filteredCareers.map((career) => (
              <CareerCard key={career.id} career={career} />
            ))
          ) : (
            <div className="no-results">
              <h3>Tidak ada karir yang sesuai dengan kriteria pencarian Anda</h3>
              <p>Silakan ubah kriteria pencarian dan coba lagi</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Careers;