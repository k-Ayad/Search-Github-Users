import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';

const routes: Routes = [
  {path:'' , component:HomeComponent , title:'Github Users Search'},
  {path:'search' , component:SearchUsersComponent , title:'Github Users Search'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
