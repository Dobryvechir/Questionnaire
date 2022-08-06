import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DirTreeService } from '../dirtree.service';
import { DirItem, StoryItem } from '../models/dirtree';
import { AddDirDialogComponent } from './dir-item/add-dir-dialog/add-dir-dialog.component';

@Component({
  selector: 'app-dir-container',
  templateUrl: './dir-container.component.html',
  styleUrls: ['./dir-container.component.sass']
})
export class DirContainerComponent implements OnInit {
  dir: DirItem[] = [];
  story: StoryItem[] = [];
  parentLink: string = '/dir';

  constructor(private dirTreeService: DirTreeService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.updateDir();
  }

  addDirComponent(): void {
    const path = this.readPath();
    const dialogRef = this.dialog.open(AddDirDialogComponent, {
      width: '250px',
      data: path,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.updateDir();
    });
  }

  readPath(): string {
    let dir = this.router.url.substring(4)
    if (!dir || dir[0]!=='/') {
      dir = '/' + dir;
    }
    const pos = dir.lastIndexOf('/');
    const parent = dir.substring(0, pos);
    this.parentLink = '/dir' + parent;
    window.console.log('Path ', dir);
    return dir;
  }

  updateDir(): void {
    window.console.log('Reading whole dir');
    const path = this.readPath();
    this.dirTreeService.getDirList(path).subscribe((dirTree)=>{
      if(dirTree && dirTree.dir) {
        this.dir = dirTree.dir;
      }
      if(dirTree && dirTree.story) {
        this.story = dirTree.story;
      }
    })

  }
}
