import { Form } from "./Form";
import { SelectField } from "./SelectField";
import { InputField } from "./InputField";
import { FieldType } from "./EFieldType";
import { FieldLabel } from "./FieldLabel";
export class FormCreator {
     settings = [new InputField(Date.now().toString() + 'name', 'Podaj nazwe pola', FieldType.Text, ' '),
       new InputField(Date.now().toString() + 'type', 'Podaj typ:', FieldType.Text, ' '),
       new InputField(Date.now().toString() + 'label', 'Podaj etykietę pola', FieldType.Text, ' '),
       new InputField(Date.now().toString() + 'value', 'Podaj domyślną wartość', FieldType.Text, ' ')
    ]
    constructor() {}

    newForm(){
        var quantity = <HTMLInputElement>document.getElementById("quantity");
    
        document.getElementById("generate-form").addEventListener("click", () => {
            console.log(quantity);
                for ( let i = 0 ; i < parseFloat(quantity.value); i++) {
                    console.log('udalo sie');
                    this.generateInput();
                }
        })
    };

    generate() {
        var newDiv = document.createElement("div");
        
    }
    generateInput() {
        var newElement = <HTMLDivElement>document.createElement('div');
        newElement.id = 'main-form';
       
        // var name = new InputField(Date.now().toString() + 'name', 'Podaj nazwe pola', FieldType.Text, ' ').render();
        // var type = new InputField(Date.now().toString() + 'type', 'Podaj typ:', FieldType.Text, ' ').render();
        // var label = new InputField(Date.now().toString() + 'label', 'Podaj etykietę pola', FieldType.Text, ' ').render();
        // var value = new InputField(Date.now().toString() + 'value', 'Podaj domyślną wartość', FieldType.Text, ' ').render();
        for (var i = 0; i < this.settings.length; i++) {
            (this.settings[i].render());
        }
        var buttonSave = <HTMLButtonElement>document.createElement('button');
        buttonSave.innerText = 'zapisz';
        buttonSave.id = 'saveFormCreator'
        newElement.append(buttonSave);
        

    }

    getSettingsValue() {
        const initialValue:any = {};
            for (var i = 0; i < this.settings.length; i++ ) {
            initialValue[this.settings[i].name] = this.settings[i].getValue();
            // var element = document.createElement("p");
            // element.innerText = (settings[i].getValue());
            console.log(initialValue)
            }
    }
    
}