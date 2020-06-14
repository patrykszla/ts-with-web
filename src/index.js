"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Form_1 = require("./Form");
class App {
    constructor() {
        const newForm = new Form_1.Form();
        newForm.render();
        document.getElementById('submit').addEventListener('click', (event) => {
            event.preventDefault();
            newForm.getValue();
        });
    }
}
window.addEventListener('DOMContentLoaded', (event) => {
    const app = new App();
});
//# sourceMappingURL=index.js.map