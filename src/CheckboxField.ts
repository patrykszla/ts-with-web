import { FieldType } from "./EFieldType"
import { IField } from "./IField"
import { FieldLabel } from "./FieldLabel"

export class CheckboxField implements IField {
    name:string;
    label: string;
    type: FieldType;
    value: string;
    id: string = new Date().getTime().toString();
    constructor(name:string, label: string, type: FieldType, value?: string) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue(): string {
        var checkboxValue = (<HTMLInputElement>document.getElementById(this.id + this.name)).checked;
        var checkboxValString = checkboxValue.toString();
        // var checkboxString = ' '
        // if (checkboxValue == true) {
        //     checkboxString = 'yes';
        // } else if (checkboxValue == false) {
        //     checkboxString = 'no';
        // }
        return checkboxValString
    }

    setValue(value: string): boolean {
        this.value = value;
        if(this.getValue() === value){
            return true;
        }else{
            return false;
        }
    }

    render():HTMLDivElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById('main-form').prepend(wrapper);
        new FieldLabel(this.id + this.name, this.label, wrapper).render();
        const checkbox = <HTMLInputElement>document.createElement('input');
        checkbox.id = this.id + this.name;
        checkbox.type = FieldType.Checkbox;
        checkbox.value = this.value;
        if(this.value){
            checkbox.checked = true;
        }
        console.log(this.value);
        wrapper.append(checkbox);
        return wrapper;
    }
}