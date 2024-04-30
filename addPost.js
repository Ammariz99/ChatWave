/*============Add Post Start=============*/

/*============ this code for the add Post =========== */

class PostHandler {
    constructor() {
      this.createPostButton = document.querySelector("#create-post");
      this.feedPictureUploadInput = document.querySelector("#feed-picture-upload");
      this.postImage = document.querySelector("#postIMg");
      this.handleCreatePostClick = this.handleCreatePostClick.bind(this); // Bind the method to the class instance
      this.handleFeedPictureUploadChange = this.handleFeedPictureUploadChange.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.createPostButton.addEventListener("click", this.handleCreatePostClick);
      this.feedPictureUploadInput.addEventListener("change", this.handleFeedPictureUploadChange);
    }
  
    handleCreatePostClick() {
      document.querySelector(".add-post-popup").style.display = "flex";
    }
  
    handleFeedPictureUploadChange() {
      const file = this.feedPictureUploadInput.files[0];
      if (file) {
        this.postImage.src = URL.createObjectURL(file);
      }
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.createPostButton.removeEventListener("click", this.handleCreatePostClick);
      this.feedPictureUploadInput.removeEventListener("change", this.handleFeedPictureUploadChange);
    }
  }
  const postHandler = new PostHandler();
  
  
     /*============Add Post End=============*/
  



  /*===========this code for the if user click on add post buttn in navbar once highlight the post and when user double click on Add Post Button it shows the add post modal ================= */
  
  class MiniButtonHandlerForAddPost {
    constructor() {
      this.miniButton = document.querySelector(".mini-button");
      this.handleMiniButtonDoubleClick = this.handleMiniButtonDoubleClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.miniButton.addEventListener("dblclick", this.handleMiniButtonDoubleClick);
    }
  
    handleMiniButtonDoubleClick() {
      const inputPost = document.querySelector(".input-post");
      inputPost.classList.add("boxshadow1");
      setTimeout(() => {
        document.querySelector(".add-post-popup").style.display = 'flex';
      }, 300);
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.miniButton.removeEventListener("dblclick", this.handleMiniButtonDoubleClick);
    }
  }
  const miniButtonHandlerForAddPost = new MiniButtonHandlerForAddPost();
  
/*======================This code for the add post profile picture updating using fetch api====*/

class ProfileManager {
  constructor() {
    this.profilePictureContainer = document.getElementById("profile-picture-container");
  }

  fetchUserData() {
    const userId =localStorage.getItem('id');
    const userName =JSON.parse( localStorage.getItem("user"))
    console.log(userName.username)
    console.log(userName.image)
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
const profileManager = new ProfileManager();
profileManager.fetchUserData();


