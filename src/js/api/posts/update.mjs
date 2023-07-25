import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs"

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;
  postData.tags = postData.tags.split(',');
  const response = await authFetch(updatePostURL, {
    method,
    body: JSON.stringify(postData)
  });
  
  const json = await response.json();
  // console.log(json);
  if(response.ok) {
    return json;
  }

  // console.log(json)

  throw new Error(json.errors[0].message);

}