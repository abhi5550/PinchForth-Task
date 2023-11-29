// popup.js
function openPopup() {
    document.getElementById('custom-popup').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('custom-popup').style.display = 'none';
  }
  
  async function submitForm(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const formData = {
      email: email,
      // Add other form fields if necessary
    };
  
    try {
      const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer pat-na1-9b130908-1533-4dc1-a58e-86999f61535b',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: {
            email: email,
            // Add other CRM properties as needed
          }
        }),
      });
  
      if (response.ok) {
        console.log('HubSpot CRM contact created successfully');
        // Handle success (e.g., show a success message)
      } else {
        console.error('Error creating HubSpot CRM contact:', response.statusText);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      // Handle unexpected errors
    }
     closePopup()
    // Add any additional form submission logic here (e.g., redirect, show a confirmation message)
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const popupButton = document.getElementById('open-popup-button');
    const closeButton = document.querySelector('.close-popup');
    const form = document.querySelector('.subscription-form');
  
    popupButton.addEventListener('click', openPopup);
    closeButton.addEventListener('click', closePopup);
    form.addEventListener('submit', submitForm);
  });
  