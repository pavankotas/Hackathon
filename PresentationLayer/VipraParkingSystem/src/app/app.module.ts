import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import { ListAccountsComponent } from './AppOwner/list-accounts/list-accounts.component';
import { AddAccountComponent } from './AppOwner/add-account/add-account.component';
import { DashboardComponent } from './AccountOwner/dashboard/dashboard.component';
import { AddUserComponent } from './AccountOwner/ManageUsers/add-user/add-user.component';
import { ListUsersComponent } from './AccountOwner/ManageUsers/list-users/list-users.component';
import { AddLocationComponent } from './AccountOwner/ManageLocations/add-location/add-location.component';
import { ListLocationComponent } from './AccountOwner/ManageLocations/list-location/list-location.component';
import { AddPermitComponent } from './AccountOwner/ManagePermits/add-permit/add-permit.component';
import { ListPermitsComponent } from './AccountOwner/ManagePermits/list-permits/list-permits.component';
import { OpenTicketsComponent } from './AccountOwner/ManageTickets/open-tickets/open-tickets.component';
import { HistoryTicketsComponent } from './AccountOwner/ManageTickets/history-tickets/history-tickets.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListAccountsComponent,
    AddAccountComponent,
    DashboardComponent,
    AddUserComponent,
    ListUsersComponent,
    AddLocationComponent,
    ListLocationComponent,
    AddPermitComponent,
    ListPermitsComponent,
    OpenTicketsComponent,
    HistoryTicketsComponent,
    NavbarComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBdNOvbKOsJNJFy3eni6DSl0t7JeJAd6Wo',
      libraries: ['places', 'drawing', 'geometry']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
