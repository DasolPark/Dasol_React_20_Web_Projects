import React from 'react';

import './MenuSliderAndModal.css';

export default class MenuSliderAndModal extends React.Component {
  render() {
    return (
      <div className="menu-slider__wrapper">
        <div className="menu-slider__container">

          <nav>
            <div className="logo">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="logo"></img>
            </div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Me</a></li>
            </ul>
          </nav>

          <header>
            <button className="toggle"><i className="fa fa-bars fa-2x"></i></button>

            <h1>My Landing Page</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, amet!
            </p>

            <button className="open-btn">Sign Up</button>
          </header>

          <div className="container">
            <h2>What is this landing page about?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure
              accusamus ab consectetur eos provident ipsa est perferendis architecto.
              Provident, quaerat asperiores. Quo esse minus repellat sapiente, impedit
              obcaecati necessitatibus.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio
              officia ipsa. Cum dignissimos possimus et non provident facilis saepe!
            </p>

            <h2>Tell Me More</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eaque
              delectus explicabo qui reprehenderit? Aspernatur ad similique minima
              accusamus maiores accusantium libero autem iusto reiciendis ullam
              impedit esse quibusdam, deleniti laudantium rerum beatae, deserunt nemo
              neque, obcaecati exercitationem sit. Earum.
            </p>

            <h2>Benefits</h2>
            <ul>
              <li>Lifetime Access</li>
              <li>30 Day Money Back</li>
              <li>Tailored Customer Support</li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quam
              nostrum, fugiat, itaque natus officia laborum dolorum id accusantium
              culpa architecto tenetur fuga? Consequatur provident rerum eius ratione
              dolor officiis doloremque minima optio dignissimos doloribus odio
              debitis vero cumque itaque excepturi a neque, expedita nulla earum
              accusamus repellat adipisci veritatis quam. Ipsum fugiat iusto pariatur
              consectetur quas libero dolor dolores dolorem, nostrum ducimus
              doloremque placeat accusamus iste, culpa quaerat consequatur?
            </p>
          </div>

          <div className="modal-container">
            <div className="modal">
              <button className="close-btn">
                <i className="fa fa-times"></i>
              </button>
              <div className="modal-header">
                <h3>Sign Up</h3>
              </div>
              <div className="modal-content">
                <p>Register with us to get offers, support and more</p>
                <form className="modal-form">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-input" placeholder="Enter Name" />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-input" placeholder="Enter Email" />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-input" placeholder="Enter Password" />
                  </div>
                  <div>
                    <label htmlFor="password2">Confirm Pssword</label>
                    <input type="password" className="form-input" placeholder="Confirm Password" />
                  </div>
                  <input type="submit" value="Submit" className="submit-btn"></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}