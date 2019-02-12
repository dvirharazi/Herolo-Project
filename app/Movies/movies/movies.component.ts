import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    movies:Movie[];
  constructor() { }

  ngOnInit() {
  }

}
