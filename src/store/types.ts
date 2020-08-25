export interface User {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  user_id: string;
  country: string;
  city: string;
  profile_picture: string;
}

export interface LoggedUserState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  userId: string;
  country: string;
  city: string;
  profilePicture: string;
}

export interface MoviesState {
  movies: Array<Movie>;
}

export interface Movie {
  following: boolean;
  watched: boolean;
}

export interface CurrentMovieState {
  currentMovie: {
    following: boolean;
    watched: boolean;
  };
}
