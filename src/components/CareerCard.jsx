import { Link } from "react-router-dom";

const CareerCard = ({ career }) => {
  const demandClass = career.demand === "tinggi" ? "demand-high" : "demand-medium";
  const demandText = career.demand === "tinggi" ? "Tinggi" : "Sedang";

  return (
    <div className="job-card" data-demand={career.demand}>
      <div className="job-header">
        <h4>{career.title}</h4>
      </div>
      <div className="job-details">
        <div className="detail">Gaji: {career.salary}</div>
        <div className="detail">Skill: {career.skills.join(", ")}</div>
        <div className="detail">
          Permintaan: <span className={`demand-badge ${demandClass}`}>{demandText}</span>
        </div>
      </div>
      <Link to={`/careers/${career.id}`} className="detail-button">
        Lihat Detail
      </Link>
    </div>
  );
};

export default CareerCard;