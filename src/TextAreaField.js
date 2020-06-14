"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldLabel_1 = require("./FieldLabel");
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
exports.TextAreaField = TextAreaField;
//# sourceMappingURL=TextAreaField.js.map