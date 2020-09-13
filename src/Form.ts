import { FieldType } from "./EFieldType";
// import { IField } from "./IField";
// import { FieldLabel } from "./FieldLabel";
import { InputField } from "./InputField";
import { CheckboxField } from "./CheckboxField";
import { SelectField } from "./SelectField";
import { TextAreaField } from "./TextAreaField";
import { DateField } from "./DateField";
import { valuesArr } from "./Variables"
import { LocalStorage } from "./LocalStorage";
import { DocumentList } from "./DocumentList";
// import { Storage } from "./IStorage";

export class Form {
    arrayOfFields = [new TextAreaField("text-area", "Uwagi: ", FieldType.TextArea, ' '), 
    new CheckboxField("checkbox", 'Czy preferujesz e-learning: ', FieldType.Checkbox, ' '), 
    new SelectField("select-field", 'Tryb studiów do wyboru: ', FieldType.Select, ' '),
    new InputField("input-email","e-mail: ", FieldType.Email, ' '),
    new InputField("input-surname", "Nazwisko: ", FieldType.Text, ' '),
    new InputField("input-name", "Imie: ", FieldType.Text, ' '),
    new DateField("data", "Data:", FieldType.Data, ' ' )];
    constructor(){}

    insertValue(documentData:any){
        

        this.arrayOfFields.forEach(el => {
            
            if(documentData.hasOwnProperty(el.name)){
                el.value = documentData[el.name];
            }
        if(documentData[el.name] === "select-field") {
            console.log(el.value);
        }
        })
        console.log(documentData);
    }
    
    getValue() {
        const initialValue: { [key: string]: string | number | boolean } = {};
        // const initialValue:{ [key: string]: string; } = {}
        for (var i = 0; i < this.arrayOfFields.length; i++ ) {
            if (this.arrayOfFields[i].type === 'checkbox') {
                initialValue[this.arrayOfFields[i].name] = (<HTMLInputElement>document.getElementById(this.arrayOfFields[i].id + this.arrayOfFields[i].name)).checked;
                console.log((<HTMLInputElement>document.getElementById(this.arrayOfFields[i].id + this.arrayOfFields[i].name)).checked)
            } else {
                initialValue[this.arrayOfFields[i].name] = this.arrayOfFields[i].getValue();
            }
            // initialValue[this.arrayOfFields[i].name] = this.arrayOfFields[i].getValue();
            // var element = document.createElement("p");
            // element.innerText = (this.arrayOfFields[i].getValue());
        }
        // var stuff: { [key: string]: string; } = {};
    console.log(initialValue);
    return initialValue;
}
    render():void {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            (this.arrayOfFields[i].render());
        }
        let buttonSave: HTMLButtonElement = document.createElement('button');
        buttonSave.id = 'save';
        buttonSave.innerText = "Zapisz";
        document.getElementById('main-form').after(buttonSave);
        let buttonBack = document.createElement('button');
        document.getElementById('save').addEventListener('click',() => {
            this.save();
        })
        buttonBack.id = 'back';
        buttonBack.innerText = 'Wstecz';
        document.getElementById('main-form').before(buttonBack);
        document.getElementById('back').addEventListener('click',() => {
            window.location.href = '/index.html'
        })
     
    }

    save() {
        const save = new LocalStorage();
        save.saveDocument(this.getValue());
        window.location.href = '/index.html';
    }
}