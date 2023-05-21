import { register } from "../../api/auth/register.mjs";
import displayMessage from "../../ui/common/displayMessage.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");
  const loginButtonContainer = document.querySelector("#loginButton");

  if (form && loginButtonContainer) {
    loginButtonContainer.style.display = "none";

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      const button = form.querySelector("button");
      button.innerText = "Registering..";

      const fieldset = form.querySelector("fieldset");
      fieldset.disabled = true;

      try {
        await register(profile);
        displayMessage("success", "Registration successful!", "#message");

        const loginButton = document.createElement("button");
        loginButton.innerText = "Go to Login";
        loginButton.classList.add("btn", "btn-danger", "text-center", "m-5");
        loginButton.addEventListener("click", () => {
          window.location.href = "/profile/login";
        });

        loginButtonContainer.innerHTML = ""; 
        loginButtonContainer.appendChild(loginButton);

        loginButtonContainer.style.display = "block";
      } catch (error) {
        displayMessage("danger", error, "#message");
        console.log(error);
      } finally {
        button.innerText = "Register";
        fieldset.disabled = false;
      }
    });
  }
}
