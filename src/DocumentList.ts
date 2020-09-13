import { LocalStorage } from "./LocalStorage";
import { Form } from "./Form";
import { keyArray } from "./Variables";
import { throws } from "assert";

export class DocumentList {
    arrayOfDocuments: string[];

    getDocumentList():string[] {
         const newLocalStorage = new LocalStorage;
         this.arrayOfDocuments = newLocalStorage.getDocuments();
        console.log(this.arrayOfDocuments);
         return this.arrayOfDocuments;
    }

    render(): HTMLUListElement {
        this.getDocumentList();
       var listOfKeys = document.createElement('ul');
        listOfKeys.id = 'list-of-keys';
        document.getElementById('document-list-wrapper').append(listOfKeys);
    

        for(let i = 0; i < this.arrayOfDocuments.length; i++ ) {
            var divForLink = document.createElement('div');
            divForLink.className = 'links-wrapper';
            divForLink.id = this.arrayOfDocuments[i];
            document.getElementById('list-of-keys').append(divForLink);
            var newLi = document.createElement('li');
            divForLink.append(newLi);
            var link = document.createElement('a');
            link.innerText = this.arrayOfDocuments[i];
            link.href = "edit-document.html?id="+this.arrayOfDocuments[i];
            // link.href = "./index.html";
            newLi.append(link);

            var buttonDelete = document.createElement('button');
            buttonDelete.innerText = 'Usun';
            buttonDelete.className = 'button-delete'
            newLi.append(buttonDelete);
            buttonDelete.addEventListener('click', () => {
              this.removeDocument(this.arrayOfDocuments[i]);
            })
        }
       return listOfKeys
        
    }

    removeDocument(id:string) :void {
        var newLocalStorage = new LocalStorage();
        document.getElementById(id).remove();
        newLocalStorage.removeDocument(id);
    }

    getDocument(id:string):object{
        const getDocument = new LocalStorage();
        return  getDocument.loadDocument(id);
    }
}