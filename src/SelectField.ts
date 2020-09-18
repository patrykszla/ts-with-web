import { FieldType } from "./EFieldType"
import { IField } from "./IField"
import { FieldLabel } from "./FieldLabel"

export class SelectField implements IField {
    name: string;
    label: string;
    type: FieldType.Select;
    value: string;
    options: string[];
    id: string = new Date().getTime().toString();
    events: string[] = ["focusout", "input", "change"];
    constructor(name:string, label: string, type:FieldType.Select, value?: string, options?: Array<string>) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
        if(options){
            this.options = options;
        }
    }
    getValue(): string {
        // var selectValue = (<HTMLSelectElement>document.getElementById(this.id + this.name)).value;
        // console.log(selectValue);
        return this.value
    }
    setValue(value: string): boolean {
        this.value = value;
        if(this.getValue() === value){
            return true;
        }else{
            return false;
        }
    }

    addDefaultEvents(select:HTMLSelectElement): void {
        this.events.forEach(e => select.addEventListener(e, event => this.setValue(<string>(<HTMLSelectElement>event.target).value)));
    }
    
    render():HTMLDivElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.id + this.name, this.label, wrapper).render();
        const newSelect = <HTMLSelectElement>document.createElement('select');
        newSelect.classList.add('select')
        newSelect.id = this.id + this.name;
        newSelect.value = this.value;
        
        this.options.forEach(element => {
           const option = <HTMLOptionElement>document.createElement('option');
           option.classList.add("select-option")
           option.value = element;
           option.innerText = element;
           newSelect.append(option);
        });
        wrapper.append(newSelect);
        this.addDefaultEvents(newSelect);
        return wrapper;
    }
}