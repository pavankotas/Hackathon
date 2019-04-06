import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddLocationComponent} from "./AccountOwner/ManageLocations/add-location/add-location.component";

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'addLocation', component: AddLocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
