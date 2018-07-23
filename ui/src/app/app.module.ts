import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Routes, RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {BikeService} from "./services/bike.service";
import {AdminComponent} from './components/admin/admin.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
