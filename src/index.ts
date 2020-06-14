import { Form } from "./Form"
import { DocumentList } from "./DocumentList";







// var valuesArr:string[] = [];

// class Form {
    
//     render():void {
//         for (var i = 0; i < this.arrayOfFields.length; i++) {
//             (this.arrayOfFields[i].render());
//         }

//     }
// }
/*
class App {
   
    arrayOfFields = [new TextAreaField("text-area", "Uwagi: ", FieldType.TextArea, ' '), 
    new CheckboxField("checkbox", 'Czy preferujesz e-learning: ', FieldType.Checkbox, ' '), 
    new SelectField("select-field", 'Tryb studiów do wyboru: ', FieldType.Select, ' '),
    new InputField("input-email","e-mail: ", FieldType.Email, ' '),
    new InputField("input-surname", "Nazwisko: ", FieldType.Text, ' '),
    new InputField("input-name", "Imie: ", FieldType.Text, ' ')]
 
    getValue():void {
 
    for (var i = 0; i < this.arrayOfFields.length; i++ ) {
        console.log(this.arrayOfFields[i].getValue());
        var element = document.createElement("p");
        element.innerText = (this.arrayOfFields[i].getValue());
        document.getElementById('render-wrapper').after(element);
    }
}
    render():any {
        // const newForm = new Form(); 
        // newForm.render();
        for (var i = 0; i < this.arrayOfFields.length; i++) {
             (this.arrayOfFields[i].render());
        }
        document.getElementById('submit').addEventListener('click', (event) => {
            event.preventDefault();
            
            // newForm.getValue();
        })
    }
}
*/

class App {

    constructor() {
        // const newForm = new Form(); 
        // newForm.render();
        // document.getElementById('submit').addEventListener('click', (e) => {
        //    e.preventDefault();
        //     newForm.getValue();
        //     newForm.save();
        // })
        if (window.location.pathname == "/new-document.html") {
            const form = new Form();
            form.render();
        } else if (window.location.pathname == "/document-list.html") {
            const listOfDocuments = new DocumentList();
            // const listRender = listOfDocuments.render();
            document.getElementById("document-list-wrapper").append(listOfDocuments.render());
            var back : HTMLButtonElement = document.createElement('button');
            back.innerText = 'Wstecz';
            back.className = 'back';
            back.addEventListener('click', () => {
                window.location.href = '/index.html'
            })
            document.getElementById('document-list-wrapper').prepend(back);
           
        }
      
        
    }
}




window.addEventListener('DOMContentLoaded', (event) => {
    const app = new App();
    
});


