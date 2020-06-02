import { FieldType } from "./EFieldType";
// import { IField } from "./IField";
// import { FieldLabel } from "./FieldLabel";
import { InputField } from "./InputField";
import { CheckboxField } from "./CheckboxField";
import { SelectField } from "./SelectField";
import { TextAreaField } from "./TextAreaField";
import { DateField } from "./DateField";

var valuesArr:string[] = [];

export class Form {
    arrayOfFields = [new TextAreaField("text-area", "Uwagi: ", FieldType.TextArea, ' '), 
    new CheckboxField("checkbox", 'Czy preferujesz e-learning: ', FieldType.Checkbox, ' '), 
    new SelectField("select-field", 'Tryb studiów do wyboru: ', FieldType.Select, ' '),
    new InputField("input-email","e-mail: ", FieldType.Email, ' '),
    new InputField("input-surname", "Nazwisko: ", FieldType.Text, ' '),
    new InputField("input-name", "Imie: ", FieldType.Text, ' '),
    new DateField("data", "Data:", FieldType.Data, ' ' )];
    constructor(){}

    getValue():void {
 
    for (var i = 0; i < this.arrayOfFields.length; i++ ) {
        valuesArr.unshift(this.arrayOfFields[i].getValue());
        
        // console.log(this.arrayOfFields[i].getValue());
        // var element = document.createElement("p");
        // element.innerText = (this.arrayOfFields[i].getValue());
        // document.getElementById('render-wrapper').after(element);
    }
    console.log(valuesArr);
}
    render():void {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            (this.arrayOfFields[i].render());
        }

    }
}