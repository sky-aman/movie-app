<!-- InformationPage.svelte -->
<script>
  import { onMount } from 'svelte';
  import authStore from '../auth.js';
	import { fetchMovies } from '../api.js';
  import moviesStore from '../movieStore.js';
  import continueWatchingStore from '../continueWatchingStore.js';
	import MoviesPlaylist from './MoviesPlaylist.svelte';
	import { WATCHING } from '../movieEnum.js';

  let isLoggedIn = false; // default to false;
  let user = null;

  // Subscribe to the store to get the latest login state and user information
  authStore.subscribe((state) => {
    isLoggedIn = state.isLoggedIn;
    user = state.user;
  });
  
  /**
   * Fetch movies from the API and update the store
   */
  const fetchMovieData = async () => {
    if (!isLoggedIn) { // reset to default
        window.location.href = '/';
    } else {
        try {
            const response = await fetchMovies();
            moviesStore.set(response.map(element => {
            element.release_year = element.release_date.split("-")[0];
            element.genre = element.genre_ids;
            element.rating = Math.round(element.vote_average / 2);
            return element;
            }));
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    }
  }
  onMount(() => {
        fetchMovieData();
  });
</script>

<main class="container py-4">
  {#if isLoggedIn || true}
    {#if user}
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
    {/if}
    <!-- Display other user information as needed -->

    {#if $continueWatchingStore.length > 0}
      <div class="my-3">
        <MoviesPlaylist movies={$continueWatchingStore} title="Watchlist" status={WATCHING}/>
      </div>
    {/if}
    {#if $moviesStore.length > 0}
      <div class="my-3">
        <MoviesPlaylist movies={$moviesStore} title="Popular Movies" showFilter={true}/>
      </div>
    {/if}

  {:else}
    <p>Loading...</p>
  {/if}
</main>