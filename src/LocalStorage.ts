import { Storage } from "./IStorage";
import { keyArray } from "./Variables";
import { valuesArr } from "./Variables";
import {DocumentList} from "./DocumentList";

export class LocalStorage implements Storage {

    clear(): void {
        localStorage.clear();
    }
    getItem(key: string): string {
        return localStorage.getItem(key);
    }
    key(index: number): string {
        return localStorage.key(index);
    }
    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
    setItem(key:string, value:string): void {
        localStorage.setItem(key, value);
    }
    saveDocument(object:any):string {
        const key: string = Date.now().toString();
        const getDocuments = this.getDocuments();
        getDocuments.push(key);
        this.setItem(keyArray, JSON.stringify(getDocuments));
        this.setItem(key, JSON.stringify(object));
        return key;
    
    }
    loadDocument(string:string): object {
        const getDocument = this.getItem(string);
        return JSON.parse(getDocument);
    }

    getDocuments(): string[] {
        let documents = localStorage.getItem(keyArray) ? JSON.parse(localStorage.getItem(keyArray)) : [];

        return documents;
    }

    removeDocument(id:string): void {
        var newLocalStorage = new LocalStorage();
        newLocalStorage.removeItem(id);
        var arrayOfDocumentsRemove = [];
        var documents = newLocalStorage.getDocuments();

        for (let i = 0; i<documents.length; i++) {
            if (documents[i] != id) {
                arrayOfDocumentsRemove[i] = documents[i];
                
            } else {
                console.log('delete');
            }
        }

        var filtered = arrayOfDocumentsRemove.filter(function (el) {
            return el != null;
          });
          
          console.log(filtered);
        console.log(arrayOfDocumentsRemove);
        newLocalStorage.removeItem(keyArray);
        newLocalStorage.setItem(keyArray, JSON.stringify(filtered));
    
    }
}