import { getPostsByProfile } from "../../api/index.mjs";
import { renderPostTemplates } from "../../templates/posts.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export async function displayMyPostsListener() {
  window.addEventListener("DOMContentLoaded", async function () {
    try {
      console.log("displayMyPostsListener");

      const myPosts = await getPostsByProfile(); // Bruk getPostsByProfile() for å hente innleggene til profilen

      const postsContainer = document.getElementById("posts");

      if (myPosts) {
        renderPostTemplates(myPosts, postsContainer); // Vis innleggene ved hjelp av postmaler
      } else {
        throw new Error("Kunne ikke hente innleggsdata.");
      }
    } catch (error) {
      displayMessage("danger", error, "#message");
      console.log(error);
    }
  });
}
