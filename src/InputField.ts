import { FieldType } from "./EFieldType"
import { IField } from "./IField";
import { FieldLabel } from "./FieldLabel";


export class InputField implements IField {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    id: string = new Date().getTime().toString();
    events: string[] = ["focusout", "input", "change"]
    constructor(name: string, label: string, type: FieldType, value?: string) {
        this.name = name ? name : this.name;
        this.label = label ? label : this.label;
        this.type = type ? type : this.type;
        this.value = value? value : this.value;
    }
    getValue(): string {
        // var inputVal = (<HTMLInputElement>document.getElementById(this.id + this.name)).value;
        return this.value;
    }

    addDefaultEvents(input:HTMLInputElement): void {
        this.events.forEach(e => input.addEventListener(e, event => this.setValue(<string>(<HTMLInputElement>event.target).value)));
    }

    setValue(value:string) :boolean{
        this.value = value;
        if(this.getValue() === value){
            return true;
        }else{
            return false;
        }
    }

    render(): HTMLDivElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.id + this.name, this.label, wrapper).render();
        const inputElement = <HTMLInputElement>document.createElement('input');
        inputElement.id = this.id + this.name;  
        inputElement.type = this.type;
        inputElement.value = this.value;
        wrapper.append(inputElement);
        this.addDefaultEvents(inputElement);
        return inputElement
    }
}