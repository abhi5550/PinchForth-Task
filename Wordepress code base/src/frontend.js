import React, { useState } from "react";
import ReactDOM from "react-dom";
import Axios from 'axios'; // Import Axios

import img from './Resorces.jpg';
import './frontend.scss';

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");

divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<OurComponent {...data} />, div);
  div.classList.remove("boilerplate-update-me");
});

function OurComponent(props) {
  const [openPopup, setOpenPopup] = useState(false);

  const closePopup = () => {
    setOpenPopup(false);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const email = document.getElementById('email').value;


      // Make a request to your proxy server
      const response = await Axios.post('http://localhost:3001/hubspot-api', {
        url: 'https://api.hubapi.com/crm/v3/objects/contacts',
        method: 'POST',
        headers: {
          'Authorization': 'Bearer pat-na1-9b130908-1533-4dc1-a58e-86999f61535b',
          'Content-Type': 'application/json',
        },
        data: {
          properties: {
            email: email,
            // Add other CRM properties as needed
          }
        },
      });

      if (response.status === 200) {
        console.log('Form submitted successfully');
        // Handle success (e.g., show a success message)
      } else {
        console.error('Error submitting form:', response.statusText);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      // Handle unexpected errors
    }

    closePopup();
  };

  return (
    <div className="boilerplate-frontend">
      <button onClick={() => setOpenPopup(!openPopup)}>Open Popup</button>
      {openPopup && (
        <div id="custom-popup" className="popup">
          <div className="popup-content">
            <img
              src={img}
              alt="Engaging Visual"
              className="popup-image"
              width="300"
              height="200"
            />
            <div className="second">
              <span className="close-popup" onClick={closePopup}>
                x
              </span>
              <h2 className="class-popup-heading">The Black Friday Sale is here</h2>
              <p>Subscribe and get our best price of the year</p>
              <form onSubmit={submitForm} className="subscription-form">
                <label htmlFor="email" className="label-email">
                  Email*
                </label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                <button type="submit" className="discount-button">
                  Get an EXTRA 20% off
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OurComponent;
