import { setRegisterFormListener } from "./handelers/register.mjs";
import {setLoginFormListener } from "./handelers/login.mjs";

const path = location.pathname;

if (path ===  '/profile/login/') {
    setLoginFormListener ()
} else if (path === '/profile/register/') {
    setRegisterFormListener()
}