import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { ListAccountsComponent} from './AppOwner/list-accounts/list-accounts.component';
import {AddAccountComponent} from './AppOwner/add-account/add-account.component';
import {AddLocationComponent} from './AccountOwner/ManageLocations/add-location/add-location.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'addLocation', component: AddLocationComponent},
  { path: 'appOwner_list-accounts', component: ListAccountsComponent },
  { path: 'appOwner_add-account', component: AddAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
