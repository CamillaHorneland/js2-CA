import * as listeners from "./listeners/index.mjs";
// import { setLogoutButtonListener } from "./auth/logout.mjs";

export default function router() {
  const path = location.pathname;
  var postId = parseInt(path.split('/').reverse()[0]);
  if(!isNaN(postId))
    postId = '';
  
  console.log(postId);

  listeners.setLogoutButtonListener();
  switch (path) {
    case '/profile/login/':
      listeners.setLoginFormListener()
      return;
    case '/profile/register/':
      listeners.setRegisterFormListener()
      return;
    case '/posts/':
      listeners.displayPostsListener()
      return;
    case '/user-post/':
      listeners.displayMyPostsListener()
      return;  
    case '/user-post/create/':
      listeners.setCreatePostFormListener()
      return;
    case '/user-post/edit/':
      listeners.setUpdatePostListener()
      return;
  }
}