"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EFieldType_1 = require("./EFieldType");
const FieldLabel_1 = require("./FieldLabel");
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
exports.CheckboxField = CheckboxField;
//# sourceMappingURL=CheckboxField.js.map