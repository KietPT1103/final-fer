import React, { useEffect } from "react";
import AOS from "aos";
import Carousel from "react-bootstrap/Carousel";
import * as Icon from "react-bootstrap-icons";
import "aos/dist/aos.css";

import avt from "../assets/images/DucCV/avt.jpg";

import "../assets/styles/DucCV.css";

function DucCV() {
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      const navbarlinks = select("#navbar .scrollto", true);
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };

    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);

    const scrollto = (el) => {
      let header = select("#header");
      let offset = header.offsetHeight;

      if (!header.classList.contains("header-scrolled")) {
        offset -= 20;
      }

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    let selectHeader = select("#header");
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled");
        } else {
          selectHeader.classList.remove("header-scrolled");
        }
      };
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
    }

    return () => {
      window.removeEventListener("load", navbarlinksActive);
      window.removeEventListener("scroll", navbarlinksActive);
    };
  }, []);

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
    <div>
      <header
        id="header"
        className="fixed-top d-flex justify-content-center align-items-center header-transparent"
      >
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#minhduc">
                MinhDuc
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#project">
                Project
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </header>

      <section id="hero">
        <div class="hero-container" data-aos="fade-up" data-aos-duration="3000">
          <h1>Nguyễn Lưu Minh Đức </h1>
          <h2>I'm an Intern Front-end developer</h2>
          <a href="#about" class="btn-scroll scrollto" title="Scroll Down">
            <i class="bx bx-chevron-down"></i>
          </a>
        </div>
      </section>

      <div class="wrapper grid grid wide">
        <div class="wrapper-infomation" id="about">
          <div class="avatar-contact">
            <img src={avt} alt="Avatar" />
            <p class="i">
              <b>E</b> : minhduc2003kols@gmail.com
            </p>
            <p class="i">
              <b>P</b> : 0333090091
            </p>
            <p class="i">
              <b>D</b> : 03/02/2003
            </p>
            <p class="i">
              <b>A</b> : An Giang, Vietnam
            </p>
          </div>
          <div class="infomation">
            <div style={{ position: "relative" }} class="hr">
              <h1>Nguyen Luu Minh Duc</h1>
              <div class="specialize">
                <i>Front-End Developer</i>
              </div>
              <div class="target">
                <h3 style={{ fontWeight: 400 }}>OBJECTIVE</h3>
              </div>
            </div>
            <div class="target-des">
              I am looking for an internship opportunity in the software
              development field, where I can apply and enhance my programming
              skills. My creativity and eagerness to learn will be the
              foundation for building outstanding user experiences. I look
              forward to working in a challenging and innovative environment
              where I can meet, learn, and develop myself.
            </div>
          </div>
        </div>
        <div class="info" id="resume">
          <hr class="custom-hr" />
          <div class="edu-exp">
            <div class="edu">EDUCATION</div>
            <div class="exp" style={{ marginLeft: "27.9%" }}>
              EXPERIENCE
            </div>
          </div>
          <div class="Layout-edu-exp">
            <div class="edu-des">
              <div class="edu-fpt">
                <h3> FPT UNIVERSITY </h3>
                <p>Software Engineering</p>
                <p> 2021-2025 </p>
              </div>
              <div class="edu-coursera">
                <h3>COURSERA</h3>
                <i>
                  <h4>Certificate :</h4>
                </i>
                <i>
                  <div>
                    - Web Design for Everybody <br />
                    - Interactivity with JavaScript <br />
                    - Advanced Styling with Responsive Design <br />
                    - Turn Ethical Frameworks into Actionable Steps <br />
                    - Software Development Processes and Methodologies <br />
                  </div>
                </i>
                <p>04/2022 - 08/2023</p>
              </div>
              <div class="layout-skill">
                <div class="skill-duc">Language</div>
                <h3>English</h3>
                <i>
                  <p>
                    <b style={{ fontWeight: 500 }}>Summer2022</b> : English
                    certificate- Level 6- Summit 2
                  </p>
                  <p>Ability to read English documents, basic communication</p>
                </i>
              </div>
              <div class="layout-skill">
                <div class="skill-duc">Activities</div>
                <h4>2021-2023</h4>
                <i>
                  <p>
                    - Actively participated in conferences organized by the
                    school
                  </p>
                  <p>
                    - Actively participated in all valid party activities
                    organized by the school party cell
                  </p>
                  <p>
                    - Tutoring: teaching basic knowledge of java, OOP, reactJs
                  </p>
                </i>
              </div>
            </div>
            <div class="exp-des">
              <div class="skill-duc" style={{ marginTop: "30%" }}>
                Awards
              </div>
              <i>
                <h5 style={{ marginTop: 52 }} />
                Honored to be recognized at the Fall 2023 Honor Ceremony.
              </i>
              <div class="item-des">
                <div class="layout-skill">
                  <div
                    class="skill-duc"
                    style={{ marginTop: 37.5, fontSize: 14 }}
                  >
                    Skills
                  </div>
                  <h3>Programming</h3>
                  <i>
                    <ul>
                      <li>
                        Proficient in Reactjs, HTML5/CSS3, JavaScript, and
                        Responsive Design
                      </li>
                      <li>
                        Proficient in using CSS preprocessors like SASS/SCSS
                      </li>
                      <li>
                        Knowledgeable in Java, C, C++, JavaScript programming
                      </li>
                      <li>Basic Git usage</li>
                      <li>
                        Ability to customize code without depending on external
                        libr/aries
                      </li>
                      <li>Strong logical thinking skills</li>
                      <li>Ability to work in a team</li>
                    </ul>
                  </i>
                  <h3>Research, Self-learning</h3>
                  <i>
                    <ul>
                      <li>
                        Ability to self-learn and quickly adapt to new
                        technologies.
                      </li>
                    </ul>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div class="Project" id="project">
            <div class="custom-hr"></div>
            <div class="skill-duc">Projects</div>
            <div class="project-table">
              <div class="project-title">
                <h4>Online Mobile Phone Store Website</h4>
                <p class="time">8/2023 - 12/2023</p>
              </div>
              <table border="1">
                <tbody>
                  <tr>
                    <th>Project Name</th>
                    <td style={{ fontWeight: 500 }}>Website Selling Phones</td>
                  </tr>
                  <tr>
                    <th>Project Description</th>
                    <td>
                      - An online mobile phone selling system with full
                      functionality such as: Search, Sort, Filter products by
                      name, br/and, pagination of products, shopping cart using
                      cookie and session. <br />
                      - Apply MVC model to the project <br />- Source code: ...
                    </td>
                  </tr>
                  <tr>
                    <th>Number of Team Members</th>
                    <td>6</td>
                  </tr>
                  <tr>
                    <th>Position</th>
                    <td>Leader</td>
                  </tr>
                  <tr>
                    <th>Role in the Project</th>
                    <td>Full-stack developer</td>
                  </tr>
                  <tr>
                    <th>Technologies Used</th>
                    <td>Java Web, HTML, CSS, JavaScript, SQL Server</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="project-table">
              <div class="project-title">
                <h4>Online Movie Ticket Booking Website</h4>
                <p class="time">1/2024 - 3/2024</p>
              </div>
              <table border="1">
                <tbody>
                  <tr>
                    <th>Project Name</th>
                    <td style={{ fontWeight: 500 }}>
                      Website Booking Online Ticket Cinema
                    </td>
                  </tr>
                  <tr>
                    <th>Project Description</th>
                    <td>
                      - An automated online ticket buying system with full
                      functionality such as: Register and login via email,
                      Search, Select movie, Quick ticket booking, Display hot
                      movies, Payment, Automatically schedule screenings,
                      shopping cart using cookie and session ... <br />
                      - Apply MVC model to the project <br />- Source code:{" "}
                      <a
                        style={{ color: "black" }}
                        href="https://github.com/Md0302fe/G2_cinema"
                      >
                        https://github.com/Md0302fe/G2_cinema
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Number of Team Members</th>
                    <td>6</td>
                  </tr>
                  <tr>
                    <th>Position</th>
                    <td>Leader</td>
                  </tr>
                  <tr>
                    <th>Role in the Project</th>
                    <td>Full-stack developer</td>
                  </tr>
                  <tr>
                    <th>Technologies Used</th>
                    <td>Java Web, HTML, CSS, JavaScript, SQL Server</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <span>Contact Me</span>
            <h2>Contact Me</h2>
            <p>
              Sit sint consectetur velit quisquam cupiditate impedit suscipit
              alias
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="zoom-in-right">
              <div class="row">
                <div class="col-md-12">
                  <div class="info-box">
                    <i class="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div class="social-links">
                      <a href="#" class="twitter">
                        <Icon.Twitter />
                      </a>
                      <a href="#" class="facebook">
                        <Icon.Facebook />
                      </a>
                      <a href="#" class="instagram">
                        <Icon.Instagram />
                      </a>
                      <a href="#" class="google-plus">
                        <Icon.Skype />
                      </a>
                      <a href="#" class="linkedin">
                        <Icon.Linkedin />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Me</h3>
                    <p>contact@example.com</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Me</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="zoom-in-left">
              <form action="" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div class="container">
          <h3>Nguyen Luu Minh Duc</h3>
          <p>As one as wind and cloud </p>
          <div class="social-links">
            <a href="#" class="twitter">
              <Icon.Twitter />
            </a>
            <a href="#" class="facebook">
              <Icon.Facebook />
            </a>
            <a href="#" class="instagram">
              <Icon.Instagram />
            </a>
            <a href="#" class="google-plus">
              <Icon.Skype />
            </a>
            <a href="#" class="linkedin">
              <Icon.Linkedin />
            </a>
          </div>
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Laura</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DucCV;
