import { FieldLabel } from "./FieldLabel";
import { FieldType } from "./EFieldType";
import { IField } from "./IField";


export class DateField implements IField {
    name: string;
    label: string;
    type: FieldType.Data;
    value: string;
    id: number = new Date().getTime();
    constructor(name: string, label: string, type:string, value?: string) {
        this.name = name; 
        this.label = this.label = label ? label : this.label;
        this.value = value ? value : "";
        this.type = FieldType.Data;
    }
    getValue(): string {
        // const date = JSON.stringify(Date.now());
        // console.log(date);

        var today:Date = new Date();
        var dd: string = JSON.stringify(today.getDay());
        var mm: string = JSON.stringify(today.getDate());
        var yy: string = JSON.stringify(today.getFullYear());

        var date:string = dd + "/" + mm + "/" + yy;
        
        console.log(date);


        
        

        // return this.Value;
        // var dateValue = (<HTMLInputElement>document.getElementById(this.name)).value;
        // var dateVal:number = new Date().getTime();
        // var stringDateVal:string = this.id.toString();
       return date;
    }
    render(): HTMLDivElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        // document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const inputElement = <HTMLInputElement>document.createElement('input');
        // inputElement.value = new Date().getTime();
        inputElement.id = this.id.toString() + this.name;
        inputElement.type = this.type;
        inputElement.value = this.value;
        wrapper.append(inputElement);
        return inputElement
        // console.log(inputElement);
    }
}