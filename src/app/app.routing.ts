import { Routes } from "@angular/router";
import { DirContainerComponent } from "./dir-container/dir-container.component";


export const appRoutes: Routes = [
    { path: 'dir', component: DirContainerComponent, pathMatch: 'prefix' },
    { path: 'dir/:path1', component: DirContainerComponent },
    { path: 'dir/:path1/:path2', component: DirContainerComponent },
    { path: 'dir/:path1/:path2/:path3', component: DirContainerComponent },
    { path: 'dir/:path1/:path2/:path3/:path4', component: DirContainerComponent },
    { path: 'dir/:path1/:path2/:path3/:path4/:path5', component: DirContainerComponent },
    { path: 'dir/:path1/:path2/:path3/:path4/:path5/:path6', component: DirContainerComponent },
    { path: 'dir/:path1/:path2/:path3/:path4/:path5/:path6/:path7', component: DirContainerComponent },
    { path: 'dir/:path1/:path2/:path3/:path4/:path5/:path6/:path7/:path8', component: DirContainerComponent },
    { path: 'dir/:path1/:path2/:path3/:path4/:path5/:path6/:path7/:path8/:path9', component: DirContainerComponent },
    { path: 'dir/:path1/:path2/:path3/:path4/:path5/:path6/:path7/:path8/:path9/:path10', component: DirContainerComponent },
    { path: 'dir/:path1/:path2/:path3/:path4/:path5/:path6/:path7/:path8/:path9/:path10/:path11', component: DirContainerComponent },
    { path: 'dir/:path1/:path2/:path3/:path4/:path5/:path6/:path7/:path8/:path9/:path10/:path11/:path12', component: DirContainerComponent },
    { path: '',   redirectTo: '/dir', pathMatch: 'full' }
  ];
  