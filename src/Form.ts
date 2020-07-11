import { FieldType } from "./EFieldType";
// import { IField } from "./IField";
// import { FieldLabel } from "./FieldLabel";
import { InputField } from "./InputField";
import { CheckboxField } from "./CheckboxField";
import { SelectField } from "./SelectField";
import { TextAreaField } from "./TextAreaField";
import { DateField } from "./DateField";
import { valuesArr } from "./Variables"
import { LocalStorage } from "./LocalStorage";
import { DocumentList } from "./DocumentList";
// import { Storage } from "./IStorage";

export class Form {
    arrayOfFields = [new TextAreaField("text-area", "Uwagi: ", FieldType.TextArea, ' '), 
    new CheckboxField("checkbox", 'Czy preferujesz e-learning: ', FieldType.Checkbox, ' '), 
    new SelectField("select-field", 'Tryb studiów do wyboru: ', FieldType.Select, ' '),
    new InputField("input-email","e-mail: ", FieldType.Email, ' '),
    new InputField("input-surname", "Nazwisko: ", FieldType.Text, ' '),
    new InputField("input-name", "Imie: ", FieldType.Text, ' '),
    new DateField("data", "Data:", FieldType.Data, ' ' )];
    constructor(){}

    insertValue(documentData:any){
       
        this.arrayOfFields.forEach(el => {
            if(documentData.hasOwnProperty(el.name)){
                el.value = documentData[el.name];
            }
        if(el.value === "preferuje e-learning"){
            console.log('preferuje');
        }
        })

        
    }
    
    getValue() {
        // const answer: { [key: string]: string | number } = {};

        // this.arrayOfFieldsforEach(el => {
        //     answer[el.name] = (<HTMLInputElement>document.getElementById(el.id + el.name)).value;
        // })
        // return answer;
        
        // const arrayOfValues: {[key:string]: string | number} = {};
        // this.arrayOfFields.forEach(el => {
        //     arrayOfValues[el.name] = 
        // }

        
        const initialValue:any = {};
        for (var i = 0; i < this.arrayOfFields.length; i++ ) {
            initialValue[this.arrayOfFields[i].name] = this.arrayOfFields[i].getValue();
            var element = document.createElement("p");
            element.innerText = (this.arrayOfFields[i].getValue());
            // document.getElementById('render-wrapper').after(element);
        }


 
    /*for (var i = 0; i < this.arrayOfFields.length; i++ ) {
        valuesArr.unshift(this.arrayOfFields[i].getValue());
        
        console.log(this.arrayOfFields[i].getValue());
        var element = document.createElement("p");
        element.innerText = (this.arrayOfFields[i].getValue());
        document.getElementById('render-wrapper').after(element);
        
        
    }*/
    // let myObj:object = Object.assign({}, valuesArr);
    // let arr1 = [1];
    // let arr2= [3];
    // let myObj:object = Object.assign(arr1, arr2);
    // console.log(JSON.stringify(myObj));
    //     console.log(myObj);
    // console.log(valuesArr);
    // console.log(JSON.stringify(valuesArr));
    // console.log(answer);
    console.log(initialValue);
    return initialValue;

    

    
    
}
    render():void {
        for (var i = 0; i < this.arrayOfFields.length; i++) {
            (this.arrayOfFields[i].render());
        }
        let buttonSave: HTMLButtonElement = document.createElement('button');
        buttonSave.id = 'save';
        buttonSave.innerText = "Zapisz";
        document.getElementById('main-form').after(buttonSave);
        let buttonBack = document.createElement('button');
        document.getElementById('save').addEventListener('click',() => {
            this.save();
        })
        buttonBack.id = 'back';
        buttonBack.innerText = 'Wstecz';
        document.getElementById('main-form').before(buttonBack);
        document.getElementById('back').addEventListener('click',() => {
            window.location.href = '/index.html'
        })
     
    }
    

    
      save() {

        const save = new LocalStorage();
        save.saveDocument(this.getValue());
        
        // documentList.render();
        window.location.href = '/index.html';

    }
    // renderList() {
    //     var buttonBackTwo : HTMLButtonElement = document.createElement('button');
    //     buttonBackTwo.id = 'back2';
    //     buttonBackTwo.innerText = 'Wstecz';
    //     buttonBackTwo.className = 'back';
    //     document.getElementById('document-list-wrapper').append(buttonBackTwo);
    //     document.getElementById('back2').addEventListener('click', () => {
    //         window.location.href = '/index.html'
    //     })
    //     const documentList = new DocumentList();
    //     documentList.getDocumentList();
    // }
        

    
}