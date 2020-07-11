import { FieldType } from "./EFieldType"
import { IField } from "./IField"
import { FieldLabel } from "./FieldLabel"

export class SelectField implements IField {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    id: string;
    constructor(name:string, label: string, type:FieldType, value?: string) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value ? value : "";
    }
    getValue(): string {
        var selectValue = (<HTMLSelectElement>document.getElementById(this.name)).value;
        if (selectValue == 'external') {
            selectValue = "Tryb zaoczny";
        } else {
            selectValue = "Tryb dzienny";
        }
        return selectValue
        return this.value;
    }
    render():HTMLDivElement {
        const wrapper = <HTMLDivElement>document.createElement('div');
        wrapper.className = ("form-div");
        document.getElementById("main-form").prepend(wrapper);
        new FieldLabel(this.name, this.label, wrapper).render();
        const newSelect = <HTMLSelectElement>document.createElement('select');
        newSelect.id = this.name;
        wrapper.append(newSelect);
        const firstOption = <HTMLOptionElement>document.createElement('option');
        firstOption.value = 'external';
        firstOption.innerText = 'Zaocznie';
        newSelect.append(firstOption);
        const secondOption = <HTMLOptionElement>document.createElement('option')
        secondOption.value = 'full-time';
        secondOption.innerText = 'Dziennie';
        newSelect.append(secondOption);
        return wrapper;
    }
}