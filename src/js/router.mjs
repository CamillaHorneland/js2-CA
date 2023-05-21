import * as listeners from "./listeners/index.mjs";

export default function router() {
  const path = location.pathname;

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
    case '/post/':
      listeners.displayMyPostsListener()
      return;  
    case '/post/create/':
      listeners.setCreatePostFormListener()
      return;
    case '/post/edit/':
      listeners.setUpdatePostListener()
      return;
  }
}