"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EFieldType_1 = require("./EFieldType");
const FieldLabel_1 = require("./FieldLabel");
const InputField_1 = require("./InputField");
class TextAreaField {
    constructor(name, label, type, value) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue() {
        var textAreaVal = document.getElementById(this.name).value;
        return textAreaVal;
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel_1.FieldLabel(this.name, this.label, wrapper).render();
        const textAreaElement = document.createElement('textarea');
        textAreaElement.id = this.name;
        textAreaElement.value = this.value;
        wrapper.append(textAreaElement);
        return textAreaElement;
    }
}
class SelectField {
    constructor(name, label, type, value) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue() {
        var selectValue = document.getElementById(this.name).value;
        if (selectValue == 'external') {
            selectValue = "Tryb zaoczny";
        }
        else {
            selectValue = "Tryb dzienny";
        }
        return selectValue;
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel_1.FieldLabel(this.name, this.label, wrapper).render();
        const newSelect = document.createElement('select');
        newSelect.id = this.name;
        wrapper.append(newSelect);
        const firstOption = document.createElement('option');
        firstOption.value = 'external';
        firstOption.innerText = 'Zaocznie';
        newSelect.append(firstOption);
        const secondOption = document.createElement('option');
        secondOption.value = 'full-time';
        secondOption.innerText = 'Dziennie';
        newSelect.append(secondOption);
        return wrapper;
    }
}
class CheckboxField {
    constructor(name, label, type, value) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue() {
        var checkboxValue = document.getElementById(this.name).checked;
        var checkboxString = ' ';
        if (checkboxValue == true) {
            checkboxString = 'preferuje e-learning';
        }
        else if (checkboxValue == false) {
            checkboxString = 'nie preferuje e-learningu';
        }
        return checkboxString;
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById('main-form').prepend(wrapper);
        new FieldLabel_1.FieldLabel(this.name, this.label, wrapper).render();
        const checkbox = document.createElement('input');
        checkbox.id = this.name;
        checkbox.type = EFieldType_1.FieldType.Checkbox;
        checkbox.value = this.value;
        wrapper.append(checkbox);
        return wrapper;
    }
}
var valuesArr = [];
class App {
    constructor() {
        this.arrayOfFields = [new TextAreaField("text-area", "Uwagi: ", EFieldType_1.FieldType.TextArea, ' '),
            new CheckboxField("checkbox", 'Czy preferujesz e-learning: ', EFieldType_1.FieldType.Checkbox, ' '),
            new SelectField("select-field", 'Tryb studiów do wyboru: ', EFieldType_1.FieldType.Select, ' '),
            new InputField_1.InputField("input-email", "e-mail: ", EFieldType_1.FieldType.Email, ' '),
            new InputField_1.InputField("input-surname", "Nazwisko: ", EFieldType_1.FieldType.Text, ' '),
            new InputField_1.InputField("input-name", "Imie: ", EFieldType_1.FieldType.Text, ' ')];
    }
    getValue() {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            console.log(this.arrayOfFields[i].getValue());
            var element = document.createElement("p");
            element.innerText = (this.arrayOfFields[i].getValue());
            document.getElementById('render-wrapper').after(element);
        }
    }
    render() {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            (this.arrayOfFields[i].render());
        }
        document.getElementById('submit').addEventListener('click', (event) => {
            event.preventDefault();
        });
    }
}
window.addEventListener('DOMContentLoaded', (event) => {
    const app = new App();
    app.render();
});
//# sourceMappingURL=index.js.map