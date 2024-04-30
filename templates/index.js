// index.js

// Function to fetch and insert HTML content into a specified element
function fetchAndInsertHTML(url, elementId) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      // Read the response as text
      .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;
      })
      .catch(error => {
        console.error('There was a problem fetching the HTML:', error);
      });
  }
  
  // Call the fetchAndInsertHTML function to fetch and insert header.html into the header element
  fetchAndInsertHTML('header.html', 'header');
  
  // Call the fetchAndInsertHTML function to fetch and insert footer.html into the footer element
//   fetchAndInsertHTML('./footer.html', 'footer');
