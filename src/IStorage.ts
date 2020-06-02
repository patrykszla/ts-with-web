export interface Storage {
    saveDocument(object:any): string;
    loadDocument(id:string): string;
    getDocuments(): object[];
}