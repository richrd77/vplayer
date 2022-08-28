import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderDetailsComponent } from './components/common/folder-details/folder-details.component';
import { HomeComponent } from './components/common/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'details/:folder', component: FolderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
