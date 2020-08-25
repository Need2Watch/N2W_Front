export interface CurrentMovieState {
  movie_id: number;
  title: string;
  poster_url: string;
  rating: number;
  genres: Array<string>;
  overview: string;
  following: boolean;
  watched: boolean;
}

export interface Movie {
  movie_id: number;
  title: string;
  poster_url: string;
  rating: number;
  genres: Array<string>;
  overview: string;
  following: boolean;
  watched: boolean;
}

export interface MoviesState {
  movies: Array<Movie>;
}
