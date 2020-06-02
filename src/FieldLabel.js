"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FieldLabel {
    constructor(forId, text, parent) {
        this.text = text;
        this.forId = forId;
        this.parent = parent;
    }
    render() {
        const labelElement = document.createElement('label');
        labelElement.htmlFor = this.forId;
        labelElement.innerText = this.text;
        this.parent.append(labelElement);
        return labelElement;
    }
}
exports.FieldLabel = FieldLabel;
//# sourceMappingURL=FieldLabel.js.map