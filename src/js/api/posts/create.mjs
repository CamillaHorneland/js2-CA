import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs"

const action = "/posts";
const method = "post";

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;
  postData.tags = postData.tags.split(',');
  const body = JSON.stringify(postData);
  
  const response = await authFetch(createPostURL, {
    method,
    body,
  });

  const json = await response.json(); 

  if(response.ok) {
    return json;
  }

  console.log(json)

  throw new Error(json.errors[0].message);

}