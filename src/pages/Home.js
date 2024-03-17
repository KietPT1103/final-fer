import React from 'react'
import Header from '../components/Header'
import AOS from 'aos';

import 'aos/dist/aos.css';
function Home() {

  //animation libary
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
      <Header />
      <div class="py-5 team3 bg-light">
        <div class="container">
          <div class="row justify-content-center mb-4">
            <div class="col-md-7 text-center" data-aos="zoom-in-down">
              <h3 class="mb-3">Group 2 Member</h3>
              <h6 class="subtitle font-weight-normal">Some detail about my group member</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 mb-4" data-aos="flip-left" data-aos-duration="2000">
              <div class="row">
                <div class="col-md-12">
                  <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" alt="wrapkit" class="img-fluid" />
                </div>
                <div class="col-md-12">
                  <div class="pt-2">
                    <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                    <h6 class="subtitle">Property Specialist</h6>
                    <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                    <ul class="list-inline">
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4" data-aos="flip-up" data-aos-duration="2000">
              <div class="row">
                <div class="col-md-12 pro-pic">
                  <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg" alt="wrapkit" class="img-fluid" />
                </div>
                <div class="col-md-12">
                  <div class="pt-2">
                    <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                    <h6 class="subtitle">Property Specialist</h6>
                    <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                    <ul class="list-inline">
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4" data-aos="flip-right" data-aos-duration="2000">
              <div class="row">
                <div class="col-md-12 pro-pic">
                  <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" alt="wrapkit" class="img-fluid" />
                </div>
                <div class="col-md-12">
                  <div class="pt-2">
                    <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                    <h6 class="subtitle">Property Specialist</h6>
                    <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                    <ul class="list-inline">
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col-lg-4 mb-4" data-aos="zoom-in-right" data-aos-duration="2000">
              <div class="row">
                <div class="col-md-12">
                  <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" alt="wrapkit" class="img-fluid" />
                </div>
                <div class="col-md-12">
                  <div class="pt-2">
                    <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                    <h6 class="subtitle">Property Specialist</h6>
                    <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                    <ul class="list-inline">
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4" data-aos="zoom-in-left" data-aos-duration="2000">
              <div class="row">
                <div class="col-md-12 pro-pic">
                  <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" alt="wrapkit" class="img-fluid" />
                </div>
                <div class="col-md-12">
                  <div class="pt-2">
                    <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                    <h6 class="subtitle">Property Specialist</h6>
                    <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                    <ul class="list-inline">
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home