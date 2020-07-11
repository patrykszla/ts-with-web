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
        // newLocalStorage.removeItem(id);
        document.getElementById(id).remove();
        newLocalStorage.removeDocument(id);
        // var arrayOfDocumentsRemove = [];
        // console.log(keyArray);
                // newLocalStorage.removeItem();
        // document.removeChild()

        // var documents = newLocalStorage.getDocuments();

        // for (let i = 0; i<documents.length; i++) {
        //     if (documents[i] != id) {
        //         arrayOfDocumentsRemove[i] = documents[i];
                
        //     } else {
        //         console.log('delete');
        //     }
        // }

        // var filtered = arrayOfDocumentsRemove.filter(function (el) {
        //     return el != null;
        //   });
          
        //   console.log(filtered);
        // console.log(arrayOfDocumentsRemove);
        // newLocalStorage.removeItem(keyArray);
        // newLocalStorage.setItem(keyArray, JSON.stringify(filtered));
        // newLocalStorage.getDocuments()
                console.log('button delete');
        
                // divForLink.remove();
    }
    getDocument(id:string):object{
        const getDocument = new LocalStorage();
        return  getDocument.loadDocument(id);
    }
}