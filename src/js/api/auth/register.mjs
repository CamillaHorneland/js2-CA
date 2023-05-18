import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  });

  const json = await response.json();

  if (response.ok) {
    return json;
  }

  console.log(json);

  throw new Error(json.errors[0].message);
}



  
//   console.log("profile", profile);

//   const result = await response.json()
//   alert("You are registered")
//   return result
// }