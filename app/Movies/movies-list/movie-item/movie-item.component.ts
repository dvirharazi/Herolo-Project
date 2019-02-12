import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/Movie';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MoviesItemComponent implements OnInit {
    @Input() movie:Movie;
    @Input() index:number;
  constructor() { }

  ngOnInit() {}
}
