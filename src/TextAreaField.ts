
import { FieldType } from "./EFieldType"
import { IField } from "./IField"
import { FieldLabel } from "./FieldLabel"

export class TextAreaField implements IField {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    constructor(name:string, label: string, type:FieldType, value?:string) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue(): string {
        var textAreaVal = (<HTMLTextAreaElement>document.getElementById(this.name)).value
        return textAreaVal
    }
    render():HTMLTextAreaElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const textAreaElement = <HTMLTextAreaElement>document.createElement('textarea');
        textAreaElement.id = this.name;
        textAreaElement.value = this.value;
        wrapper.append(textAreaElement);
        return textAreaElement
    }
}