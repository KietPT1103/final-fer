import React, { useEffect } from 'react';
import AOS from 'aos';
import Carousel from 'react-bootstrap/Carousel';
import * as Icon from 'react-bootstrap-icons';
import 'aos/dist/aos.css';
import '../assets/styles/KietCVStyle.css';

function KietCV() {
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
                    selectEl.forEach(e => e.addEventListener(type, listener));
                } else {
                    selectEl.addEventListener(type, listener);
                }
            }
        };

        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener);
        };

        const navbarlinksActive = () => {
            let position = window.scrollY + 200;
            const navbarlinks = select('#navbar .scrollto', true);
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return;
                let section = select(navbarlink.hash);
                if (!section) return;
                if (
                    position >= section.offsetTop &&
                    position <= section.offsetTop + section.offsetHeight
                ) {
                    navbarlink.classList.add('active');
                } else {
                    navbarlink.classList.remove('active');
                }
            });
        };

        window.addEventListener('load', navbarlinksActive);
        onscroll(document, navbarlinksActive);

        const scrollto = (el) => {
            let header = select('#header');
            let offset = header.offsetHeight;

            if (!header.classList.contains('header-scrolled')) {
                offset -= 20;
            }

            let elementPos = select(el).offsetTop;
            window.scrollTo({
                top: elementPos - offset,
                behavior: 'smooth'
            });
        };

        let selectHeader = select('#header');
        if (selectHeader) {
            const headerScrolled = () => {
                if (window.scrollY > 100) {
                    selectHeader.classList.add('header-scrolled');
                } else {
                    selectHeader.classList.remove('header-scrolled');
                }
            };
            window.addEventListener('load', headerScrolled);
            onscroll(document, headerScrolled);
        }

        return () => {
            window.removeEventListener('load', navbarlinksActive);
            window.removeEventListener('scroll', navbarlinksActive);
        };
    }, []);

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    return (
        <div>
            <header id="header" className="fixed-top d-flex justify-content-center align-items-center header-transparent">
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a className="nav-link scrollto active" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#hero">
                                Hero
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
                            <a className="nav-link scrollto" href="#services">
                                Services
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
                <div className="hero-container" data-aos="fade-up"
                    data-aos-duration="3000">
                    <h1>Phạm Tuấn Kiệt</h1>
                    <h2>I'm an Intern Front-end developer</h2>
                    <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down"></i></a>
                </div>
            </section>

            <main id="main">
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <span>About Me</span>
                            <h2>About Me</h2>
                            <p>Some infomation about me</p>
                        </div>
                        <div className="row">
                            <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-in" data-aos-duration="3000"></div>
                            <div className="col-lg-8 d-flex flex-column align-items-stretch">
                                <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-lg-6" data-aos="fade-in" data-aos-duration="2000">
                                            <ul>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Phạm Tuấn Kiệt</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+84 76 000 0000</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kiên Giang, Việt Nam</span></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6" data-aos="fade-in" data-aos-duration="2000">
                                            <ul>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>university</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>Kietpt1103@gmail.com</span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div className="skills-content ps-lg-4">
                                    <div className="progress" data-aos="slide-left">
                                        <span className="skill">HTML <i className="val">100%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>

                                    <div className="progress" data-aos="slide-left">
                                        <span className="skill">CSS <i className="val">100%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>

                                    <div className="progress" data-aos="slide-left">
                                        <span className="skill">JavaScript <i className="val">80%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                <section id="resume" className="resume">
                    <div className="container">

                        <div className="section-title" data-aos="zoom-out-down">
                            <span>My Resume</span>
                            <h2>My Resume</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="zoom-out-right">
                                <h3 className="resume-title">Sumary</h3>
                                <div className="resume-item pb-0">
                                    <h4>My Objective</h4>
                                    <p><em>I hope to find an internship where I can learn and accumulate experiences to contribute to the company in the future. I aim to become a Junior Developer within one year and strive to become a professional Senior Developer within the next three years.</em></p>
                                </div>

                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4>FPT University</h4>
                                    <h5>2021 - Now</h5>
                                    <p><em>Software engineer</em></p>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="zoom-out-left">
                                <h3 className="resume-title">Professional Experience</h3>
                                <div className="resume-item">
                                    {/* <h4>Senior graphic design specialist</h4> */}
                                    <h5>Currently, I do not have practical work experience.</h5>
                                    {/* <p><em>Experion, New York, NY </em></p>
                                    <p>
                                        <ul>
                                            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                            <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                            <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                            <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                        </ul>
                                    </p> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="services" className="services">
                    <div className="container">

                        <div className="section-title" data-aos="zoom-in-down">
                            <span>My Services</span>
                            <h2>My Services</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in-right">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4 className="title">UI/UX Development</h4>
                                    <p className="description">I specialize in developing user interfaces (UI) and user experiences (UX) using HTML, CSS, and JavaScript to create engaging, user-friendly, and interactive websites.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-out-up">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4 className="title">Dynamic Web Application Development</h4>
                                    <p className="description">I have experience in building dynamic web applications using React, combined with technologies like Bootstrap and TailwindCSS to create powerful web applications with the best user experience.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-out-up">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                                    <h4 className="title">New Feature Development</h4>
                                    <p className="description">I participate in developing new features for applications using Java and other popular libraries, ensuring the functionality and performance of the application are stable and robust.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in-left">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-world"></i></div>
                                    <h4 className="title">Performance Optimization and Page Load Speed</h4>
                                    <p className="description">I have skills in optimizing source code and speeding up page load times using performance techniques and technologies to enhance user experience and application performance.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="testimonials" className="testimonials">
                    <div className="container position-relative">
                        <div className="testimonials-slider swiper" data-aos="fade-in" data-aos-delay="100">
                            <Carousel>
                                <Carousel.Item>
                                    <div className="testimonial-item">
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="testimonial-item">
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="testimonial-item">
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className="testimonial-item">
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="testimonial-item">
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </Carousel.Item>

                            </Carousel>
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>
                </section>
                {/* <section id="portfolio" className="portfolio">
                    <div className="container">

                        <div className="section-title">
                            <span>My Portfolio</span>
                            <h2>My Portfolio</h2>
                            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                        </div>

                        <ul id="portfolio-flters" className="d-flex justify-content-center">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>

                        <div className="row portfolio-container">

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" /></div>
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>App</p>
                                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" /></div>
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" /></div>
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>App</p>
                                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" /></div>
                                <div className="portfolio-info">
                                    <h4>Card 2</h4>
                                    <p>Card</p>
                                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" /></div>
                                <div className="portfolio-info">
                                    <h4>Web 2</h4>
                                    <p>Web</p>
                                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" /></div>
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>App</p>
                                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" /></div>
                                <div className="portfolio-info">
                                    <h4>Card 1</h4>
                                    <p>Card</p>
                                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" /></div>
                                <div className="portfolio-info">
                                    <h4>Card 3</h4>
                                    <p>Card</p>
                                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" /></div>
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section> */}
                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                            <span>Contact Me</span>
                            <h2>Contact Me</h2>
                            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-6" data-aos="zoom-in-right">

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="info-box">
                                            <i className="bx bx-share-alt"></i>
                                            <h3>Social Profiles</h3>
                                            <div className="social-links">
                                                <a href="#" className="twitter"><Icon.Twitter /></a>
                                                <a href="#" className="facebook"><Icon.Facebook /></a>
                                                <a href="#" className="instagram"><Icon.Instagram /></a>
                                                <a href="#" className="google-plus"><Icon.Skype /></a>
                                                <a href="#" className="linkedin"><Icon.Linkedin /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4">
                                            <i className="bx bx-envelope"></i>
                                            <h3>Email Me</h3>
                                            <p>contact@example.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4">
                                            <i className="bx bx-phone-call"></i>
                                            <h3>Call Me</h3>
                                            <p>+1 5589 55488 55</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6" data-aos="zoom-in-left">
                                <form action="" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main>

            <footer id="footer">
                <div className="container">
                    <h3>Pham Tuan Kiet</h3>
                    <p>As one as wind and cloud </p>
                    <div className="social-links">
                        <a href="#" className="twitter"><Icon.Twitter /></a>
                        <a href="#" className="facebook"><Icon.Facebook /></a>
                        <a href="#" className="instagram"><Icon.Instagram /></a>
                        <a href="#" className="google-plus"><Icon.Skype /></a>
                        <a href="#" className="linkedin"><Icon.Linkedin /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default KietCV;
