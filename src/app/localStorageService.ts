

export class LocalStorageService<T> {

    constructor(private key: string) {


    }

    // saveItemsToLocalStorage(contacts: Array<Contact>) {
    //     contacts = this.sortByID(contacts);
    //     const savedContacts = localStorage.setItem('contacts', JSON.stringify(contacts));
    //     console.log('from saveItemToLocalStorage savedContacts: ', savedContacts);
    //     return savedContacts;
    //   }
    //   getItemsFromLocalStorage(key: string) {
    //     const savedContacts = JSON.parse(localStorage.getItem(key));
    //     console.log('from getItemsFromLocalStorage savedItems', savedContacts);
    //     return savedContacts;
    //   }
    saveItemsToLocalStorage(items: Array<T> | T) {
        const savedItems = localStorage.setItem(this.key, JSON.stringify(items));
        return savedItems;
    }

    getItemsFromLocalStorage(key?: string) {
        let savedItems;
        if (key != null) {
            savedItems = JSON.parse(localStorage.getItem(key));
        } else {
            savedItems = JSON.parse(localStorage.getItem(this.key));
        }
        return savedItems;
    }

    // clearItemFromLocalStorage(key?: string) {
    //     if (key != null) {
    //         const items = null;
    //         localStorage.setItem(key, JSON.stringify(items));
    //     } else {
    //         localStorage.clear();
    //     }
    // }
}
