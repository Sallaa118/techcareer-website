import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    { q: "Kamu lebih suka...", options: ["Membangun aplikasi dari nol", "Mendesain tampilan aplikasi"] },
    { q: "Kamu paling penasaran sama...", options: ["Cara kerja sistem login", "Bagaimana pengguna merasa nyaman"] },
    { q: "Kalau disuruh milih tugas, kamu pilih...", options: ["Membuat algoritma", "Merancang tampilan"] },
    { q: "Di waktu senggang kamu lebih sering...", options: ["Ngoding", "Ngegambar UI di Figma"] },
    { q: "Kamu merasa puas saat...", options: ["Programmu berjalan lancar", "Desainmu dipuji user"] },
    { q: "Yang lebih penting menurutmu...", options: ["Kinerja sistem", "Pengalaman pengguna"] },
    { q: "Kalau lihat error, kamu langsung...", options: ["Buka debugger", "Cek flow pengguna"] },
    { q: "Lebih tertarik pada...", options: ["Pemrograman backend", "Psikologi pengguna"] },
    { q: "Kamu lebih senang...", options: ["Menyelesaikan tantangan coding", "Menciptakan tampilan yang estetik"] },
    { q: "Saat kerja kelompok, kamu...", options: ["Ngurus logic dan fungsi", "Ngurus layout dan tampilan"] },
    { q: "Kalau lihat website jelek, kamu...", options: ["Pikirin cara optimasinya", "Pikirin desain ulangnya"] },
    { q: "Kalau ikut hackathon, kamu ambil bagian...", options: ["Programmer", "Designer"] },
    { q: "Kamu lebih suka lihat...", options: ["Code editor", "Design mockup"] },
    { q: "Yang kamu pelajari duluan...", options: ["Struktur data", "Design thinking"] },
    { q: "Kalau presentasi, kamu bahas tentang...", options: ["Fungsi sistem", "Kenyamanan user"] },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ a: 0, b: 0 });
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    const newScores = { ...scores };
    newScores[index === 0 ? "a" : "b"]++;
    setScores(newScores);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setQuizCompleted(true);
        calculateResult();
      }, 2000);
    }
  };

  const calculateResult = () => {
    if (scores.a > scores.b) {
      setResult("Kamu cocok jadi Software Developer, Web Developer, atau Cloud Engineer!");
    } else if (scores.b > scores.a) {
      setResult("Kamu cocok jadi UI/UX Designer, Game Developer, atau Cybersecurity Analyst!");
    } else {
      setResult("Kamu punya potensi di banyak bidang Developer & Designer!");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ a: 0, b: 0 });
    setSelectedOption(null);
    setQuizStarted(false);
    setQuizCompleted(false);
    setResult("");
  };

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <div className="start-screen">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png" 
            alt="Robot" 
            className="robot-img" 
          />
          <h2>Kenali Dirimu, Tentukan Arah Karirmu!</h2>
          <button onClick={startQuiz} className="start-button">
            Mulai Tes Sekarang
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="quiz-container">
        <div className="loading-screen">
          <h2>Sistem sedang menganalisa hasil tes anda</h2>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="quiz-container">
        <div className="result-screen">
          <h2>{result}</h2>
          <div className="result-buttons">
            <button onClick={resetQuiz} className="result-button">
              Ulangi Tes
            </button>
            <Link to="/careers" className="result-button">
              Lihat Karir
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>Pilih salah satu yang paling mencerminkan karaktermu</h1>
      <div className="progress">
        Pertanyaan ke <span>{currentQuestion + 1}</span> dari {questions.length}
      </div>
      <div className="question-container">
        <h2>{questions[currentQuestion].q}</h2>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option ${selectedOption === index ? "selected" : ""}`}
              onClick={() => handleOptionClick(index)}
              disabled={selectedOption !== null && selectedOption !== index}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="navigation">
        <button
          onClick={nextQuestion}
          className="next-button"
          disabled={selectedOption === null}
        >
          {currentQuestion === questions.length - 1 ? "Lihat Hasil" : "Selanjutnya"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;