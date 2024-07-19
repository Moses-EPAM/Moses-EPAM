import React from "react";

function Projects() {
  return (
    <>
        <section className="row my-5 text-light " id="projects">
          <div className="col project-col p-3">
            <div className="card project-card ">
              <img
                src="https://enrollacademy.com/wp-content/uploads/2021/06/CBIT2.png"
                className="card-img-top"
                alt="#"
                style={{ padding: "0.1rem", height: "15rem" }}
              />
              <div class="card-body">
                <h5 className="card-title">CBIT CLUBS</h5>
                <p className="card-text">
                  Mongodb,Express,React,Nodejs, Git,VS Code <br /> <hr />
                  Developed a web platform for CBIT Clubs, enabling students to
                  register for clubs, hackathons, and events. <br />
                  Integrated MongoDB Atlas for efficient data management
                </p>
                <a href="https://66960219296a3f1f13945343--bright-daffodil-369893.netlify.app/" className="btn btn-outline-primary ">
                  Live Demo
                </a>
                <a href="https://github.com/Moses-Padirolu/cbit_club_client.git" className="btn btn-outline-primary mx-4">
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="col project-col p-3">
            <div className="card project-card ">
              <img
                src="https://camudigitalcampus.com/wp-content/uploads/2023/05/Responsive-to-devices-MyCamu-3.0.jpg"
                className="card-img-top"
                alt="#"
                style={{ padding: "0.1rem", height: "15rem" }}
              />
              <div class="card-body">
                <h5 className="card-title">CBIT ATTENDANCE</h5>
                <p className="card-text">
                  React Js, Git,VS Code <br />
                  <hr />
                  Developed a web platform for CBIT Attendance, enabling
                  students to check their subject attendance
                  <br />
                  It's a cloned website of cbit original home page.
                </p>
                <button  className="btn btn-outline-primary disabled" onclick="return false;">
                  Live Demo
                </button>
                <a href="https://github.com/Moses-Padirolu/CBIT-website.git" className="btn btn-outline-primary mx-4">
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="col project-col p-3">
            <div className="card project-card ">
              <img
                src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
                className="card-img-top"
                alt="#"
                style={{ padding: "0.1rem", height: "15rem" }}
              />
              <div class="card-body">
                <h5 className="card-title">MOVIES GALLERY</h5>
                <p className="card-text">
                  React Js,Git,VS Code <br /> <hr />
                  Developed a web platform for TV shows, All kinds of shows are
                  available like horror,ski-fi etc.
                  <br />
                  User has to filter the shows based on their interest and can
                  watch it in netlix.
                </p>
                <a href="https://github.com/Moses-Padirolu/MoviesGallery.git" className="btn btn-outline-primary disabled" onclick="return false;">
                  Live Demo
                </a>
                <a href="https://github.com/Moses-Padirolu/MoviesGallery.git" className="btn btn-outline-primary mx-4">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </section>

    </>
  );
}

export default Projects;

