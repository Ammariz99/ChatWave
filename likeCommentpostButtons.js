/*===========Liked Button===========*/

class LikeButtonHandler {
    constructor() {
      this.likeButtons = document.querySelectorAll('.action-button span:first-child i');
      this.handleLikeButtonClick = this.handleLikeButtonClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.likeButtons.forEach(liked => {
        liked.addEventListener('click', this.handleLikeButtonClick);
      });
    }
  
    handleLikeButtonClick(event) {
      event.currentTarget.classList.toggle('liked');
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.likeButtons.forEach(liked => {
        liked.removeEventListener('click', this.handleLikeButtonClick);
      });
    }
  }
  const likeButtonHandler = new LikeButtonHandler();

  



 
  /*===========Add Comment================*/

/*===========Add Comment================*/


