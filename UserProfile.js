/*==============Dark Mode=============*/


class DarkModeToggle {
  constructor() {
    this.darkModeToggle = document.getElementById('darkModeToggle');
    this.body = document.body;
    this.darkModeIcon = document.getElementById('darkModeIcon');
    this.nameHeading = document.getElementById('usernameHeading');

    this.darkModeToggle.addEventListener('click', this.toggleDarkMode.bind(this));
  }

  toggleDarkMode() {
    this.body.classList.toggle('dark-mode');
    this.darkModeIcon.classList.toggle('fa-toggle-on');
    this.darkModeIcon.classList.toggle('fa-toggle-off');
    this.nameHeading.classList.toggle('text-white'); // Add or remove text-white class
  }
}

const darkMode = new DarkModeToggle();

/*===========Dark Mode Toggle End==================*/



/*==============FetchPosts and comments Code Start================*/

  function fetchPostsAndComments() {
    const mainTimeline = document.querySelector('.main-timeline-content');
  
    fetch('https://dummyjson.com/posts/user/5')
      .then(res => res.json())
      .then(data => {
        data.posts.forEach(postData => {
          fetch(`https://dummyjson.com/users/${postData.userId}`) // Fetch user data for each post
            .then(res => res.json())
            .then(userData => {
              const postDataWithUser = { ...postData, user: userData }; // Combine post data and user data
              const postCard = createPostCard(postDataWithUser);
              mainTimeline.appendChild(postCard);
              fetchAndDisplayComments(postData.id, postCard);
            })
            .catch(error => {
              console.error('Error fetching user data:', error);
            });
        });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }

/*==============FetchPosts and comments Code End================*/

/*==============Create Post Card Code Start================*/  

  
  function createPostCard(postData) {
    const randomNumber = Math.floor(Math.random() * 10);
    const imageUrl = `https://random-image-pepebigotes.vercel.app/api/random-image?${randomNumber}`;
  
    const postCard = document.createElement('div');
    postCard.classList.add('post-card', 'bg-white', 'rounded-lg', 'shadow-md', 'p-4', 'mb-4');
    postCard.innerHTML = `
      <div class="flex items-start mb-4">
        <img src="${postData.user.image}" alt="Profile Picture" class="w-12 h-12 rounded-full object-cover"> <!-- Update image source here -->
        <div class="ml-4">
          <h2 class="font-semibold text-lg">${postData.user.username}</h2>
          <p class="text-gray-500 text-sm">Posted on June 2024</p>
        </div>
      </div>
      <div class="mb-4">
        <p class="text-gray-800">${postData.body}</p>
        <img src="${imageUrl}" alt="Post Image" class="mt-2 rounded-lg">
      </div>
      <div class="action-button flex items-center justify-between text-lg my-4 select-none">
        <div class="interaction-button">
          <span><i class="fa-regular fa-heart"></i></span>
          <span><i class="fa-regular fa-comment"></i></span>
          <span><i class="fa-solid fa-share-nodes"></i></span>
        </div>
        <div class="bookmark">
          <i class="fa-regular fa-bookmark font-normal"></i>
        </div>
      </div>
      <div class="comments-section mt-4">
        <button class="more-comments-btn text-blue-500 mt-2">Show Comments</button>
        <div class="hidden comments-container"></div>
      </div>
    `;
    return postCard;
  }

/*==============Create Post Card Code End================*/



/*==============Display Comments on Card Code Start================*/
  
  function fetchAndDisplayComments(postId, postCard) {
    fetch(`https://dummyjson.com/posts/${postId}/comments`)
      .then(res => res.json())
      .then(commentData => {
        const commentsContainer = postCard.querySelector('.comments-container');
        const moreCommentsBtn = postCard.querySelector('.more-comments-btn');
  
        moreCommentsBtn.addEventListener('click', () => {
          commentsContainer.innerHTML = ''; // Clear existing comments
          commentData.comments.forEach(comment => {
            const commentElement = createCommentElement(comment);
            commentsContainer.appendChild(commentElement);
          });
          commentsContainer.classList.remove('hidden'); // Show all comments
          moreCommentsBtn.classList.add('hidden'); // Hide "more comments" button
        });
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }
  
  fetchPostsAndComments();
  
/*==============Display Comments on Card Code End================*/




  