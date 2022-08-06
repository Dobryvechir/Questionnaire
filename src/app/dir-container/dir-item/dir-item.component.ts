import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DirItem } from '../../models/dirtree';
import { DirTreeService } from '../../dirtree.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DirDialogComponent } from './dir-dialog/dir-dialog.component';

@Component({
  selector: 'app-dir-item',
  templateUrl: './dir-item.component.html',
  styleUrls: ['./dir-item.component.sass']
})
export class DirItemComponent implements OnInit {

  @Input()
  item?: DirItem;

  @Output()
  update = new EventEmitter<void>();

  constructor(private dirService: DirTreeService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editDir(item:DirItem): void {
    const dialogRef = this.dialog.open(DirDialogComponent, {
      width: '250px',
      data: item,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.update.emit();
    });
  }

  handleUpdateEnd(): void {
    this.update.emit();
  }
  
  deleteDir(id?:string): void {
    if (id) {
      this.dirService.removeDirItem(id).subscribe(()=>{
        this.update.emit();

        window.console.log('deleteDir', id);
      });

    }
  }
}