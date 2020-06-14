import { LocalStorage } from "./LocalStorage";
import { Form } from "./Form";
import { keyArray } from "./Variables";
import { throws } from "assert";

export class DocumentList {
    arrayOfDocuments: string[];
    getDocumentList():string[] {
         const newLocalStorage = new LocalStorage;
        //  newLocalStorage.getDocuments();
        //  newLocal.getItem(keyArray);
        //  console.log(newLocalStorage.getDocuments());
         this.arrayOfDocuments = newLocalStorage.getDocuments();
        //  const parsedArray = JSON.parse(this.arrayOfDocuments);
        console.log(this.arrayOfDocuments);
         return this.arrayOfDocuments;
    }

    render(): HTMLUListElement {
        var link = document.createElement('a');
        this.getDocumentList();
        var newDiv = document.createElement('div');
        newDiv.id = 'keys-wrapper';
        document.getElementById('document-list-wrapper').append(newDiv);
        
       var listOfKeys = document.createElement('ul');
        listOfKeys.id = 'list-of-keys';
        newDiv.append(listOfKeys);

        for(let i = 0; i < this.arrayOfDocuments.length; i++ ) {
            var newDiv = document.createElement('div');
            newDiv.className = 'links-wrapper';
            var newLi = document.createElement('li');
            newLi.innerText = this.arrayOfDocuments[i];
            listOfKeys.append(newDiv);
            newDiv.append(newLi);
        }
        // this.arrayOfDocuments.forEach(element => {
        //     var newLi = document.createElement('li');
        //     newLi.innerText = element;
        //     listOfKeys.append(newLi);
            
        // });
        
       return listOfKeys
        
    }
}