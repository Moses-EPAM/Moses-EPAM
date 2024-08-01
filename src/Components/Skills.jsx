import React from "react";

function Skills() {
  return (
    <>
      <section className="container my-5" id="skills">
        <div className="row head">
          <div className="col">Skills And TechStack</div>
        </div>
        <div className="row pb-3">
          <div className="row">
            <div className="col-md skills-container my-3">
              <div className="skill-heading py-3">FullStack Development</div>
              <div className="row">
                <div className="col ">
                  <div className="skils-text">HTMl</div>
                  <div className="skils-text">CSS</div>
                  <div className="skils-text">JavaScript</div>
                  <div className="skils-text">Boostrap</div>
                  <div className="skils-text">Reactjs</div>
                </div>
                <div className="col">
                  <div className="skils-text">Mongodb</div>
                  <div className="skils-text">Express Js</div>
                  <div className="skils-text">Node Js</div>
                  <div className="skils-text">Tailwind CSS</div>
                  <div className="skils-text"></div>
                </div>
              </div>
            </div>
            <div className="col-md skills-container  my-3">
              <div className="skill-heading py-3">Data Science</div>
              <div className="row">
                <div className="col">
                <div className="skils-text">Deep Learning</div>
                  <div className="skils-text">Machine Learning</div>
                  <div className="skils-text">Natural Language Processing</div>
                  <div className="skils-text">Data Analysis</div>
                  <div className="skils-text">Data Visualization</div>
                  
                </div>
                <div className="col ">
                <div className="skils-text">Power BI</div>
                  <div className="skils-text">Supervised Learning</div>
                  <div className="skils-text">Unsupervised Learning</div>
                  <div className="skils-text">Reinforcement Learning</div>
                  
                  <div className="skils-text">Statistics</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pb-3">
            <div className="col-md skills-container  my-3">
              <div className="skill-heading py-3">Programming</div>
              <div className="row">
                <div className="col">
                  <div className="skils-text">Java Language</div>
                  <div className="skils-text">Python Language</div>
                  <div className="skils-text">C Language</div>
                  <div className="skils-text">R Language</div>
                  <div className="skils-text">C++</div>
                </div>
                <div className="col">
                  <div className="skils-text">Structure Query Language</div>
                  <div className="skils-text">Data Structure And Algorithms</div>
                  <div className="skils-text">Object Orienter Programming</div>
                  
                </div>
              </div>
            </div>
            <div className="col-md skills-container   my-3">
              <div className="skill-heading py-3">Tools & Libraries</div>
              <div className="row">
                <div className="col">
                  <div className="skils-text pl-1">Git & GitHub</div>
                  <div className="skils-text">VS code</div>
                  <div className="skils-text">Intellij</div>
                  <div className="skils-text">PyCharm</div>
                  <div className="skils-text">Atom</div>
                </div>
                <div className="col">
                  <div className="skils-text pl-1">Scikit-Learn</div>
                  <div className="skils-text">Matplotlib</div>
                  <div className="skils-text">Python GUI</div>
                  <div className="skils-text">Numpy</div>
                  <div className="skils-text">Pandas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
