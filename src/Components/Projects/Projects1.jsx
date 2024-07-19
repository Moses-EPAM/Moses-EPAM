import React from 'react'

const Projects1 = () => {
  return (
    <section className="row my-5 text-light " id='projects'>
      <div className="col project-col p-3">
            <div className="card project-card ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DO6QjXFd8ROkiQAwE5GfOeIY2Ico5yU8QA&s"
                className="card-img-top"
                alt="#"
                style={{ padding: "0.1rem", height: "15rem" }}
              />
              <div class="card-body">
                <h5 className="card-title">IRIS DATA CLASSIFICATION</h5>
                <p className="card-text">
                  Machine Learning,Linear
                  Regression,Classificatioon,StreamLit,Git,VS Code <br /> <hr />
                  Classified iris data using different machine learning
                  algorithms.
                  <br />
                  Developed a webpage using stream lit.
                </p>
                <button className="btn btn-outline-primary disabled" onclick="return false;">
                  Live Demo
                </button>
                <a href="https://github.com/Moses-Padirolu/IrisClassification.git" className="btn btn-outline-primary mx-4">
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="col project-col p-3">
            <div className="card project-card ">
              <img
                src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Ff2fa1cdd9340fae53fcb49f577292458.cdn.bubble.io%2Ff1708756067360x785698731169245800%2FMicrosoftTeams-image-3.png?w=&h=&auto=compress&dpr=1&fit=max"
                className="card-img-top"
                alt="#"
                style={{ padding: "0.1rem", height: "15rem" }}
              />
              <div class="card-body">
                <h5 className="card-title">IPL DATA ANALYSIS</h5>
                <p className="card-text">
                  Data Science,R Programming, Git,VS Code <br />
                  Performed preprocessing and analysis of ipl data (2008-2019)
                  <br /> <hr />
                  Found out meaningfull insights and by using machine learning
                  algorithms predictions are made.
                </p>
                <button className="btn btn-outline-primary disabled" onclick="return false;">
                  Live Demo
                </button>
                <button className="btn btn-outline-primary mx-4 disabled" onclick="return false">
                  Source Code
                </button>
              </div>
            </div>
          </div>

          <div className="col project-col p-3">
            <div className="card project-card ">
              <img
                src="https://i.ytimg.com/vi/lfAymcJm3DY/maxresdefault.jpg"
                className="card-img-top"
                alt="#"
                style={{ padding: "0.1rem", height: "15rem" }}
              />
              <div class="card-body">
                <h5 className="card-title">Time Complexity Estimation</h5>
                <p className="card-text">
                  ML, Python, Mathplotlib, GUI,Git,VS Code <br /> <hr />
                  Implemented sorting algorithms with continuous integer inputs,
                  measuring and graphing their time complexity.
                  <br />
                  Applied linear regression to estimate unknown array sizes
                  based on time taken.
                </p>
                <button className="btn btn-outline-primary disabled" onclick="return false;">
                  Live Demo
                </button>
                <a href="https://github.com/Moses-Padirolu/Time-Complexity-Of-Sorting-Algorithms.git" className="btn btn-outline-primary mx-4">
                  Source Code
                </a>
              </div>
            </div>
          </div>
          
    </section>
  )
}

export default Projects1
