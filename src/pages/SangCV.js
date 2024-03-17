import React from 'react';
import '../assets/styles/SangCV.css';
import avt from "../assets/images/SangCV/avt.jpg";

function SangCV() {
  return (
    <div>
      <div class="Sang-container">
      <div class="Sang-avatar">
            <img src={avt} alt="avatar"></img>
           </div>
        <div class="Sang-name">
          <h1>Phan Thái Sang</h1>
          <div class="Sang-specialize"><h5>I'm an Intern Front-end developer</h5></div>
          <ul class="Sang-contact">
            <li>
              <span>P</span> 0387238736
            </li>
            <li>
              <span>E</span> pts039444@gmail.com
            </li>
            
          </ul>
        </div>
        <div class="Sang-info">
          <ul>
            <li>From <b>CTC</b> - VietNam</li>
            <li>11/12/2003</li>
            <li>FPT University</li>
          </ul>
        </div>
        <div class="Sang-intro">
          <h2>INTRODUCE MYSELT</h2>
          I am a student at FPT University, I am currently on an internship, I would like to receive an internship at your company.
        </div>
        <div>

          <div class="Sang-item">
            <h4>Student</h4>
            <div class="Sang-time">
              <span>2021 - 2025</span>
              <span>FPT University</span>
            </div>
           
          </div>
          <h2 class="Sang-skills">
            SKILLS
          </h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            
            <li>MySql</li>
            <li>Git</li>
            
          </ul>

        </div>
        <div class="Sang-project">
          <h2>PROJECTS</h2>
          <div class="Sang-item">
            <h4>Website Cenima Booking</h4>
            <div class="Sang-time">
              2023
            </div>
            <div class="Sang-location">
              Frond-end Developer
            </div>
            
          </div>

          <div class="Sang-item">
            <h4>Website Cafe</h4>
            <div class="Sang-time">
              2022
            </div>
            
            <div class="Sang-location">
              Frond-end Developer
            </div>
            
          </div>

         
        </div>
      </div>
    </div>
  )
}

export default SangCV