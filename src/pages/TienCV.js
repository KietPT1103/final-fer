import React from "react";
import "../assets/styles/TienCVStyle.css";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

function TienCV() {

  //AOS animation libary
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  
  return (
    <div className="tien-body">
      <Header />
      <div className="tien-container">
        <div className="tien-avatar"></div>
        <div className="CV-name" data-aos="fade-left" data-aos-duration="2000">
          <h1>Pham Gia Tien</h1>
          <ul className="contact">
            <li>
              <span>P</span> 0931094009
            </li>
            <li>
              <span>B</span> 03/09/2003
            </li>
            <li>
              <span>E</span> tiensktt1bang@gmail.com
            </li>
            <li>
              <span>F</span> https://www.facebook.com/tienphamiuhaiyen
            </li>
            <li>
              <span>A</span> 23/5, Trương Văn Kỉnh, Khóm 1, Phường 1, TP.Trà
              Vinh, tỉnh Trà Vinh
            </li>
          </ul>
        </div>
        <div className="tien-info" data-aos="fade-right" data-aos-duration="2000">
          <ul className="info-education">
            <li>
              From <b>Can Tho</b> - VietNam
            </li>
            <h2 className="actor-h2">GitHub</h2>
            <p>https://github.com/whisky39</p>
          </ul>
        </div>

        <div className="tien-intro" data-aos="fade-left" data-aos-duration="2000">
          <h2 className="actor-h2">CAREER GOALS</h2>
          <ul>
            <li>Learn how to solve problems</li>
            <li>Accumulate programming expertise</li>
            <li>
              In 3 years, cultivate and learn the necessary skills to become a
              Professional program developer.
            </li>

            <li>
              In 5 years, improve your communication skills and become a
              Business Analyst
            </li>
          </ul>
        </div>

        <div className="tien-experience">
          <div className="item" data-aos="fade-right" data-aos-duration="2000">
            <h2 className="actor-h2">EDUCATION</h2>
            <div className="time">
              <p>2018 - 2021 Pham Thai Buong High School</p>
              <p>2021 - 2025 FPT Can Tho University</p>
            </div>
            <div className="des"></div>
          </div>

          <div data-aos="fade-right" data-aos-duration="2000">
            <h2 className="tien-skills">SKILLS</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>SQL Server</li>
              <li>Java</li>
              <li>GitHub</li>
              <li>React JS</li>
            </ul>
          </div>
        </div>

        <div
          className="actor-project"
          data-aos="fade-left"
          data-aos-duration="2000">
          <h2 className="actor-h2">WORKING EXPERIENCE</h2>

          <div className="item">
            <h4>Build Website Tech Solution</h4>
            <div className="time">2023</div>
            <div className="group mg-10">Group 2 FPT University</div>
            <div className="des mg-10">
              Tech Solution is a phone sale website with functions such as
              logging in, searching for phones, adding, updating, and deleting
              phones for Admin pages.
            </div>
            <div className="des_con mg-10">
              Design and develop a movie ticket booking system website using
              HTML, CSS, JavaScript and JDBC.
            </div>
          </div>

          <div className="item">
            <h4>Build Website Cinema</h4>
            <div className="time mg-10">2024</div>
            <div className="group mg-10">Group 2 FPT University</div>
            <div className="des mg-10">
              The Cinema website is set up with functions such as log in,
              booking movie tickets, searching for movie information, and
              displaying movie information.
            </div>
            <div className="des_con mg-10">
              Design and develop a movie ticket booking system website using
              HTML, CSS, JavaScript and JDBC.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TienCV;
