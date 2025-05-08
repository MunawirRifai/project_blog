import react from 'react';
import '../styles/Home.css'
import researchIamage from '../assets/tower.jpeg'

function Research(){

    return(
        <section id="research" className="section">
            <div className='section-content'>
                <img src={researchIamage} alt="penelitian" className='section-image' />
                <div className="text">
                    <h1>Penelitian</h1>
                    <p>Seorang peneliti sinyal/frekuensi merupakan profesional yang berfokus pada pengkajian, analisis, dan pengembangan teknologi berbasis gelombang elektromagnetik, sinyal analog, dan sinyal digital. Bidang penelitian ini mencakup berbagai aplikasi, seperti telekomunikasi, radar, pemrosesan sinyal audio, sensor frekuensi, dan pengembangan jaringan nirkabel.</p>
                </div>
            </div>
        </section>
    )
}

export default Research;