import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

function Achievements() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="certificates">
      <div className="row text-light ">
          <div className="col-md p-3">
            <div
              className="card achievements-card"
              data-aos="fade-up"
              style={{ width: "100%" }}
            >
              <div className="card-body ">
                <h5 className="card-title">Smart India Hackathon</h5>
                <p className="card-text">
                  SIH Finalist In College Level 2023 <br />
                  <hr />
                  Finalist in the college-level Smart India Hackathon 2023 with
                  the project "Mind Bloom," a sentiment analysis model.
                  Developed a robust system to analyze and interpret emotional
                  tones in text data.
                </p>
                <button className="btn btn-outline-primary ">
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          <div className="col p-3">
            <div
              className="card achievements-card"
              data-aos="fade-up"
              style={{ width: "100%" }}
            >
              <div className="card-body">
                <h5 className="card-title">FullStack Development Hackathon</h5>
                <p className="card-text">
                  April 2023 <br /> <hr />
                  Participated in a fullstack hackathon, where I collaborated
                  with a team to develop a web application from scratch.Enhanced
                  my skills in front-end and back-end development using React,
                  Node.js, and MongoDB.
                </p>
                <button className="btn btn-outline-primary ">
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row  text-light ">
          <div className="col-md  p-3">
            <div
              className="card achievements-card"
              data-aos="fade-up"
              style={{ width: "100%" }}
            >
              <div className="card-body ">
                <h5 className="card-title">CBIT Hacktoberfest Hackathon</h5>
                <p className="card-text">
                  October 2023 <br />
                  <hr />
                  Awarded a Certificate of Participation for the CBIT
                  Hacktoberfest Hackathon 2023, held from 7th-8th October. The
                  event was organized by the CBIT Open-Source Community in
                  association with Title Sponsor and Co-Sponsor.
                </p>
                <button className="btn btn-outline-primary ">
                  View Certificate
                </button>
              </div>
            </div>
          </div>

          <div className="col  p-3">
            <div
              className="card achievements-card"
              data-aos="fade-up"
              style={{ width: "100%" }}
            >
              <div className="card-body">
                <h5 className="card-title">Mathworks Virtual Internship</h5>
                <p className="card-text">
                  May 2023 <br /> <hr />
                  Completed a virtual internship at MathWorks, focusing on
                  MATLAB and Simulink for data analysis and model development.
                  Gained practical experience in implementing engineering
                  solutions and simulations.
                </p>
                <button className="btn btn-outline-primary ">
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Achievements;
