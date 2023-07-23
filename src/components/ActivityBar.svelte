<!-- src/ActivityBar.svelte -->
<script>
  export let movies;
  export let filteredMovies = [];

  let searchTerm = '';
  let selectedYear = '';
  let selectedGenre = '';
  let selectedRating = '';

  // Extract available years, genres, and ratings from the movieStore
  let years = [...new Set(movies.map(movie => movie.release_year))];
  let genres = [...new Set(movies.reduce((genres, movie) => [...genres, ...movie.genre], []))];
  let ratings = [...new Set(movies.map(movie => movie.rating))];

  // Function to filter movies based on the selected filters
  function applyFilters() {
    // Filter movies based on the selected filters
    filteredMovies = movies.filter(movie =>
      (!selectedYear || movie.release_year === selectedYear) &&
      (!selectedGenre || movie.genre.includes(selectedGenre) ) &&
      (!selectedRating || movie.rating >= selectedRating) && 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

</script>

<div class="activity-bar p-3 mb-3">
  <!-- Search input -->
  <div class="d-flex justify-content-center align-items-end">
    <div class="mx-1">
        <input type="text" class="form-control me-2" placeholder="Search movies..." bind:value={searchTerm} on:input={applyFilters}>
    </div>
    <div class="mx-1">
        <label for="yearFilter" class="form-label">Year</label>
        <select id="yearFilter" class="form-select" bind:value={selectedYear} on:change={applyFilters}>
        <option value="">All Years</option>
        {#each years as year}
            <option value={year}>{year}</option>
        {/each}
        </select>
    </div>

    <!-- Genre filter -->
    <div class="mx-1">
        <label for="genreFilter" class="form-label">Genre</label>
        <select id="genreFilter" class="form-select" bind:value={selectedGenre} on:change={applyFilters}>
        <option value="">All Genres</option>
        {#each genres as genre}
            <option value={genre}>{genre}</option>
        {/each}
        </select>
    </div>

    <!-- Rating filter -->
    <div class="mx-1">
        <label for="ratingFilter" class="form-label">Minimum Rating</label>
        <select id="ratingFilter" class="form-select" bind:value={selectedRating} on:change={applyFilters}>
        <option value="">All Ratings</option>
        {#each ratings as rating}
            <option value={rating}>{rating}</option>
        {/each}
        </select>
    </div>
  </div>

</div>