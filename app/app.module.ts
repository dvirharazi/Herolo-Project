import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from "@angular/router";
import { HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { MoviesListComponent } from './Movies/movies-list/movies-list.component';
import { MoviesItemComponent } from './Movies/movies-list/movie-item/movie-item.component';
import { MovieService } from './Movies/movies.service';
import { MovieNewComponent } from './Movies/movie-new/movie-new.component';
import { HeaderComponent } from './header/header.component';
import { MovieDetailsComponent } from './Movies/movie-details/movie-details.component';
import { MoviesComponent } from './Movies/movies/movies.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

    const appRoutes:Route[] = [
        {path:'' , redirectTo:'movies' , pathMatch:'full'},
        {path:'movies' , component:MoviesComponent , children:[
            {path:'new'  , component:MovieNewComponent},
            {path:':id' , component:MovieDetailsComponent},
            {path:':id/edit'  , component:MovieNewComponent}
        ]}

    ];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesItemComponent,
    MovieNewComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
