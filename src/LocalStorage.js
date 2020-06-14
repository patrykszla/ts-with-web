"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocalStorage {
    constructor() {
        this.keyArray = "1234567890";
    }
    clear() {
        localStorage.clear();
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
    key(index) {
        return localStorage.key(index);
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    saveDocument(object) {
        const key = Date.now().toString();
        const getDocuments = this.getDocuments();
        getDocuments.push(key);
        this.setItem(this.keyArray, JSON.stringify(getDocuments));
        this.setItem(key, JSON.stringify(object));
        return key;
    }
    loadDocument(string) {
        const getDocument = this.getItem(string);
        return JSON.parse(getDocument);
    }
    getDocuments() {
        let documents = localStorage.getItem(this.keyArray) ? JSON.parse(localStorage.getItem(this.keyArray)) : [];
        return documents;
    }
}
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=LocalStorage.js.map