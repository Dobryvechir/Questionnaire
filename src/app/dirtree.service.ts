import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DirItem, DirTree } from './models/dirtree';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class DirTreeService {
    constructor(private http: HttpClient,
                private api: ApiService) {
    }

    getDirList(path: string): Observable<DirTree> {
        const url = this.api.getURL('get-dir-list').replace('%path%', path);
        return this.http.get<DirTree>(url);
    }

    removeDirItem(id: string): Observable<void> {
        const url = this.api.getURL('remove-dir-item').replace('%id%',id);
        return this.http.delete<void>(url);
    }

    createDirItem(path: string, dirItem: DirItem): Observable<DirItem> {
        const url = this.api.getURL('create-dir-item').replace('%path%',path);
        return this.http.post(url, dirItem);
    }

    updateWholeDirItem(id: string, dirItem: DirItem): Observable<void> {
        const url = this.api.getURL('update-whole-dir-item').replace('%id%',id);
        return this.http.put<void>(url, dirItem);
    }

    updateDirItemPartially(id: string, dirItem: DirItem): Observable<void> {
        const url = this.api.getURL('update-dir-item-partially').replace('%id%',id);
        return this.http.patch<void>(url, dirItem);
    }
}
