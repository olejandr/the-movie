import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../shared/movies.service";

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.scss']
})
export class MyMovieComponent implements OnInit {

  movie!: any;

  constructor(public moviesService: MoviesService) {
    moviesService.getMovie$(1).subscribe(data => this.movie = data);
   }


  ngOnInit(): void {
  }

}
