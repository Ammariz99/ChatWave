class DarkModeToggle {
    constructor() {
      this.darkModeToggle = document.getElementById('darkModeToggle');
      this.body = document.body;
      this.darkModeIcon = document.getElementById('darkModeIcon');
      this.nameHeading = document.getElementById('usernameHeading1');

      this.darkModeToggle.addEventListener('click', this.toggleDarkMode.bind(this));
    }

    toggleDarkMode() {
      this.body.classList.toggle('dark-mode');
      this.darkModeIcon.classList.toggle('fa-toggle-on');
      this.darkModeIcon.classList.toggle('fa-toggle-off');
      this.nameHeading.classList.toggle('text-white'); // Add or remove text-white class
    }
  }

  const darkMode = new DarkModeToggle();



/*==================Uodate the username on timelne code start===============*/

  function updateUsername() {
    const usernameElement = document.getElementById("usernameHeading1");
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData && userData.username) {
      usernameElement.textContent = userData.username;
    }
  }
  
  // Call the function to update the username when needed
  updateUsername();


  function updateProfilePicture() {
    const profilePictureElement = document.querySelector('.rounded-full img');
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.image) {
      profilePictureElement.src = userData.image;
      profilePictureElement.alt = 'Profile Picture'; // Optional: Set alt text for accessibility
    }
  }
  
  // Call the function to update the profile picture when needed
  updateProfilePicture();

/*==================Uodate the username on timelne code end===============*/


/*==================Uodate the profile and username on posts code start===============*/



  function updateProfileAndUsername() {
    const profilePictureElement = document.querySelector('.post-card img');
    const usernameElement = document.querySelector('.post-card .username');

    const profilePictureElement01 = document.querySelector('.post-card img01');
    const usernameElement01 = document.querySelector('.post-card .username01');
    const userData = JSON.parse(localStorage.getItem('user'));
    
    if (userData) {
      // Update profile picture
      if (userData.image) {
        profilePictureElement.src = userData.image;
        profilePictureElement.alt = 'Profile Picture'; // Optional: Set alt text for accessibility
        
      }
      // Update username
      if (userData.username) {
        usernameElement.textContent = userData.username;
      }
    }
  }
  
  updateProfileAndUsername();
  
  
/*==================Uodate the profile and username on posts code end===============*/  

 