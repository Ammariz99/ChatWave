//This code for the contact menu when user click on notification on aside bar it will open the notification box
  
class NotificationBarHandler {
    constructor() {
      this.notificationBar = document.querySelector('#notification-bar');
      this.handleNotificationBarClick = this.handleNotificationBarClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.notificationBar.addEventListener('click', this.handleNotificationBarClick);
    }
  
    handleNotificationBarClick() {
      const notificationBox = document.querySelector('.notification-box');
      notificationBox.style.display = 'block';
      document.querySelector('#notify-counter2').style.display = 'none';
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.notificationBar.removeEventListener('click', this.handleNotificationBarClick);
    }
  }
  const notificationBarHandler = new NotificationBarHandler();
  