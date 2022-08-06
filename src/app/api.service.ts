import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root',
})
export class ApiService {
    serverName: string;

    constructor() {
        this.serverName = (window as unknown as {[key: string]: string} )['PQSERVER'] || 'http://sponsorschoose.ua';
    }

    urlMap: {[key: string]: string} = {
        'get-dir-list': '/c/vc/e/dir.php?path=%path%',
        'remove-dir-item': '/c/vc/e/dir.php?id=%id%',
        'create-dir-item': '/c/vc/e/dir.php?path=%path%',
        'update-whole-dir-item': '/c/vc/e/dir.php?id=%id%',
        'update-dir-item-partially': '/c/vc/e/dir.php?id=%id%',    
    }

    getURL(title: string): string {
        return this.serverName + this.urlMap[title];
    }
}
