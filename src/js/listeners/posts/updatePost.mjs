import { getPost, updatePost } from "../../api/index.mjs";

export async function setUpdatePostListener() {
  console.log(location);
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const postData = await getPost(id);
  console.log(postData);

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const post = await getPost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries())
      console.log(post);
      post.id = id;

          try {
        await updatePost(post);

        window.location.href = "/user-post";
      } catch (error) {
        console.log("Error updating post:", error.message);
      } 
      
      updatePost(post)
    })
  }
}

  
  
  