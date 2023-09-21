import React from 'react'
import './InfoCard.css'
import img from './licenciadograsso.jpg'

const InfoCard = () => {
  return (
    <div className="infoCard-wrapper">
        <div className="infoCard-topside">
        <div className="overlay">
          <img src={img} class="infoCard-img" alt="Licenciado Marcelo Grasso" />
        </div>
        </div>

        <div className="infoCard-content">
            <div className="infoCard-title">
            Lic. Marcelo Grasso
            <br></br>
            <div className="subTitle">
            Hipnoterapeuta <br></br>
            Master en Hipnosis Clínica<br></br> 
            </div>
            </div>
            <div className="infoCard-text">
            <ul>
              <li>Licenciado – Universidad de Buenos Aires<br></br></li>
              <li>Docente – Universidad Católica<br></br></li>
              <li>Especialista en Unidad de Cuidados Intensivos<br></br></li>
              <li>Socioterapeuta en Adicciones <br></br></li>
              <li>Dirección Nacional de Emergencias Sanitarias<br></br></li>
              <li>Instructor en Trauma</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default InfoCard