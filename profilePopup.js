/*=================== Profile PopUP JAVASCRIPT Start =================== */

/* =================this code for the open the profile popup Start ================ */

class ProfilePictureHandler {
    constructor() {
      this.profilePictures = document.querySelectorAll("#my-profile-picture");
      this.handleProfilePictureClick = this.handleProfilePictureClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.profilePictures.forEach(profile => {
        profile.addEventListener("click", this.handleProfilePictureClick);
      });
    }
  
    async handleProfilePictureClick(event) {
      try {
        const user =JSON.parse( localStorage.getItem("user"))
        const userId = user.id;
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const userData = await response.json();
        this.updateProfilePopup(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  
    updateProfilePopup(user) {
      const userName =JSON.parse( localStorage.getItem("user"));
      const profilePopup = document.querySelector(".profile-popup");
      const profileName = profilePopup.querySelector("h1");
      const profileUsername = profilePopup.querySelector("p");
      const profilePicture = profilePopup.querySelector("#my-profile-picture img");
  
      profilePicture.src = userName.image;
      profileName.textContent = userName.name;
      profileUsername.textContent = "@" + userName.username;
      
  
      profilePopup.style.display = "flex";
    }
  
    removeEventListeners() {
      this.profilePictures.forEach(profile => {
        profile.removeEventListener("click", this.handleProfilePictureClick);
      });
    }
  }
  
  const profilePictureHandler = new ProfilePictureHandler();
  /* =================this code for the open the profile popup End ================ */
  
  


  /*this code change the profile picture in navbar start*/
  document.addEventListener('DOMContentLoaded', () => {
    class ProfilePictureHandler {
        constructor() {
            this.userProfilePicture = document.getElementById('my-profile-picture').querySelector('img');
            this.fetchProfilePicture();
        }

        async fetchProfilePicture() {
            try {
                const userData = JSON.parse(localStorage.getItem('user'));
                if (!userData) {
                    throw new Error('User data not found in localStorage');
                }
                const { username, image } = userData;
                console.log('Username:', username);
                console.log('Profile Picture:', image);
                this.updateProfilePicture(image);
            } catch (error) {
                console.error('Error fetching profile picture:', error);
            }
        }

        updateProfilePicture(imageUrl) {
            this.userProfilePicture.src = imageUrl;
            this.userProfilePicture.alt = 'Profile Picture';
        }
    }

    const profilePictureHandler = new ProfilePictureHandler();
});

  /*this code handle the profile picture in navbar end*/
  
  

  
  /****** this code for the close the profile popup Start *******/
  
  class CloseButtonHandler {
    constructor() {
      this.closeButtons = document.querySelectorAll(".close");
      this.handleCloseClick = this.handleCloseClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.closeButtons.forEach(closer => {
        closer.addEventListener("click", this.handleCloseClick);
      });
    }
  
    handleCloseClick() {
      document.querySelector(".profile-popup").style.display = "none";
      document.querySelector(".add-post-popup").style.display = "none";
      document.querySelector(".theme-customize").style.display = "none";
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.closeButtons.forEach(closer => {
        closer.removeEventListener("click", this.handleCloseClick);
      });
    }
  }
  const closeButtonHandler = new CloseButtonHandler();
  
  /****** this code for the close the profile popup End*******/
  
  
  
  
  /*============ this code for the upload profile picture Start =========== */

  document.addEventListener('DOMContentLoaded', () => {
    class ProfileHandler {
        constructor() {
            this.userProfilePicture = document.getElementById('user-profile-picture');
            this.userName = document.getElementById('user-name');
            this.userUsername = document.getElementById('user-username');
  
            this.fetchUserData();
        }
  
        async fetchUserData() {
            try {
              const user =JSON.parse( localStorage.getItem("user"))
              
              const userId =user.id
                const response = await fetch(`https://dummyjson.com/users/${userId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const userData = await response.json();
                this.updateProfile(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
  
        updateProfile(user) {
          const user =JSON.parse( localStorage.getItem("user"))
          const userId =user.id
          const userName =user.username
          const userImage = user.image
          this.userProfilePicture.src = user.image;
            this.userName.textContent = user.username;
            
        }
    }
  
    const profileHandler = new ProfileHandler();
  });
  /*============ this code for the upload profile picture End =========== */


  /*=================== Profile PopUP JAVASCRIPT End =================== */
  