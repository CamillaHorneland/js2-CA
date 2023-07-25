import { getMyPosts } from "../../api/index.mjs";
import { renderMyPostTemplates } from "../../templates/myposts.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";
import { setDeletePostListener } from "./deletePost.mjs";

export async function displayMyPostsListener() {
    window.addEventListener("DOMContentLoaded", async function () {
        try {
        console.log("displayMyPostsListener");
        const postsContainer = document.getElementById("myPosts"); 
        
        const postDataList = await getMyPosts();
        if (postDataList) {
          renderMyPostTemplates(postDataList, postsContainer);
          setDeletePostListener()
        } else {
          throw new Error("Unable to retrieve post data.");
        }
    } catch (error) {
      displayMessage("danger", error, "#message");
      console.log(error);
    }
  });
}   
        
   
