export class FieldLabel {
    text: string;
    forId: string;
    parent: HTMLDivElement;
    constructor(forId:string, text:string, parent:HTMLDivElement) {
        this.text = text;
        this.forId = forId;
        this.parent = parent;
    }
    render():HTMLLabelElement {
        const labelElement = <HTMLLabelElement>document.createElement('label');
        labelElement.htmlFor = this.forId;
        labelElement.innerText = this.text;
        this.parent.append(labelElement); 
        return labelElement
    }
}