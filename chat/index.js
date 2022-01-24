import Register from "./pages/Register.js";

const rootEl = document.getElementById('root');

const register = new Register();

rootEl.appendChild(register.render());