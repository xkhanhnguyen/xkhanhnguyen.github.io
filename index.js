// JavaScript code to include header.html into index.html

// Function to load external HTML file
function includeHeader() {
  // Fetch the header.html file
  fetch('header.html')
      .then(response => {
          // Check if the response is successful
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          // Return the response as text
          return response.text();
      })
      .then(html => {
          // Insert the content of the header.html file into the header element
          document.getElementById('header').innerHTML = html;
      })
      .catch(error => {
          // Log any errors to the console
          console.error('There was a problem fetching the header:', error);
      });
}

// Call the function to include the header when the window loads
window.onload = includeHeader;
