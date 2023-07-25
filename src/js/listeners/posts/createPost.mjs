import { createPost } from "../../api/index.mjs";

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

  
      try {
        
        await createPost(post);

        window.location.href = "/user-post";
      } catch (error) {
        console.log("Error creating post:", error.message);
      } 
    });
  }
}


      


