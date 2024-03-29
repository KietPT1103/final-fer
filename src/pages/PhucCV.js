import React from "react";
import "../assets/styles/PhucCV.css";
import Header from "../components/Header";

import avt from "../assets/images/PhucCV/Phuccv.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function PhucCV() {
  
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
    <div className="phuc-bg-img">
      <Header />

      <div className="PhucCV-container">
        <div className="contect-left" style={{ color: "white" }} >
          <img src={avt} alt="Avatar" data-aos="flip-left" />
          <div className="info-phuccv" data-aos="fade-right" data-aos-duration="1000">
            <h3>Nguyễn Hoàng Phúc</h3>
            <p>facebook.com/hoangphucagg</p>
            <p>hoangphucagg@gmail.com</p>
            <p>0934053820</p>
            <p>Ấp thị 2, Chợ Mới, An Giang</p>
          </div>
          <div className="hobby-phuccv" data-aos="fade-right" data-aos-duration="1000">
            <h3>HOBBY </h3>
            <p>Play foofball</p>
            <p>Read a book</p>
            <p>Watch a movie</p>
          </div>
          <div className="Skill-phuccv" data-aos="fade-right" data-aos-duration="1000">
            <h3>SKILLS SUMMARY</h3>
            <p>Problem-solving skills</p>
            <p> Teamwork skill</p>
            <p>Information retrieval skill</p>
          </div>
          <div className="LANGUAGE-phuccv" data-aos="fade-right" data-aos-duration="1000">
            <h3> PROGRAMMING LANGUAGE</h3>
            <p> Learned HTML/CSS, Java, JavaScript and SQL Server</p>
          </div>
        </div>
        <div className="contect-right" data-aos="fade-left">
          <div className="Profile-phuccv">
            <h1>Profile</h1>
            <p>
              {" "}
              For myself, I always seize opportunities, try to complete assigned
              tasks and am not afraid of difficulties
            </p>
          </div>
          <div className="EDUCATION-phuccv">
            <h1>EDUCATION</h1>
            <div className="EDUCATION-info">
              <h2>Chau Van Liem High School</h2>
              <p>2018 - 2021</p>
              <h2> FPT University</h2>
              <p>2021 - current</p>
              <p>Major: Software engineer</p>
            </div>
          </div>
          <div className="TARGETS-phuccv">
            <h1>TARGETS</h1>
            <div className="TARGETS-info">
              <p>
                {" "}
                I hope that passing this OJT will give me more knowledge,
                experience and experience to become a good programmer in the
                future.
              </p>
            </div>
          </div>
          <div className="ADVANTAGE-phuccv">
            <h1>ADVANTAGE</h1>
            <div className="ADVANTAGE-info">
              <p> Eager to learn.</p>
              <p> Capture information quickly.. </p>
              <p> Always ready to participate in activities</p>
              <p> Flexibility in work</p>
            </div>
          </div>
          <div className="Experience-phuccv">
            <h1>Experience</h1>
            <div className="Experience-info">
              <p>Participate in many projects during your studies at school</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PhucCV;
