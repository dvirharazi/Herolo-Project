import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movies.service';
import { Movie } from '../../models/Movie';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {
    movies:Movie[];
    movie:Movie;
    movieForm:FormGroup
  constructor(private route:ActivatedRoute ,private moviesService:MovieService,
     private modalService: NgbModal) { }

  ngOnInit() {
    this.initForm();
  }
  onSubmit(){
          this.moviesService.addMovie(this.movieForm.value)
          this.modalService.dismissAll("modal.close");
  }

  private initForm(){
      let movieTitle = '';
      let movieYear = '';
      let movieRuntime = '';
      let movieGenre = '';
      let movieDirector = '';
      
      this.movieForm = new FormGroup({
        'Title': new FormControl(movieTitle , [Validators.required , this.forBiddensTitle.bind(this)]),
          'Year': new FormControl(movieYear, Validators.required),
          'Runtime':new FormControl(movieRuntime, Validators.required),
          'Genre': new FormControl(movieGenre , Validators.required),
          'Director': new FormControl(movieDirector , Validators.required),
      })
  }
  forBiddensTitle(control:FormControl){
        this.movies = this.moviesService.getMovies();
        for(let movie of this.movies ){
            if(movie.Title.toUpperCase() === control.value.trim().toUpperCase() ){
                return {'alreadyExist':true}
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

