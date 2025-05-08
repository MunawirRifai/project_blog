import React from 'react';
import '../styles/section.css';
import homeImage from '../assets/penelitianjpeg.jpeg';

function About() {
  return (
    <section id="about" className="section">
      <div className="section-content">
        <img src={homeImage} alt="Home visual" className="section-image" />
        <div className="text">
          <h1>About</h1>
          <p>Penelitian di Badan Riset dan Inovasi Nasional (BRIN) bertujuan untuk mengembangkan ilmu pengetahuan dan teknologi yang inovatif guna mendukung kemajuan bangsa Indonesia, dengan fokus pada berbagai bidang strategis seperti energi, kesehatan, pangan, lingkungan, serta teknologi informasi dan komunikasi. Melalui kolaborasi multidisiplin dan pemanfaatan fasilitas penelitian yang canggih, para peneliti di BRIN melakukan eksplorasi ilmiah, pengembangan teknologi terapan, serta inovasi sosial untuk menghasilkan solusi yang berdampak langsung pada peningkatan kesejahteraan masyarakat dan daya saing nasional.</p>
          </div>
      </div>
    </section>
  );
}

export default About;