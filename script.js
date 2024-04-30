let skip = 0; // Initial skip value for pagination
const limit = 10; // Number of posts to load per page

function loadPosts() {
  fetch(`https://dummyjson.com/posts?skip=${skip}&limit=${limit}`)
    .then(res => res.json())
    .then(data => {
      const posts = data.posts;
      console.log(posts);

      // Create a div for each post

      posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('feed', 'bg-white', 'p-4', 'rounded-lg', 'my-4', 'leading-relaxed', 'text-sm');

        // Generate a random number to ensure each post has a different image
        const randomNumber = Math.floor(Math.random() * 30);
           // Fetch user data using user ID from post
           fetch(`https://dummyjson.com/users/${post.userId}`)
           .then(res => res.json())
           .then(userData => {

        postDiv.innerHTML = `
          <!--==========NewsFeed Top Start============-->
          <div class="feed-top flex justify-between items-center">
            <div class="user flex gap-4">
              <div class="profile-picture" id="my-profile-picture">
                <img src=${userData.image} alt="" srcset="">
              </div>
              <div class="info">
              <a href="UserProfile.html">
                <h3 class="cursor-pointer"> <b>${userData.username}</b></h3>
              </a>
                <div class="time text-gray text-xs">
                  <small> PAKISTAN, <span>2 Day Ago</span></small>
                </div>
              </div>
            </div>
            <span class="edit relative">
              <img class="w-6" src="assets/threedots-svgrepo-com.svg" alt="" srcset="">
              <ul class="edit-menu bg-white p-4 rounded-lg flex flex-col gap-4 absolute origin-top-right right-0 shadow-sm top-10">
                <li class="flex items-center gap-2 text-gray-500 text-base transition-colors duration-300 cursor-pointer hover:text-gray-700"><i class="fa-regular fa-pen-to-square"></i>Edit</li>
                <li class="flex items-center gap-2 text-gray-500 text-base transition-colors duration-300 cursor-pointer hover:text-gray-700"><i class="fa-solid fa-trash"></i>Trash</li>
              </ul>
            </span>
          </div>
          <!--==========NewsFeed Top End============-->
          
          <!--========Feed Image========-->
          <div class="feed-image rounded-lg overflow-hidden my-3">
            <img src="https://random-image-pepebigotes.vercel.app/api/random-image?${randomNumber}" alt="" srcset="">
          </div>
          <!--========Feed Image========-->

          <!--==============Caption=============-->
          <div class="captions text-base">
            <div class="title font-semibold">${post.title}</div>
            <p><small>${post.body}</small><span class="hash-tag text-sm">#${post.tags.join(', #')}</span></p>
          </div>
          <!--==============Caption=============-->

          <!--========Feed Action========-->
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
          <!--========Feed Action========-->

          <!--============Comments===========-->
          <div class="comments-container" id="commentsContainer-${post.id}"></div>
          <div class="flex add-comment mt-2">
            <input type="text" id="commentInput-${post.id}" placeholder="Add a comment..." class="border rounded-lg px-4 py-2 w-full">
            <button type="button" id="addCommentBtn-${post.id}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"><i class="fa-solid fa-location-arrow"></i></button>
          </div>
          <!--============Comments===========-->

          <!--==========NewsFeed Top End============-->
        `;

        document.querySelector('.news-feed').appendChild(postDiv);

        // Add event listener for Add Comment button
        const addCommentBtn = document.getElementById(`addCommentBtn-${post.id}`);
        addCommentBtn.addEventListener('click', () => {
          const commentInput = document.getElementById(`commentInput-${post.id}`).value.trim();
          if (commentInput !== '') {
            addComment(post.id, commentInput);
            document.getElementById(`commentInput-${post.id}`).value = ''; // Clear input field after adding comment
          }
        });

        // Fetch comments for the current post and display them
fetch(`https://dummyjson.com/comments/post/${post.id}`)
.then(res => res.json())
.then(commentData => {
  const comments = commentData.comments;
  const commentsContainer = document.getElementById(`commentsContainer-${post.id}`);

  comments.forEach(comment => {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `
      <div class="comment-content">
        <div id="commentText-${comment.id}" class="comment-text">${comment.user.username}: ${comment.body}</div>
        ${comment.user.id === 5 ? `<button type="button" id="updateCommentBtn-${comment.id}" class="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded-md ml-2"><i class="fa-regular fa-pen-to-square"></i></button>` : ''}
        ${comment.user.id === 5 ? `<button type="button" id="deleteCommentBtn-${comment.id}" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md mr-2"><i class="fa-solid fa-trash-arrow-up"></i></button>` : ''}
      </div>
    `;
    commentsContainer.appendChild(commentDiv);

    // Add event listener for Update Comment button
    const updateCommentBtn = commentDiv.querySelector(`#updateCommentBtn-${comment.id}`);
    if (updateCommentBtn) {
      updateCommentBtn.addEventListener('click', () => {
        const newCommentBody = prompt('Enter the updated comment:');
        if (newCommentBody !== null) {
          updateComment(comment.id, newCommentBody);
        }
      });
    }

    // Add event listener for Delete Comment button
    if (comment.user.id === 5) {
      const deleteCommentBtn = commentDiv.querySelector(`#deleteCommentBtn-${comment.id}`);
      deleteCommentBtn.addEventListener('click', () => {
        deleteComment(comment.id);
      });
    }
  });
})
.catch(error => {
  console.error('Error fetching comments:', error);
});
});
      // Increment skip for the next page
      skip += limit;
    })
  })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}

// Load initial 10 posts
loadPosts();




// Function to add a comment to a post
function addComment(postId, commentBody) {
const CommentuserName =JSON.parse( localStorage.getItem("user"))
  fetch('https://dummyjson.com/comments/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      body: commentBody,
      postId: postId,
      userId: 5, 
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log('Comment added:', data);

    // Display the added comment on the post
    const commentsContainer = document.getElementById(`commentsContainer-${postId}`);
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `
      <div class="comment-content flex items-center">
        <div id="commentText-${data.id}" class="comment-text">${CommentuserName.username}: ${commentBody}</div>
        ${data.user.id === 5 ? `<button type="button" id="updateCommentBtn-${data.id}" class="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded-md ml-2"><i class="fa-regular fa-pen-to-square"></i></button>` : ''}
        ${data.user.id === 5 ? `<button type="button" id="deleteCommentBtn-${data.id}" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md mr-2"><i class="fa-solid fa-trash-arrow-up"></i></button>` : ''}
      </div>
    `;

    commentsContainer.appendChild(commentDiv);

    // Add event listener for Update Comment button for the newly added comment
    const updateCommentBtn = commentDiv.querySelector(`#updateCommentBtn-${data.id}`);
    if (updateCommentBtn) {
      updateCommentBtn.addEventListener('click', () => {
        const newCommentBody = prompt('Enter the updated comment:');
        if (newCommentBody !== null) {
          updateComment(data.id, newCommentBody);
        }
      });
    }

    // Add event listener for Delete Comment button for the newly added comment
    if (data.user.id === 5) {
      const deleteCommentBtn = commentDiv.querySelector(`#deleteCommentBtn-${data.id}`);
      deleteCommentBtn.addEventListener('click', () => {
        deleteComment(data.id);
      });
    }
  })
  .catch(error => {
    console.error('Error adding comment:', error);
  });
}

// Function to update a comment
function updateComment(commentId, newBody) {
  const CommentuserName =JSON.parse( localStorage.getItem("user"))
  fetch(`https://dummyjson.com/comments/${commentId}`, {
    method: 'PUT', // or 'PATCH' if partial update is allowed
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      body: newBody,
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log('Comment updated:', data);

    // Update the displayed comment text on the UI
    const updatedCommentText = document.getElementById(`commentText-${commentId}`);
    if (updatedCommentText) {
      updatedCommentText.textContent = `${CommentuserName.username}: ${newBody}`;
    }
  })
  .catch(error => {
    console.error('Error updating comment:', error);
  });
}

// Function to delete a comment
function deleteComment(commentId) {
  
  fetch(`https://dummyjson.com/comments/${commentId}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(data => {
    console.log('Comment deleted:', data);
    // Remove the deleted comment from the UI
    const deletedComment = document.getElementById(`commentText-${commentId}`).parentNode;
    if (deletedComment) {
      deletedComment.remove();
    }
  })
  .catch(error => {
    console.error('Error deleting comment:', error);
  });
}

// Add scroll event listener to load more posts when user reaches the bottom
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    loadPosts();
  }
});

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', event => {
  const keyword = event.target.value.trim();
  if (keyword !== '') {
    searchPosts(keyword);
  } else {
    // If the search input is empty, load all posts
    loadPosts();
  }
});

// Function to search posts by keyword
function searchPosts(keyword) {
  fetch(`https://dummyjson.com/posts/search?q=${keyword}`)
    .then(res => res.json())
    .then(data => {
      const posts = data.posts;

      // Clear existing posts in the container
      document.querySelector('.news-feed').innerHTML = '';

      posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('feed', 'bg-white', 'p-4', 'rounded-lg', 'my-4', 'leading-relaxed', 'text-sm');

        // Generate a random number to ensure each post has a different image
        const randomNumber = Math.floor(Math.random() * 30);
        

        postDiv.innerHTML = `
          <!--==========NewsFeed Top Start============-->
          <div class="feed-top flex justify-between items-center">
            <div class="user flex gap-4">
              <div class="profile-picture" id="my-profile-picture">
                <img src="" alt="" srcset="">
              </div>
              <div class="info">
                <a href="UserProfile.html">
                  <h3 class="cursor-pointer"> <b></b></h3>
                </a>
                <div class="time text-gray text-xs">
                  <small> PAKISTAN, <span>2 Day Ago</span></small>
                </div>
              </div>
            </div>
            <span class="edit relative">
              <img class="w-6" src="assets/threedots-svgrepo-com.svg" alt="" srcset="">
              <ul class="edit-menu bg-white p-4 rounded-lg flex flex-col gap-4 absolute origin-top-right right-0 shadow-sm top-10">
                <li class="flex items-center gap-2 text-gray-500 text-base transition-colors duration-300 cursor-pointer hover:text-gray-700"><i class="fa-regular fa-pen-to-square"></i>Edit</li>
                <li class="flex items-center gap-2 text-gray-500 text-base transition-colors duration-300 cursor-pointer hover:text-gray-700"><i class="fa-solid fa-trash"></i>Trash</li>
              </ul>
            </span>
          </div>
          <!--==========NewsFeed Top End============-->
          
          <!--========Feed Image========-->
          <div class="feed-image rounded-lg overflow-hidden my-3">
            <img src="https://random-image-pepebigotes.vercel.app/api/random-image?${randomNumber}" alt="" srcset="">
          </div>
          <!--========Feed Image========-->

          <!--==============Caption=============-->
          <div class="captions text-base">
            <div class="title font-semibold">${post.title}</div>
            <p><small>${post.body}</small><span class="hash-tag text-sm">#${post.tags.join(', #')}</span></p>
          </div>
          <!--==============Caption=============-->

          <!--========Feed Action========-->
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
          <!--========Feed Action========-->

          <!--============Comments===========-->
          <div class="comments-container" id="commentsContainer-${post.id}"></div>
          <div class="flex add-comment mt-2">
            <input type="text" id="commentInput-${post.id}" placeholder="Add a comment..." class="border rounded-lg px-4 py-2 w-full">
            <button type="button" id="addCommentBtn-${post.id}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"><i class="fa-solid fa-location-arrow"></i></button>
          </div>
          <!--============Comments===========-->

          <!--==========NewsFeed Top End============-->
        `;

        document.querySelector('.news-feed').appendChild(postDiv);

        // Add event listener for Add Comment button
        const addCommentBtn = document.getElementById(`addCommentBtn-${post.id}`);
        addCommentBtn.addEventListener('click', () => {
          const commentInput = document.getElementById(`commentInput-${post.id}`).value.trim();
          if (commentInput !== '') {
            addComment(post.id, commentInput);
            document.getElementById(`commentInput-${post.id}`).value = ''; // Clear input field after adding comment
          }
        });

        // Fetch comments for the current post and display them
fetch(`https://dummyjson.com/comments?postId=${post.id}`)
.then(res => res.json())
.then(commentData => {
  const comments = commentData.comments;
  const commentsContainer = document.getElementById(`commentsContainer-${post.id}`);

  comments.forEach((comment, index) => {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.style.display = index > 1 ? 'none' : 'block'; // Initially hide comments after the first two
    commentDiv.innerHTML = `
      <div class="comment-content">
        <div id="commentText-${comment.id}" class="comment-text flex items-center"><span>${comment.user.username}: ${comment.body}</span></div>
        ${comment.user.id === 5 ? `<button type="button" id="updateCommentBtn-${comment.id}" class="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded-md ml-2"><i class="fa-regular fa-pen-to-square"></i></button>` : ''}
        ${comment.user.id === 5 ? `<button type="button" id="deleteCommentBtn-${comment.id}" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md mr-2"><i class="fa-solid fa-trash-arrow-up"></i></button>` : ''}
      </div>
    `;
    commentsContainer.appendChild(commentDiv);

    // Add event listener for Update Comment button
    const updateCommentBtn = commentDiv.querySelector(`#updateCommentBtn`);
    if (updateCommentBtn) {
      updateCommentBtn.addEventListener('click', () => {
        const newCommentBody = prompt('Enter the updated comment:');
        if (newCommentBody !== null) {
          updateComment(comment.id, newCommentBody);
        }
      });
    }

    // Add event listener for Delete Comment button
    if (comment.user.id === 5) {
      const deleteCommentBtn = commentDiv.querySelector(`#deleteCommentBtn-${comment.id}`);
      deleteCommentBtn.addEventListener('click', () => {
        deleteComment(comment.id);
      });
    }
  });

  // Add "Show more" button if there are more than two comments
  if (comments.length > 2) {
    const showMoreBtn = document.createElement('button');
    showMoreBtn.textContent = 'Show more';
    showMoreBtn.classList.add('show-more-btn');
    commentsContainer.appendChild(showMoreBtn);

    // Event listener for "Show more" button
    showMoreBtn.addEventListener('click', () => {
      const allComments = commentsContainer.querySelectorAll('.comment');
      allComments.forEach(comment => {
        comment.style.display = 'block'; // Show all comments
      });
      showMoreBtn.style.display = 'none'; // Hide "Show more" button after showing all comments
    });
  }
})
.catch(error => {
  console.error('Error fetching comments:', error);
});

      });
    })
    .catch(error => {
      console.error('Error searching posts:', error);
    });
}
