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
      console.log('Fetched HTML content:', html); // Log the fetched HTML content
      
      // Create a div element to contain the fetched HTML content
      const container = document.createElement('div');
      container.classList.add('d-flex', 'flex-column'); // Add flex-column class
      
      console.log('Container element:', container); // Log the container element before modification
      
      // Set the container's innerHTML to the fetched HTML content
      container.innerHTML = html;

      console.log('Container element after modification:', container); // Log the container element after modification
      
      // Insert the modified HTML content into the placeholder element
      const placeholder = document.getElementById(elementId);
      placeholder.appendChild(container);
      console.log('Inserted HTML content into placeholder:', placeholder); // Log the placeholder element after insertion
    })
    .catch(error => {
      console.error('There was a problem fetching the HTML:', error);
    });
}

// Wrap the function calls in an event listener to ensure they run after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  // Call the fetchAndInsertHTML function to fetch and insert header.html into the header element
  fetchAndInsertHTML('../components/header.html', 'header-placeholder');

  // Call the fetchAndInsertHTML function to fetch and insert footer.html into the footer element
  fetchAndInsertHTML('../components/footer.html', 'footer-placeholder');
});
