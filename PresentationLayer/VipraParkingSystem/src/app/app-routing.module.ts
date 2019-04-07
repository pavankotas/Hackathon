import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { ListAccountsComponent} from "./AppOwner/list-accounts/list-accounts.component";
import {AddAccountComponent} from "./AppOwner/add-account/add-account.component";
import {AddLocationComponent} from "./AccountOwner/ManageLocations/add-location/add-location.component";
import {ListLocationComponent} from "./AccountOwner/ManageLocations/list-location/list-location.component";
import {ListUsersComponent} from "./AccountOwner/ManageUsers/list-users/list-users.component";
import {AddUserComponent} from "./AccountOwner/ManageUsers/add-user/add-user.component";
import { AddPermitComponent} from "./AccountOwner/ManagePermits/add-permit/add-permit.component";
import { ListPermitsComponent} from "./AccountOwner/ManagePermits/list-permits/list-permits.component";
import { OpenTicketsComponent} from "./AccountOwner/ManageTickets/open-tickets/open-tickets.component";
import { HistoryTicketsComponent} from "./AccountOwner/ManageTickets/history-tickets/history-tickets.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./AccountOwner/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'addLocation', component: AddLocationComponent},
  { path: 'listLocations', component: ListLocationComponent},
  { path: 'listAcounts', component:ListAccountsComponent},
  { path: 'addAccount', component:AddAccountComponent },
  { path: 'addUsers', component:AddUserComponent },
  { path: 'viewAllUsers', component:ListUsersComponent },
  { path: 'addPermit', component:AddPermitComponent },
  { path: 'viewAllPermits', component:ListPermitsComponent },
  { path: 'viewAlltickets', component:OpenTicketsComponent },
  { path: 'ticketHistory', component:HistoryTicketsComponent },
  { path: 'registerUser', component:RegisterComponent },
  { path: 'dashboard', component:DashboardComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
