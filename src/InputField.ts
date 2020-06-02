import { FieldType } from "./EFieldType"
import { IField } from "./IField";
import { FieldLabel } from "./FieldLabel";


export class InputField implements IField {
    name: string;
    label: string;
    type: FieldType;
    
    value: string;
    constructor(name: string, label: string, type: FieldType, value?: string) {
        this.name = name ? name : this.name;
        this.label = label ? label : this.label;
        this.type = type ? type : this.type;
        this.value = value? value : this.value;
    }
    getValue(): string {
        var inputVal = (<HTMLInputElement>document.getElementById(this.name)).value;
        return inputVal
    }
    render(): HTMLInputElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const inputElement = <HTMLInputElement>document.createElement('input');
        inputElement.id = this.name;  
        inputElement.type = this.type;
        inputElement.value = this.value;
        wrapper.append(inputElement);
        return inputElement
    }
}