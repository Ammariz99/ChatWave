/*===================Start friend request=================*/

class ButtonHandler {
    constructor() {
      this.acceptButtons = document.querySelectorAll('#Accept');
      this.deleteButtons = document.querySelectorAll('#Delete');
      this.handleAcceptClick = this.handleAcceptClick.bind(this); // Bind the method to the class instance
      this.handleDeleteClick = this.handleDeleteClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.acceptButtons.forEach(accept => {
        accept.addEventListener('click', this.handleAcceptClick);
      });
  
      this.deleteButtons.forEach(deletee => {
        deletee.addEventListener('click', this.handleDeleteClick);
      });
    }
  
    handleAcceptClick(event) {
      const accept = event.currentTarget;
      accept.parentElement.style.display = 'none';
      const parent = accept.parentElement.parentElement;
      parent.querySelector('.alert').style.display = 'block';
    }
  
    handleDeleteClick(event) {
      const deletee = event.currentTarget;
      deletee.parentElement.parentElement.style.display = 'none';
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.acceptButtons.forEach(accept => {
        accept.removeEventListener('click', this.handleAcceptClick);
      });
  
      this.deleteButtons.forEach(deletee => {
        deletee.removeEventListener('click', this.handleDeleteClick);
      });
    }
  }
  const buttonHandler = new ButtonHandler();
  
  /*===================End friend request=================*/
  


  