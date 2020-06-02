"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldLabel_1 = require("./FieldLabel");
class InputField {
    constructor(name, label, type, value) {
        this.name = name ? name : this.name;
        this.label = label ? label : this.label;
        this.type = type ? type : this.type;
        this.value = value ? value : this.value;
    }
    getValue() {
        var inputVal = document.getElementById(this.name).value;
        return inputVal;
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel_1.FieldLabel(this.name, this.label, wrapper).render();
        const inputElement = document.createElement('input');
        inputElement.id = this.name;
        inputElement.type = this.type;
        inputElement.value = this.value;
        wrapper.append(inputElement);
        return inputElement;
    }
}
exports.InputField = InputField;
//# sourceMappingURL=InputField.js.map