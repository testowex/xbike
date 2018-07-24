import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {BikeService} from "./services/bike.service";
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {ViewRegistrationComponent} from './components/view-registration/view-registration.component';
import {CallbackComponent} from './components/callback/callback.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'admin/view/:id',
  component: ViewRegistrationComponent,
  canActivate: [AuthGuard]
}, {
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard]
}, {
  path: 'callback',
  component: CallbackComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CallbackComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BikeService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
