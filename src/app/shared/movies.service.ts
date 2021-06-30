import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { find } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(public http: HttpClient) {}

  getMovies$(): Observable<any> {
    return this.http.get(environment.url_movies);
  }

  // getMovie$(id: number): Observable<Object>{
  //   return this.getMovies$().find(data => data.movie.id == id)
  // }

}
