
//This code for the contact menu when user click on contacts on aside bar it highlight the contact menu
  
  
  
class MessageMenuHandler {
    constructor() {
      this.messageMenu = document.querySelector('#message-menu');
      this.handleMessageMenuClick = this.handleMessageMenuClick.bind(this); // Bind the method to the class instance
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.messageMenu.addEventListener('click', this.handleMessageMenuClick);
    }
  
    handleMessageMenuClick() {
      document.querySelector('#notify-counter1').style.display = 'none';
      const contacts = document.querySelector('.contacts');
      contacts.classList.toggle('boxshadow1');
      setTimeout(() => {
        contacts.classList.remove('boxshadow1');
      }, 300);
    }
  
    // Optionally, you can add a method to remove event listeners when needed
    removeEventListeners() {
      this.messageMenu.removeEventListener('click', this.handleMessageMenuClick);
    }
  }
  
  const messageMenuHandler = new MessageMenuHandler();
  


/*================This Code handle the search contact===========*/

class ContactSearch {
  constructor() {
      this.searchInput = document.getElementById("contact-search");
      this.contactsContainer = document.getElementById("contacts-container");
      this.contacts = this.contactsContainer.querySelectorAll(".contact");

      this.initSearch();
  }

  initSearch() {
      this.searchInput.addEventListener("input", (event) => {
          const searchTerm = event.target.value.toLowerCase();

          this.contacts.forEach((contact) => {
              const contactName = contact.querySelector("h5").textContent.toLowerCase();
              if (contactName.includes(searchTerm)) {
                  contact.style.display = "block";
              } else {
                  contact.style.display = "none";
              }
          });
      });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ContactSearch();
});
