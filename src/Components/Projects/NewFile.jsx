import React from 'react'

const NewFile = () => {
  return (
    <section className="row my-5 text-light " id='projects'>
    <div className="col project-col p-3">
      <div className="card project-card ">
        <img
          src="https://i.ytimg.com/vi/QVokz2OrEy8/maxresdefault.jpg"
          className="card-img-top"
          alt="#"
          style={{ padding: "0.1rem", height: "15rem" }}
        />
        <div class="card-body">
          <h5 className="card-title">CRUD OPERATIONS</h5>
          <p className="card-text">
            React Js,Git,VS Code <br /> <hr />
            I have used react hooks and props to achieve react crud
            operations.
            <br />
            Developed a webpage , where we can perform add,update and
            delete operations on todo lists.
          </p>
          <a href="#" className="btn btn-outline-primary disabled" onclick="return false;">
            Live Demo
          </a>
          <a href="#" className="btn btn-outline-primary mx-4">
            Source Code
          </a>
        </div>
      </div>
    </div>

    <div className="col project-col p-3">
      <div className="card project-card ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5X-wqFQ6lX0Y4gJLfyC-dft1gQ6YlEVxYxA&s"
          className="card-img-top"
          alt="#"
          style={{ padding: "0.1rem", height: "15rem" }}
        />
        <div class="card-body">
          <h5 className="card-title">HOUSE PRICE PREDICTION</h5>
          <p className="card-text">
            Machine Learning,Jupter Note Book, Git,VS Code <br /> <hr />
            Performed preprocessing on data collected from kaggle.
            <br />
            By using machine learning algorithms sucessfully predicted
            house prices.
          </p>
          <a href="#" className="btn btn-outline-primary disabled" onclick="return false;">
            Live Demo
          </a>
          <a href="#" className="btn btn-outline-primary mx-4">
            Source Code
          </a>
        </div>
      </div>
    </div>

    <div className="col project-col p-3">
      <div className="card project-card ">
        <img
          src="https://codewithfaraz.com/img/signup.png"
          className="card-img-top"
          alt="#"
          style={{ padding: "0.1rem", height: "15rem" }}
        />
        <div class="card-body">
          <h5 className="card-title">REGISTRATION FORM</h5>
          <p className="card-text">
            HTML,CSS,Git,VS Code <br /> <hr />
            A very simple registration form using basic web development
            skills.
            <br />
            It taked inputs and shows weather registered sucessfully or
            not based on taking user's correct inputs.
          </p>
          <a href="#" className="btn btn-outline-primary disabled" onclick="return false;">
            Live Demo
          </a>
          <a href="#" className="btn btn-outline-primary mx-4">
            Source Code
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewFile
