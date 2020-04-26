"use strict";
exports.__esModule = true;
var EFieldType_1 = require("./EFieldType");
var FieldLabel = /** @class */ (function () {
    function FieldLabel(forId, text, parent) {
        this.text = text;
        this.forId = forId;
        this.parent = parent;
    }
    FieldLabel.prototype.render = function () {
        var labelElement = document.createElement('label');
        labelElement.htmlFor = this.forId;
        labelElement.innerText = this.text;
        this.parent.append(labelElement);
        return labelElement;
    };
    return FieldLabel;
}());
var InputField = /** @class */ (function () {
    function InputField(name, label, type, value) {
        this.name = name ? name : this.name;
        this.label = label ? label : this.label;
        this.type = type ? type : this.type;
        this.value = value ? value : this.value;
    }
    InputField.prototype.getValue = function () {
        var inputVal = document.getElementById(this.name).value;
        return inputVal;
    };
    InputField.prototype.render = function () {
        var wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        var inputElement = document.createElement('input');
        inputElement.id = this.name;
        inputElement.type = this.type;
        inputElement.value = this.value;
        wrapper.append(inputElement);
        return inputElement;
    };
    return InputField;
}());
var TextAreaField = /** @class */ (function () {
    function TextAreaField(name, label, type, value) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    TextAreaField.prototype.getValue = function () {
        var textAreaVal = document.getElementById(this.name).value;
        return textAreaVal;
    };
    TextAreaField.prototype.render = function () {
        var wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        var textAreaElement = document.createElement('textarea');
        textAreaElement.id = this.name;
        textAreaElement.value = this.value;
        wrapper.append(textAreaElement);
        return textAreaElement;
    };
    return TextAreaField;
}());
var SelectField = /** @class */ (function () {
    function SelectField(name, label, type, value) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    SelectField.prototype.getValue = function () {
        var selectValue = document.getElementById(this.name).value;
        if (selectValue == 'external') {
            selectValue = "Tryb zaoczny";
        }
        else {
            selectValue = "Tryb dzienny";
        }
        return selectValue;
    };
    SelectField.prototype.render = function () {
        var wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        var newSelect = document.createElement('select');
        newSelect.id = this.name;
        wrapper.append(newSelect);
        var firstOption = document.createElement('option');
        firstOption.value = 'external';
        firstOption.innerText = 'Zaocznie';
        newSelect.append(firstOption);
        var secondOption = document.createElement('option');
        secondOption.value = 'full-time';
        secondOption.innerText = 'Dziennie';
        newSelect.append(secondOption);
        return wrapper;
    };
    return SelectField;
}());
var CheckboxField = /** @class */ (function () {
    function CheckboxField(name, label, type, value) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    CheckboxField.prototype.getValue = function () {
        var checkboxValue = document.getElementById(this.name).checked;
        var checkboxString = ' ';
        if (checkboxValue == true) {
            checkboxString = 'preferuje e-learning';
        }
        else if (checkboxValue == false) {
            checkboxString = 'nie preferuje e-learningu';
        }
        return checkboxString;
    };
    CheckboxField.prototype.render = function () {
        var wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById('main-form').prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        var checkbox = document.createElement('input');
        checkbox.id = this.name;
        checkbox.type = EFieldType_1.FieldType.Checkbox;
        checkbox.value = this.value;
        wrapper.append(checkbox);
        return wrapper;
    };
    return CheckboxField;
}());
var valuesArr = [];
var Form = /** @class */ (function () {
    function Form() {
        this.arrayOfFields = [new TextAreaField("text-area", "Uwagi: ", EFieldType_1.FieldType.TextArea, ' '),
            new CheckboxField("checkbox", 'Czy preferujesz e-learning: ', EFieldType_1.FieldType.Checkbox, ' '),
            new SelectField("select-field", 'Tryb studiów do wyboru: ', EFieldType_1.FieldType.Select, ' '),
            new InputField("input-email", "e-mail: ", EFieldType_1.FieldType.Email, ' '),
            new InputField("input-surname", "Nazwisko: ", EFieldType_1.FieldType.Text, ' '),
            new InputField("input-name", "Imie: ", EFieldType_1.FieldType.Text, ' ')];
    }
    Form.prototype.getValue = function () {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            console.log(this.arrayOfFields[i].getValue());
            var element = document.createElement("p");
            element.innerText = (this.arrayOfFields[i].getValue());
            document.getElementById('render-wrapper').after(element);
        }
    };
    Form.prototype.render = function () {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            (this.arrayOfFields[i].render());
        }
    };
    return Form;
}());
var App = /** @class */ (function () {
    function App() {
        var newForm = new Form();
        newForm.render();
        document.getElementById('submit').addEventListener('click', function (event) {
            event.preventDefault();
            newForm.getValue();
        });
    }
    return App;
}());
window.addEventListener('DOMContentLoaded', function (event) {
    var app = new App();
});
var hello = "yep, it's working";
document.body.innerHTML = hello;
