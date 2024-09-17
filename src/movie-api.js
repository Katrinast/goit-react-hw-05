import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3"




const options = { headers: {
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTdkZjQxZDgzYTZkN2MyZmQ1ZDg0YTdjODJlOTdhMyIsIm5iZiI6MTcyNjMzODkzOS42NDQwNzgsInN1YiI6IjY2ZTVjNzM2Mzc2OGE3M2Y4ZDkwZmEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EvoRsfqlvyPJ9nB_6yB72lWdZmJqcRCs7jy8_JRlld4'
}
};

export const getMovies = async () => {
  
  const response = await axios.get(
    "/trending/movie/day?language=en-US", options
  );
  
  return response.data.results;
  
}

export const getSearchMovie = async (value) => {
  const response = await axios.get(
    `/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data.results;
};

export const getMovieById = async (id) => {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);

  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await axios.get(
    `/movie/${id}/credits?language=en-US'`,
    options
  );

  return response.data;
};

export const getMovieReviews = async (id) => {
  const response = await axios.get(
    `/movie/${id}/reviews?language=en-US'`,
    options
  );

  return response.data.results;
};
