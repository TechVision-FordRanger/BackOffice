import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationComponent } from './user-information/user-information.component';
import { AppInformationComponent } from './app-information/app-information.component';

const routes: Routes = [
  { path: '', component: UserInformationComponent },
  { path: 'app-information', component: AppInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
