import { Injectable } from '@angular/core';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

	private moviesUrl = 'http://localhost:8000/movies';

	getMovies(): Observable<Movie[]> {
	  return this.http.get<Movie[]>(this.moviesUrl)
	}

  constructor(
    private http: HttpClient) { }
}
