import { getPosts } from "../../api/index.mjs";

import { renderPostTemplates } from "../../templates/posts.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function displayPostsListener() {
    window.addEventListener("DOMContentLoaded", async function () {
        try {
        console.log("displayPostsListener");
      
        const posts = await getPosts(); 
        
        const postsContainer = document.getElementById("posts"); 
        
        const postDataList = await getPosts();
         if (postDataList) {
        renderPostTemplates(postDataList, postsContainer);
      } else {
        throw new Error("Unable to retrieve post data.");
      }
    } catch (error) {
      displayMessage("danger", error, "#message");
      console.log(error);
    }
  });
}

        // console.log("displayPostsListener");
        
        //const posts = await api.getPosts(); (fra read)
        //display the posts
        //template
        //rap it in a try catch (same as login)
        //display a message 

  