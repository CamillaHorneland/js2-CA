import * as storage from "../../storage/index.mjs";

export function setLogoutButtonListener() {
    const logoutButton = document.getElementById("logoutButton");
    
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            
            storage.remove("token");
            storage.remove("profile");
            location.href = "/index.html";
        });
    }
}
