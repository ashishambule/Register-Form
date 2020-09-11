import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppinputDirective } from './directive/appinput.directive';
import { HomeComponent } from './home/home.component';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AppinputDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NgxNavigationWithDataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
