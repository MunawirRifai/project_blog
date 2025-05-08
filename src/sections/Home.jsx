import react from 'react';
import '../styles/section.css'
import researchIamage from '../assets/download.jpeg'

function Research(){

    return(
        <section id="home" className="section">
            <div className='section-content'>
                <img src={researchIamage} alt="penelitian" className='section-image' />
                <div className="text">
                  <h1>Home</h1>
                  <p>Badan Riset dan Inovasi Nasional, disingkat BRIN, adalah lembaga pemerintah nonkementerian yang berada di bawah dan bertanggung jawab kepada Presiden Indonesia dalam menyelenggarakan penelitian,</p>
                </div>
            </div>
        </section>
    )
}

export default Research;