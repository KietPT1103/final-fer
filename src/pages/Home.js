import React from "react";
import Header from "../components/Header";
import AOS from "aos";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import "../assets/styles/Home.css";
function Home() {
  //animation libary
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // className applied after initialization
    animatedClassName: "aos-animate", // className applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classNamees on scroll
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
      <Header />
      <div className="container d-flex align-items-center justify-content-center flex-wrap">
        <div className="box">
          <div className="body">
            <div className="imgContainer">
              <img
                src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className="content  d-flex flex-column align-items-center justify-content-center">
              <div className="bg-green">
                <h3 className="text-white fs-5">Phạm Tuấn Kiệt</h3>
                <p className="fs-6 text-white">CE171830</p>
                <p className="fs-6 text-white">Front-end developer</p>
                <Link to={"/kiet"} className="text-success">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="body">
            <div className="imgContainer">
              <img
                src="https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </div>
            <div className="content  d-flex flex-column align-items-center justify-content-center">
              <div className="bg-red">
                <h3 className="text-white fs-5">Phạm Gia Tiến</h3>
                <p className="fs-6 text-white">CE170146</p>
                <p className="fs-6 text-white">Front-end developer</p>
                <Link to={"/tien"} className="text-color-tien">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="body">
            <div className="imgContainer">
              <img
                src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="content  d-flex flex-column align-items-center justify-content-center">
              <div className="bg-green">
                <h3 className="text-white fs-5">Nguyễn Lưu Minh Đức</h3>
                <p className="fs-6 text-white">CE171880</p>
                <p className="fs-6 text-white">Front-end developer</p>
                <Link to={"/duc"} className="text-success">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="body">
            <div className="imgContainer">
              <img
                src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="content d-flex flex-column align-items-center justify-content-center">
              <div>
              <h3 className="text-white fs-5">Nguyễn Hoàng Phúc</h3>
                <p className="fs-6 text-white">CE170737</p>
                <p className="fs-6 text-white">Front-end developer</p>
                <Link to={'/phuc'} className='text-success'>Detail</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="body">
            <div className="imgContainer">
              <img
                src="https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="content d-flex flex-column align-items-center justify-content-center">
              <div>
                <h3 className="text-white fs-5">Post Title</h3>
                <p className="fs-6 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo sed cum neque, rem provident ex. Laboriosam
                  perspiciatis modi eveniet in?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
