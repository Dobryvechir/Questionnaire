import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DirItem } from '../../../models/dirtree';

@Component({
  selector: 'app-dir-dialog',
  templateUrl: './dir-dialog.component.html',
  styleUrls: ['./dir-dialog.component.sass']
})
export class DirDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DirDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public item: DirItem,) { }

  ngOnInit(): void {
  }

  handleUpdateEnd(): void {
    this.dialogRef.close();
  }

}