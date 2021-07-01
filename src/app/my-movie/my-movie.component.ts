import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../shared/movies.service";

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss']
})
export class MyMovieComponent implements OnInit {

  movie!: any;
  movieId!: any;

  constructor(public moviesService: MoviesService, private activatedRoute: ActivatedRoute, private router: Router,) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieId = params['id'];
      this.moviesService.getMovie$(this.movieId).subscribe(data => this.movie = data);
    });
  }

}
