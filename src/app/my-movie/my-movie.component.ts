import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../shared/movies.service";

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss']
})
export class MyMovieComponent implements OnInit {

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
  }

}
