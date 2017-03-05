import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import {mainRouting} from "./main-routing";
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SearchComponent } from './components/search/search.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "./utils/firebase-config";
import { IframeComponent } from './components/iframe/iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MoviesListComponent,
    SearchComponent,
    IframeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(mainRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
