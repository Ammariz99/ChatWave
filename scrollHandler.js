


/* =====this code for when popup is open and user start scrolling and then popup disabled automatically same for the create post ==== */


class ScrollHandler {
    constructor() {
      this.handleScroll = this.handleScroll.bind(this); // Bind the method to the class instance
      window.addEventListener("scroll", this.handleScroll);
    }
  
    handleScroll() {
      document.querySelector(".profile-popup").style.display = "none";
      document.querySelector(".add-post-popup").style.display = "none";
      document.querySelector(".theme-customize").style.display = "none";
      document.querySelector('.notification-box').style.display = 'none';
    }
  
    // Optionally, you can add a method to remove the event listener when needed
    removeScrollListener() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
  const scrollHandler = new ScrollHandler();
  