import { FieldType } from "./EFieldType"

export interface IField {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    render(): HTMLElement;
    getValue(): string;
} 