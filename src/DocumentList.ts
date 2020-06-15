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
        // var link = document.createElement('a');
        this.getDocumentList();
        // var div = document.createElement('div');
        // div.id = 'keys-wrapper';
        // document.getElementById('document-list-wrapper').append(div);
        
       var listOfKeys = document.createElement('ul');
        listOfKeys.id = 'list-of-keys';
        document.getElementById('document-list-wrapper').append(listOfKeys);
        // div.append(listOfKeys);

        for(let i = 0; i < this.arrayOfDocuments.length; i++ ) {
            var divForLink = document.createElement('div');
            divForLink.className = 'links-wrapper';
            divForLink.id = this.arrayOfDocuments[i];
            document.getElementById('list-of-keys').append(divForLink);
            var newLi = document.createElement('li');
            divForLink.append(newLi);
            var link = document.createElement('a');
            link.innerText = this.arrayOfDocuments[i];
            link.href = "./index.html";
            newLi.append(link);

            var buttonDelete = document.createElement('button');
            buttonDelete.innerText = 'Usun';
            buttonDelete.className = 'button-delete'
            newLi.append(buttonDelete);
            buttonDelete.addEventListener('click', () => {
                
            //   this.documentId = this.arrayOfDocuments[i];
            //   console.log(this.documentId);
              this.removeDocument(this.arrayOfDocuments[i]);
            })

            // newLi.innerText = this.arrayOfDocuments[i];
            // listOfKeys.append(divForLink);
            // divForLink.append(newLi);

        }
        // this.arrayOfDocuments.forEach(element => {
        //     var newLi = document.createElement('li');
        //     newLi.innerText = element;
        //     listOfKeys.append(newLi);
        // });
       return listOfKeys
        
    }

    removeDocument(id:string) :void {
        // id = this.documentId;
        var newLocalStorage = new LocalStorage();
        newLocalStorage.removeItem(id);
        document.getElementById(id).remove();
                // newLocalStorage.removeItem();
        // document.removeChild()
                console.log('button delete');
                // divForLink.remove();
    }
}