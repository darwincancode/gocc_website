import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="Slide Forward Icon"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="Slide Backward Icon"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>Angelina Jolie</h3>
                  <span>Grelina Osmeña Christian College, Hilongos</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Grelina Osmeña Christian College
                was one of the best decisions I've ever made . The supportive
                community, state-of-the-art facilities,and commitment to
                academic excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>Darwin Piodos</h3>
                  <span>Grelina Osmeña Christian College, Hilongos</span>
                </div>
              </div>
              <p>
                Grelina Osmeña Christian College offers a rich academic
                environment with world-class faculty and diverse student body,
                fostering intellectual growth and interdisciplinary
                collaboration.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>Angel Bron</h3>
                  <span>Grelina Osmeña Christian College, Hilongos</span>
                </div>
              </div>
              <p>
                The university's robust resources and opportunities empower
                students to delve deeply into their interests, from cutting-edge
                research to vibrant extracurricular activities.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>James Harden</h3>
                  <span>Grelina Osmeña Christian College, Hilongos</span>
                </div>
              </div>
              <p>
                While the institution's prestige is undeniable, some may find
                its competitive atmosphere demanding, requiring resilience and
                adaptability to thrive academically and socially.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;