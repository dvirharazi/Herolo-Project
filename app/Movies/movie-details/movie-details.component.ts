import { Component, OnInit} from '@angular/core';
import { Movie } from '../../models/Movie';
import { MovieService } from '../movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    movie:Movie;
    movies:Movie[];
    id:number;
    movieForm:FormGroup;
    constructor(private route:ActivatedRoute ,private moviesService:MovieService,
       private modalService: NgbModal) { }
  
 ngOnInit() {
   this.route.params.subscribe(
       (params:Params)=>{
          this.id = +params['id'];
          this.movie = this.moviesService.getOneMovie(this.id);
       }
   )
   this.route.params.subscribe(
    (params:Params)=>{
        this.id = +params['id'];
        this.initForm();
    }
)
 }

onSubmit(){
        this.moviesService.updateMovie(this.id , this.movieForm.value)
        this.modalService.dismissAll("modal.close");
}

private initForm(){
      const movie = this.moviesService.getOneMovie(this.id);
       let movieTitle = movie.Title;
       let movieYear = movie.Year;
       let movieRuntime = movie.Runtime;
       let movieGenre = movie.Genre;
       let movieDirector = movie.Director;
    
    this.movieForm = new FormGroup({
      'Title': new FormControl(movieTitle , [Validators.required , this.forBiddensTitle.bind(this)]),
        'Year': new FormControl(movieYear, Validators.required),
        'Runtime':new FormControl(movieRuntime, Validators.required),
        'Genre': new FormControl(movieGenre , Validators.required),
        'Director': new FormControl(movieDirector , Validators.required),
    })
}
forBiddensTitle(control:FormControl){
        this.movie = this.moviesService.getOneMovie(this.id);
        this.movies = this.moviesService.getMovies();
        for(let i = 0 ; i < this.movies.length; i++){
            if(this.movies[i] !== this.movie){
                if(this.movies[i].Title.toUpperCase() === control.value.trim().toUpperCase() ){
                    return {'alreadyExist':true}
                }
            }
        }
}
closeResult: string;
open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
}