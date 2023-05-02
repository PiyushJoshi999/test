// Sample user object
const user = {
    name: "John",
    lastActivityTime: null,
    posts: [],
  };
  
  // Function to update the last activity time of the user
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve();
      }, 1000);
    });
  }
  
  // Function to create a new post
  function createPost(title, body) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const post = { title, body };
        user.posts.push(post);
        resolve(post);
      }, 2000);
    });
  }
  
  // Function to delete the last post
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const lastPost = user.posts.pop();
        if (lastPost) {
          resolve(lastPost);
        } else {
          reject("ERROR: NO POSTS TO DELETE");
        }
      }, 1500);
    });
  }
  
  // Implementation of the requirements
  createPost("First Post", "This is my first post")
    .then((post1) => {
      console.log(`Post Created: ${post1.title}`);
      return updateLastUserActivityTime();
    })
    .then(() => {
      console.log(`Last Activity Time: ${user.lastActivityTime}`);
      return createPost("Second Post", "This is my second post");
    })
    .then((post2) => {
      console.log(`Post Created: ${post2.title}`);
      return updateLastUserActivityTime();
    })
    .then(() => {
      console.log(`Last Activity Time: ${user.lastActivityTime}`);
      return createPost("Third Post", "This is my third post");
    })
    .then((post3) => {
      console.log(`Post Created: ${post3.title}`);
      return updateLastUserActivityTime();
    })
    .then(() => {
      console.log(`Last Activity Time: ${user.lastActivityTime}`);
      return deleteLastPost();
    })
    .then((deletedPost) => {
      console.log(`Post Deleted: ${deletedPost.title}`);
      console.log(`Posts: ${JSON.stringify(user.posts)}`);
    })
    .catch((error) => console.log(error));
  