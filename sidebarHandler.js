
/*===============Start Aside============*/

class MenuHandler {
    constructor() {
      this.menuItem = document.querySelectorAll('.menu-item');
      this.handleMenuItemClick = this.handleMenuItemClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.menuItem.forEach(item => {
        item.addEventListener('click', this.handleMenuItemClick);
      });
    }
  
    handleMenuItemClick(event) {
      this.removeActive();
      event.currentTarget.classList.add('active');
      document.querySelector('.notification-box').style.display = 'none';
    }
  //remove active class
    removeActive() {
      this.menuItem.forEach(item => {
        item.classList.remove('active');
      });
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.menuItem.forEach(item => {
        item.removeEventListener('click', this.handleMenuItemClick);
      });
    }
  }
  
  const menuHandler = new MenuHandler();
  
  
  
  