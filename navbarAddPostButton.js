

/*==========Set Timeout ========*/
/*===========this code for the highlight post when user click on Add Post Button placed in Navbar ================= */

class MiniButtonHandlerForPostHiglight {
    constructor() {
      this.miniButton = document.querySelector(".mini-button");
      this.handleMiniButtonClick = this.handleMiniButtonClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.miniButton.addEventListener("click", this.handleMiniButtonClick);
    }
  
    handleMiniButtonClick() {
      const inputPost = document.querySelector(".input-post");
      inputPost.classList.toggle("boxshadow1");
      setTimeout(() => {
        inputPost.classList.remove("boxshadow1");
        document.querySelector('.contacts').classList.remove('boxshadow1');
      }, 300);
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.miniButton.removeEventListener("click", this.handleMiniButtonClick);
    }
  }
  const miniButtonHandlerForPostHiglight = new MiniButtonHandlerForPostHiglight();
  
  