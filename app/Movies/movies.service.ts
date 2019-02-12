import { Injectable } from "@angular/core";
import { Movie } from "../models/Movie";
import { Subject } from "rxjs";

@Injectable()
export class MovieService{
    moviesChanged = new Subject<Movie[]>();

    private movies:Movie[] = [
      new Movie(1 , 'Harry Potter' , '2013' , '143 min' , 'Science Fiction' , 'Alfonso Cuarón Orozco'),
      new Movie(2 , 'Batman' , '2011' , '122 min' , 'Science Fiction' , 'Leslie H. Martinson'),
      new Movie(3 , 'Glass' , '2019' , '145 min' , 'Drama' , 'M. Night Shyamalan'),
      new Movie(4 , 'A Star Is Born' , '2018' , '155 min' , 'Drama' , 'Bradley Cooper'),
      new Movie(5 , 'Alita: Battle Angel' , '2018' , '122 min' , 'Action' , 'Robert Rodriguez'),
      new Movie(6 , 'Vice' , '2018' , '139 min' , 'Biography' , 'Adam McKay')
    ];
    
    public getMovies(){
        return this.movies.slice();
    }
    getOneMovie(id:number){
        return this.movies[id];
    }
    updateMovie( index:number , newMovie:Movie){
        this.movies[index] = newMovie;
        this.moviesChanged.next(this.movies.slice())
    }
    addMovie(movie:Movie){
        movie.Id = this.movies.length+1;
        this.movies.push(movie);
        this.moviesChanged.next(this.movies.slice())
        
    }
}