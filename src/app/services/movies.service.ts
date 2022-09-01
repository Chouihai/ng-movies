import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=891a1bade9c6e04e8f64d686f57808df'
    );
  }
}
