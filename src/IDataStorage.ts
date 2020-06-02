export interface DataStorage {
    saveDocument(object:any): string;
    loadDocument(id:string): string;
    getDocuments(): object[];
}