"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EFieldType_1 = require("./EFieldType");
const InputField_1 = require("./InputField");
const CheckboxField_1 = require("./CheckboxField");
const SelectField_1 = require("./SelectField");
const TextAreaField_1 = require("./TextAreaField");
const DateField_1 = require("./DateField");
const Variables_1 = require("./Variables");
class Form {
    constructor() {
        this.arrayOfFields = [new TextAreaField_1.TextAreaField("text-area", "Uwagi: ", EFieldType_1.FieldType.TextArea, ' '),
            new CheckboxField_1.CheckboxField("checkbox", 'Czy preferujesz e-learning: ', EFieldType_1.FieldType.Checkbox, ' '),
            new SelectField_1.SelectField("select-field", 'Tryb studiów do wyboru: ', EFieldType_1.FieldType.Select, ' '),
            new InputField_1.InputField("input-email", "e-mail: ", EFieldType_1.FieldType.Email, ' '),
            new InputField_1.InputField("input-surname", "Nazwisko: ", EFieldType_1.FieldType.Text, ' '),
            new InputField_1.InputField("input-name", "Imie: ", EFieldType_1.FieldType.Text, ' '),
            new DateField_1.DateField("data", "Data:", EFieldType_1.FieldType.Data, ' ')];
    }
    getValue() {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            Variables_1.valuesArr.unshift(this.arrayOfFields[i].getValue());
            console.log(this.arrayOfFields[i].getValue());
            var element = document.createElement("p");
            element.innerText = (this.arrayOfFields[i].getValue());
            document.getElementById('render-wrapper').after(element);
        }
        console.log(Variables_1.valuesArr);
        console.log(JSON.stringify(Variables_1.valuesArr));
        return Variables_1.valuesArr;
    }
    render() {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            (this.arrayOfFields[i].render());
        }
    }
    save() {
        window.location.href = '/index.html';
    }
}
exports.Form = Form;
//# sourceMappingURL=Form.js.map