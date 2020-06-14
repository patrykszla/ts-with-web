"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldLabel_1 = require("./FieldLabel");
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
exports.SelectField = SelectField;
//# sourceMappingURL=SelectField.js.map