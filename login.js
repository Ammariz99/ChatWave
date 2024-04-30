

/*================Login====================*/

// Event listener when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Event listener for the login form submit button
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Get the username and password from the form inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      // Send a POST request to the login API endpoint
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      // Check if the response is OK (status code 200)
      if (response.ok) {
        // Parse the JSON response
        const data = await response.json();
        // Save the token and ID to localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data));
        // Log success and redirect to main.html
        console.log('Login successful:', data);
        window.location.href = "main.html";
      } else {
        // Throw an error for non-OK responses
        throw new Error(`Login failed: ${response.statusText}`);
      }
    } catch (error) {
      // Log and alert the error for failed login attempts
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again later.');
    }
  });

  // Event listener for the logout button
  document.getElementById('logoutButton').addEventListener('click', () => {
    // Redirect to the login page
    window.location.href = 'index.html';
  });

  
  const token = localStorage.getItem('token');

  if (token) {
    fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(console.log)
      .catch(error => console.error('Token fetch error:', error));
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  if (!token && !window.location.href.includes('index.html')) {
      // Redirect to index.html if token doesn't exist and not already on index.html
      window.location.href = 'index.html';
  }
});