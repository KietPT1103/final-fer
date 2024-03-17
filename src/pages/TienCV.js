import React from "react";
import "../assets/styles/TienCVStyle.css";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

function TienCV() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <div className="tien-body">
      <Header />
      <div class="tien-container">
        <div class="tien-avatar"></div>
        <div class="CV-name" data-aos="fade-left" data-aos-duration="2000">
          <h1>Pham Gia Tien</h1>
          <ul class="contact">
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
        <div class="tien-info" data-aos="fade-right" data-aos-duration="2000">
          <ul class="info-education">
            <li>
              From <b>Can Tho</b> - VietNam
            </li>
            <h2 className="actor-h2">GitHub</h2>
            <p>https://github.com/whisky39</p>
          </ul>
        </div>

        <div class="tien-intro" data-aos="fade-left" data-aos-duration="2000">
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

        <div class="tien-experience">
          <div class="item" data-aos="fade-right" data-aos-duration="2000">
            <h2 className="actor-h2">EDUCATION</h2>
            <div class="time">
              <p>2018 - 2021 Pham Thai Buong High School</p>
              <p>2021 - 2025 FPT Can Tho University</p>
            </div>
            <div class="des"></div>
          </div>

          <div data-aos="fade-right" data-aos-duration="2000">
            <h2 class="tien-skills">SKILLS</h2>
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
          class="actor-project"
          data-aos="fade-left"
          data-aos-duration="2000">
          <h2 className="actor-h2">WORKING EXPERIENCE</h2>

          <div class="item">
            <h4>Build Website Tech Solution</h4>
            <div class="time">2023</div>
            <div class="group mg-10">Group 2 FPT University</div>
            <div class="des mg-10">
              Tech Solution is a phone sale website with functions such as
              logging in, searching for phones, adding, updating, and deleting
              phones for Admin pages.
            </div>
            <div class="des_con mg-10">
              Design and develop a movie ticket booking system website using
              HTML, CSS, JavaScript and JDBC.
            </div>
          </div>

          <div class="item">
            <h4>Build Website Cinema</h4>
            <div class="time mg-10">2024</div>
            <div class="group mg-10">Group 2 FPT University</div>
            <div class="des mg-10">
              The Cinema website is set up with functions such as log in,
              booking movie tickets, searching for movie information, and
              displaying movie information.
            </div>
            <div class="des_con mg-10">
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
