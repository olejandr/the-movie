import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {



  constructor(public http: HttpClient) {}

  getMovies$(): Observable<any> {
    return this.http.get(environment.url_movies);
  }

  // getMovie$(id: string): Observable<Object>{
  //   return this.getMovies$().find(movie => movie.id == id)
  // }

}
