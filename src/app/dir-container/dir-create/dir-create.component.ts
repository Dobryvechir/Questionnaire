import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DirTreeService } from '../../dirtree.service';
import { DirItem } from '../../models/dirtree';

@Component({
  selector: 'app-dir-create',
  templateUrl: './dir-create.component.html',
  styleUrls: ['./dir-create.component.sass']
})
export class DirCreateComponent implements OnInit {

  @Input()
  current?: DirItem;

  @Output()
  update = new EventEmitter<void>();
  
  @Input()
  path: string='/';



  action = 'Create';

  nameControl = new FormControl('');
  pictureControl = new FormControl('');
  translationPlControl = new FormControl('');
  translationDeControl = new FormControl('');
  translationUaControl = new FormControl('');

  constructor(private dirService: DirTreeService) { }

  ngOnInit(): void {
    if (this.current?.id) {
      this.nameControl.setValue(this.current.name || '');
      this.pictureControl.setValue(this.current.picture || '');
      if (this.current.translation) {
        this.translationPlControl.setValue(this.current.translation.pl || '');
        this.translationDeControl.setValue(this.current.translation.de || '');
        this.translationUaControl.setValue(this.current.translation.ua || '');
      } 
      this.action = 'Update';
    }
  }

  createDir(): void {
    const dirItem: DirItem = {
      name: this.nameControl.value || '',
      picture: this.pictureControl.value || '',
      translation: {
        pl: this.translationPlControl.value || '',
        de: this.translationDeControl.value || '',
        ua: this.translationUaControl.value || '',
      }
    };
   
    if (this.current?.id) {
       this.dirService.updateWholeDirItem(this.current.id, dirItem).subscribe(()=>{
          this.update.emit();
       });
    } else {
      this.dirService.createDirItem(this.path, dirItem).subscribe(
        ()=>{
          window.console.log(dirItem);
          this.nameControl.setValue('');
          this.update.emit(); 
        }
      )
    }
    
  }

}
