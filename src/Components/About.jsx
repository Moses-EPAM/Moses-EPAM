import React from "react";

function About() {
  return (
    <>
      <section  className="container about-container my-5" id="about">
        <div className="row head">
          <div className="col">About Me</div>
        </div>
        <div className="row pb-3">
          <div className="col my-image-container m-2">
            <img
              className="my-image"
              src="https://media.licdn.com/dms/image/D5603AQHzqzFBrgEjKg/profile-displayphoto-shrink_800_800/0/1676305938174?e=1726704000&v=beta&t=zCws-MfpxiB4skO9RUmTog5Pl-uNRraJosxJw9fyKTw"
              alt="icon"
            />
          </div>
          <div className="col about-text text-light px-2">
            <div className="col ">
            I am <small style={{fontSize:"1.2rem",fontWeight:"500",color:"orange"}}>Moses Padirolu</small>, currently pursuing a Bachelor of Engineering in
            Artificial Intelligence and Data Science at Chaitanya Bharathi
            Institute of Technology with a CGPA of 8.41/10. I am proficient in
            C, Python, Java, R, and various web technologies including HTML,
            CSS, Bootstrap, JavaScript, React.js, MongoDB, Express, and Node.js.
            My projects include developing a web platform for CBIT Clubs and
            building an iris species classifier using Python and scikit-learn. I
            have hands-on experience in machine learning model development, data
            preprocessing, and IoT applications. I have excelled in
            extracurricular activities, securing 1st place in the <br />
            NCC competition, and captaining the Telangana handball team at the
            national level. Additionally, I enjoy playing chess and guitar,
            having achieved notable success in both. I aim to apply my skills in
            AI and data science to solve real-world problems and continuously
            seek opportunities for growth and learning.
            </div>
            <div className="col pt-3">
            <a href="/#contact"><div className="btn btn-outline-primary">Let's Talk</div></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
