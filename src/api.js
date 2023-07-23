// src/tmdb.js
const apiKey = 'c575ebb5d4bc6f279c52d35745175dd4'; // Replace with your TMDb API key

async function fetchMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}

export { fetchMovies };