import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-dir-dialog',
  templateUrl: './add-dir-dialog.component.html',
  styleUrls: ['./add-dir-dialog.component.sass']
})
export class AddDirDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDirDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public path: string,) { }

  ngOnInit(): void {
  }

  appDialogClose(): void {
      this.dialogRef.close();
  }

}
