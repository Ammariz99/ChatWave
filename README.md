
# ChatWave

#### Introduction:

Welcome to ChatWave! My goal is to create a platform where users can connect, share their thoughts, and engage with each other through posts and comments. This README file serves as a guide to understanding the project's objectives, features, technical requirements, and customization options


## Documentation

#### Project Plan:

Create a social media app that allows users to post content, comment on posts, and interact with specific users.


## Features

- User authentication using api
- Loader Animation until page fully loads.
- Post creation functionality
- Story Creation functionality
- Login User Timeline.
- Specific User Profile.
- Search functionality to find posts.
- Search functionality to find Chats.
- Accept friend requests
- Delete friend requests.
- Integration of an post Api to show Posts..
- Integration of an comment Api to show comments on  posts..
- Integration of an update Api to update comments..
- Integration of an delete Api to delete comments..
- Integration of an search Api to search post..
- Show 10 posts on current page, when reached bottom show next 10 posts

## Timeline:

- Phase 1: Understanding the requirements (1 Day)
- Phase 2: Plannig and design (1 Day)
- Phase 3: Frontend development (7 Days)
- Phase 4: API integration (1 Day)
- Phase 5: Testing and bug fixing (3 Days)
- Phase 6: Deployment and launch (1 Day)



## Requirement Document

#### User Stories:
  - As a user, I want to be able to sign up and log in to the app securely.
  - As a user, I want to create, edit, and delete my posts.
  - As a user, I want to comment on posts.
  - As a user, I want to search for specific user chat or posts.
  - As a user, I want to see images associated with posts.
  - As a user, I want a smooth and responsive user interface.
  - As a user, I want to change font sizes for better readability.
  - As a user, I want to customize theme colors for a personalized experience.
  - As a user, I want to switch between light and dark mode for different viewing preferences.
  - As a developer, I want to implement these  customization features seamlessly.


## Technical Requirements:

- Frontend: HTML, Tailwind CSS, JavaScript (Core).
- User authentication and authorization
- Backend: Integration of  Fake Fetch Api for Posts and Comments.
- Integration of image API for loading images in   posts.
- Error handling for common scenarios and - user-friendly error messages on console.
- Deployment on a Github
## Tech Stack

 **Client-Side:** 
 - HTML
 - TailwindCSS
 - Javascript

**Library:** 
 - Swiper.js


## Installation

Open my project go to index.html go on live server to open the project.

Or directly go to github live server to login.

```bash
  vS code live server
```
    
## API Reference

#### Login user and get token

```http
  https://dummyjson.com/auth/login

```

#### Get current auth user

```http
    https://dummyjson.com/auth/me
```

#### Get all posts

```http
    https://dummyjson.com/posts

```

#### Limit 10 Posts to show 

```http
    https://dummyjson.com/posts?skip=${skip}&limit=${limit}


```

#### Show diffrent images on every posts

Generate a random number to ensure each post has a different image
        
        const randomNumber = Math.floor(Math.random() * 30);

```http
    https://random-image-pepebigotes.vercel.app/api/random-image?${randomNumber}" alt="" srcset="">


```


#### Add comment on every post by userId

```http
    https://dummyjson.com/comments/add


```


#### Update comment on by commentId

```http
    https://dummyjson.com/comments/${commentId}


```


#### Delete comment by commentId

```http
    https://dummyjson.com/comments/${commentId}


```


#### Search post by keyword

```http
    https://dummyjson.com/posts/search?q=${keyword}


```



## Optimizations

 - Refactors
 - Class Base
 - Single Responsibility Code 


## 🚀 About Me
I'm a front-end developer...


## FAQ

#### What technologies are used in this project?

The client-side technologies include HTML, Tailwind CSS, and JavaScript. 

#### How can I customize the font size, theme colors, and switch between light and dark mode in the app?

Go to the main page theme option is showing on left sidebar at the bottom. Open it and change customization as your UI experience.

### Can I contribute to the project?

 Yes, contributions to the project are welcome!, submit pull requests.

 ### Is there API references available for developers integrating with the app's backend?

 Yes, the API refrences is available to guide developers on how to interact with the api


## Authors

- [@ammariz99](https://github.com/Ammariz99)

