import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MovieService } from '../movies.service';
import { Subscription } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit  , OnDestroy{
    movies:Movie[];
    subscription:Subscription

  constructor(private moviesService:MovieService , private router:Router , 
    private route:ActivatedRoute) { }
   
  ngOnInit() {
    this.moviesService.moviesChanged.subscribe(
        (movies:Movie[])=>{
            this.movies = movies;
        })
        this.movies = this.moviesService.getMovies();
  }
  onNewMovie(){
    this.router.navigate(['new'], {relativeTo:this.route})
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}