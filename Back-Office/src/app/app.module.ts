import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { FooterComponent } from './footer/footer.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { AppInformationComponent } from './app-information/app-information.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    FooterComponent,
    UserInformationComponent,
    AppInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
