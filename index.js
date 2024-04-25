// Fetch the header content from the header.html file
fetch('header.html')
  .then(response => response.text())
  .then(html => {
    // Insert the fetched header content into the div with id "header"
    document.getElementById('header').innerHTML = html;
  })
  .catch(error => console.error('Error fetching header:', error)); // Log any errors to the console
