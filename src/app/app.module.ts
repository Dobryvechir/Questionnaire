import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirContainerComponent } from './dir-container/dir-container.component';
import { DirItemComponent } from './dir-container/dir-item/dir-item.component';
import { HttpClientModule } from '@angular/common/http';
import { DirCreateComponent } from './dir-container/dir-create/dir-create.component';
import { DirDialogComponent } from './dir-container/dir-item/dir-dialog/dir-dialog.component';
import { AddDirDialogComponent } from './dir-container/dir-item/add-dir-dialog/add-dir-dialog.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DirContainerComponent,
    DirItemComponent,
    DirCreateComponent,
    DirDialogComponent,
    AddDirDialogComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
