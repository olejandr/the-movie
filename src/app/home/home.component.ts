import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../shared/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies!: any;


  constructor(public moviesService: MoviesService) {
    moviesService.getMovies$().subscribe(data => this.movies = data);


  }

  ngOnInit(): void {
  }

}

