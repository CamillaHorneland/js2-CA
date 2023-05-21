import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

export async function getMyPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${action}`;
  const response = await authFetch(updatePostURL);
  
  const json = await response.json();

  if (response.ok) {
    return json;
  }

  throw new Error(json.errors[0].message);
}


export async function getMyPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }
  
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

}

export async function searchMyposts(tag) {
  if (tag) {
    throw new Error("searchMyPosts requires a tag value");
  }
}