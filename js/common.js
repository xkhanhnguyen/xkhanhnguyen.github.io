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
      // Create a div element to contain the fetched HTML content
      const container = document.createElement('div');
      container.innerHTML = html;

      // Apply additional CSS styling or adjustments to the fetched HTML content
      container.classList.add('d-flex flex-column', 'profile', 'nav-menu navbar'); // Add a CSS class to style the content as sidebar

      // Insert the modified HTML content into the placeholder element
      document.getElementById(elementId).appendChild(container);
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