import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BusOperatorComponent } from './bus-operator/bus-operator.component';
import { ListbusComponent } from './listbus/listbus.component';
import { EditbusComponent } from './editbus/editbus.component';
import { EdituserComponent } from './edituser/edituser.component';
import { TicketbookComponent } from './ticketbook/ticketbook.component';
import { ViewticketComponent } from './viewticket/viewticket.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    BusOperatorComponent,
    ListbusComponent,
    EditbusComponent,
    EdituserComponent,
    TicketbookComponent,
    ViewticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
