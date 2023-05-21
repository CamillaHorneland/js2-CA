import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles/<name>/posts";

export async function getMyPosts() {
  const username = getName();
  const updatePostURL = `${API_SOCIAL_URL}/profiles/${username}${action}`;
  
  const response = await authFetch(updatePostURL);
  
  const json = await response.json();

  if (response.ok) {
    return json;
  }

  throw new Error(json.errors[0].message);
}

 




 


  // const username = getName();
  // const endpoint = `/profiles/${username}`;
  // const url = `${API_SOCIAL_URL}${endpoint}/${action}?_author=tru&_comments=true&_reactions=true&_tag=${tag}`;
  // const response = await authFetch(url);

