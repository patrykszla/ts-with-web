import { Form } from "./Form";
import { SelectField } from "./SelectField";
import { InputField } from "./InputField";
import { FieldType } from "./EFieldType";
import { IFieldCreator } from "./IFieldCreator";
import { LocalStorage } from "./LocalStorage"
import { IField } from "./IField";

export class FormCreator {
renderForm: Array<IFieldCreator> = [];
valuesInput: { [key: string]:string };
title: InputField;
locStorage : LocalStorage;
     settings = [new InputField(Date.now().toString() + 'name', 'Podaj nazwe pola', FieldType.Text, ' '),
       new InputField(Date.now().toString() + 'type', 'Podaj typ:', FieldType.Text, ' '),
       new InputField(Date.now().toString() + 'label', 'Podaj etykietę pola', FieldType.Text, ' '),
       new InputField(Date.now().toString() + 'value', 'Podaj domyślną wartość', FieldType.Text, ' ')
    ]
    constructor() {
        this.locStorage = new LocalStorage
    }

    newForm(){
        var quantity = <HTMLInputElement>document.getElementById("quantity");
        
        var save = <HTMLButtonElement>document.getElementById('save');
        save.addEventListener("click", () => {
            this.saveForm();
            this.getAllInputs();
            this.generate();
            
        });

       
        var formDisplay = <HTMLDivElement>document.getElementById("form-creator-off");
        var generate = <HTMLButtonElement>document.getElementById("generate-form");
        generate.addEventListener("click", () => {
            formDisplay.classList.add('display-off');
            save.classList.add('display-on');
                for ( let i = 0 ; i < parseFloat(quantity.value); i++) {
                    this.generateInput(i.toString());
                }
        
        })
    };

    generate() {
        var newDiv = document.createElement("div");
        
        
    }

    saveForm() {
        const newForm: { name: string; label: string; type: string; value: string; }[] = [];
        
        this.getAllInputs().forEach((el:IFieldCreator) => {
          const createField = {
            name: el.name.value,
            label: el.label.value,
            type:  el.type.value,
            value: el.value.value
          }
        newForm.push(createField);
        console.log('nowy input')
        console.log(newForm);

    })};
    
    generateInput(i:string) {
        // var options: string[] = ['option1','option2']
        var mainForm = <HTMLDivElement>document.getElementById('main-form');
        const newDiv = <HTMLDivElement>document.createElement('div');
        newDiv.classList.add('new-form-input');
        mainForm.append(newDiv);
      
            const inputDefault = new InputField('input-default' + i, 'Domyślna wartość: ', FieldType.Text, ' ')
            inputDefault.render();

            const inputLabel = new InputField('input-label' + i, 'Etykieta pola: ', FieldType.Text, ' ');
            inputLabel.render();

            const inputName = new InputField('input-name' + i, 'Nazwa pola: ', FieldType.Text, ' ');
            inputName.render();

            var arrayOfInputs = [inputDefault, inputLabel, inputName];
           
            document.getElementById('save').addEventListener("click", () => {
             for (let i = 0 ; i < arrayOfInputs.length; i++) {
                 console.log(arrayOfInputs[i].getValue());
             }  
            });
            
            
            
            const selectField = new SelectField(
                'name' + i,
                'Typ pola: ',
                FieldType.Select,
                '',
                [FieldType.Text, FieldType.Email, FieldType.TextArea, FieldType.Checkbox,FieldType.Data, ]
                )
                selectField.render();
            
            const newInput : IFieldCreator = {
                type: selectField,
                label: inputLabel,
                name: inputName,
                value: inputDefault,
            };

            this.renderForm.push(newInput)
            // console.log(this.renderForm);


        var buttonSave = <HTMLButtonElement>document.createElement('button');
        buttonSave.innerText = 'zapisz';
        buttonSave.id = 'saveFormCreator'

        return arrayOfInputs
    }

    getAllInputs(): Array<IFieldCreator> {
        return this.renderForm
        // return this.renderForm;
        
      }
    
}