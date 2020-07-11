import { Form } from "./Form"
import { DocumentList } from "./DocumentList";
import { Router } from "./Router";
import { FormCreator } from "./FormCreator";


class App {

    constructor() {
        if (window.location.pathname == "/new-document.html") {
            const form = new Form();
            form.render();
        } else if (window.location.pathname == "/edit-document.html") {
            const getParam = new Router().getParam("id");
            const documentList = new DocumentList();
            const getDocument = documentList.getDocument(getParam);
            console.log(getDocument);
            const form = new Form();
            form.insertValue(getDocument);
            form.render();

        } else if (window.location.pathname == "/document-list.html") {
            const listOfDocuments = new DocumentList();
            document.getElementById("document-list-wrapper").append(listOfDocuments.render());
            var back : HTMLButtonElement = document.createElement('button');
            back.innerText = 'Wstecz';
            back.className = 'back';
            back.addEventListener('click', () => {
                window.location.href = '/index.html'
            })
            document.getElementById('document-list-wrapper').prepend(back);
           
        } else if (window.location.pathname == "/form-creator.html") {
            var newFormCreator = new FormCreator();
            newFormCreator.newForm();

        }
      
        
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const app = new App();
    
});


