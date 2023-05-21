import { getMyPosts } from "../../api/index.mjs";
import { renderPostTemplates } from "../../templates/posts.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function displayMyPostsListener() {
    window.addEventListener("DOMContentLoaded", async function () {
        try {
        console.log("displayMyPostsListener");
      
        const posts = await getMyPosts(); 
        
        const postsContainer = document.getElementById("post"); 
        
        const postDataList = await getMyPosts();
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
        
   
