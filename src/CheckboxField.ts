import { FieldType } from "./EFieldType"
import { IField } from "./IField"
import { FieldLabel } from "./FieldLabel"

export class CheckboxField implements IField {
    name:string;
    label: string;
    type: FieldType;
    value: string;
    id: string;
    constructor(name:string, label: string, type: FieldType, value?: string) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue(): string {
        var checkboxValue = (<HTMLInputElement>document.getElementById(this.name)).checked;
        var checkboxString = ' '
        if (checkboxValue == true) {
            checkboxString = 'preferuje e-learning';
        } else if (checkboxValue == false) {
            checkboxString = 'nie preferuje e-learningu';
        }
        return checkboxString
    }
    render():HTMLDivElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById('main-form').prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const checkbox = <HTMLInputElement>document.createElement('input');
        checkbox.id = this.name;
        checkbox.type = FieldType.Checkbox;
        checkbox.value = this.value;
        wrapper.append(checkbox);
        return wrapper;
    }
}