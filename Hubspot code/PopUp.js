// Function to open the popup
function openPopup() {
    document.getElementById('custom-popup').style.display = 'flex';
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('custom-popup').style.display = 'none';
  }
  
  // Function to submit the form
  async function submitForm() {
    // Get the email from the form
    const email = document.getElementById('email').value;
  
    try {
      // Send a request to the proxy server
      const response = await fetch('http://192.168.0.6:3001/api/crm/v3/objects/contacts', {
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
  
    // Add any additional form submission logic here (e.g., redirect, show a confirmation message)
  
    // Close the popup after form submission
    closePopup();
  }
  