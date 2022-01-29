import { auth } from "./constants/commons.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import Login from "./pages/Login.js";
import Main from "./pages/Main.js";

class App {
    _activescreen;
    constructor(view) {
        this.view = view;
        this.onAuthListener();
    }

    onAuthListener () {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const mainScreen = new Main();
                app.setActiveScreen(mainScreen);
            } 
            else {
                const loginScreen = new Login();
                app.setActiveScreen(loginScreen);
            }
        });
    }
    setActiveScreen(screen) {
        if(this._activescreen) {
            this.view.innerHTML = ' ';
        }
        this._activescreen = screen;
        screen.render(this.view);
    }
}

const view = document.getElementById('root');
const app = new App(view);

export default app;