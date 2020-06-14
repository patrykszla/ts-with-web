import { LocalStorage } from "./LocalStorage";
import { Form } from "./Form";
import { keyArray } from "./Variables";

export class DocumentList {
    arrayOfDocuments: string[];
    getDocumentList():string[] {
         const newLocalStorage = new LocalStorage;
         newLocalStorage.getDocuments();
        //  newLocal.getItem(keyArray);
        //  console.log(newLocalStorage.getDocuments());
         this.arrayOfDocuments = newLocalStorage.getDocuments();
        //  const parsedArray = JSON.parse(this.arrayOfDocuments);
        console.log(this.arrayOfDocuments);
         return this.arrayOfDocuments;
    }

    render(): HTMLTableElement {
        let newTable = document.createElement('table');
        let row = document.createElement('tr');
        newTable.append(row);
        this.getDocumentList();
        // const parsedArray = JSON.stringify(this.arrayOfDocuments);
        // console.log(parsedArray);
        

        // this.arrayOfDocuments.forEach(function(value, key) {
        //     console.log(key + ' = ' + value)
        //   })
        
        // var res = this.arrayOfDocuments.split(" ");
        // var contact = JSON.parse(this.arrayOfDocuments);
        // const parsedArray = JSON.parse(this.arrayOfDocuments)

        // for (let i = 0; i < this.arrayOfDocuments.length; i++) {
        //     let newTd = document.createElement('td');
        //     newTd.innerText = this.arrayOfDocuments[i];
        //     row.append(newTd);
        // }
       
        
       return newTable
        
        
        
        // let newUl = document.createElement('ul');
        // newUl.id = 'render-document-list';
        // let newLi = document.createElement('li');
        // newLi.
        
        // document.getElementById('render-wrapper').append(newUl);
        // this.getDocumentList()
    }
}