import React from "react";
import { ReactTyped } from "react-typed";

function Header() {
  return (
    <>
      <div className="header-wraper">
        <div className="main-info">
          <h3>“Make it work, make it right, make it fast.” – Kent Beck</h3>
          <ReactTyped
            className="typed-text"
            strings={[
              "Data Science, Fullstack Development And Competative Programming Are My Trending Skills",
            ]}
            typeSpeed={80}
            backSpeed={40}
            backDelay={100}
            loop
          />
          <div className="row mt-3">
            <a href="https://drive.google.com/file/d/1CjdKiWOpFJvA2gw4QIuw5FPT5iOqm0vf/view?usp=sharing" alt="icon">
            <div className="btn btn-outline-success">
              Download CV 
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
