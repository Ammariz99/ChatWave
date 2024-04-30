/*=================== Swipper Story JAVASCRIPT =================== */

class MySwiper {
    constructor(selector) {
      this.swiper = new Swiper(selector, {
        slidesPerView: 6,
        spaceBetween: 5,
      });
    }
  }
  const swiper = new MySwiper(".mySwiper");
  
  /*=================== Swipper Story JAVASCRIPT =================== */
  


  /*============Add Story Start=============*/
  /*============ this code for the add Story =========== */

class StoryHandler {
  constructor() {
    this.addStoryInput = document.querySelector("#add-story");
    this.storyImage = document.querySelector(".story img");
    this.handleAddStoryChange = this.handleAddStoryChange.bind(this); // Bind the method to the class instance
    this.addEventListeners();
  }

  addEventListeners() {
    this.addStoryInput.addEventListener("change", this.handleAddStoryChange);
  }

  handleAddStoryChange() {
    const file = this.addStoryInput.files[0];
    if (file) {
      this.storyImage.src = URL.createObjectURL(file);
      document.querySelector(".add-story").style.display = "none";
    }
  }

  // Optionally, you can add a method to remove event listeners when needed
  removeEventListeners() {
    this.addStoryInput.removeEventListener("change", this.handleAddStoryChange);
  }
}
const storyHandler = new StoryHandler();

/*============Add Story End=============*/


class storyProfileManager {
  constructor() {
    this.profilePictureContainer = document.getElementById("profile-picture-story");
  }

  fetchUserData() {
    const userId =localStorage.getItem('id');
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => res.json())
      .then(data => this.updateProfilePicture(data))
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }

  updateProfilePicture(user) {
    const userName =JSON.parse( localStorage.getItem("user"))
            
    const profilePicture = this.profilePictureContainer.querySelector("img");
    profilePicture.src = userName.image;
  }
}
const storyprofileManager = new storyProfileManager();
storyprofileManager.fetchUserData();
