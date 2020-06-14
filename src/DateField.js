"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldLabel_1 = require("./FieldLabel");
const EFieldType_1 = require("./EFieldType");
class DateField {
    constructor(name, label, type, value) {
        this.id = new Date().getTime();
        this.name = name;
        this.label = this.label = label ? label : this.label;
        this.value = value ? value : "";
        this.type = EFieldType_1.FieldType.Data;
    }
    getValue() {
        return this.value;
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.className = ("form-div");
        new FieldLabel_1.FieldLabel(this.name, this.label, wrapper).render();
        const inputElement = document.createElement('input');
        inputElement.id = this.id.toString() + this.name;
        inputElement.type = this.type;
        inputElement.value = this.value;
        wrapper.append(inputElement);
        return inputElement;
    }
}
exports.DateField = DateField;
//# sourceMappingURL=DateField.js.map