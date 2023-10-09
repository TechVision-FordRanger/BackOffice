import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { FooterComponent } from './footer/footer.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { AppInformationComponent } from './app-information/app-information.component';
import {ModalFilterComponent} from "./app-information/modal-filter/modal-filter.component";
import {ModalModule} from "ngx-bootstrap/modal";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    FooterComponent,
    UserInformationComponent,
    AppInformationComponent,
    ModalFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      ModalModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
