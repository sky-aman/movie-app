<!-- src/MovieCard.svelte -->
<script>
    import { getContext } from 'svelte';
	import continueWatchingStore from '../continueWatchingStore';
    import Popover from './Popover.svelte';
    import StarRating from './StarRating.svelte';
	import { ALERT,SUCCESS,WARNING } from '../movieEnum';
    
    const { showAlert } = getContext(ALERT);
    
    export let movie;

    function addToWatchlist() {
        if (!$continueWatchingStore.find((item) => item.id === movie.id)) {
            continueWatchingStore.update(watchingList => [...watchingList, movie]);
            showAlert(SUCCESS, "Movie added in watchlist.");
        } else {
            showAlert(WARNING, "Movie already present in watchlist.");
        }
    }

    function removeFromWatchlist() {
        continueWatchingStore.update(watchingList => watchingList.filter(item => item.id !== movie.id));
        showAlert(SUCCESS, "Movie removed from watchlist.");
    }

</script>

<div class="card me-3" style="width: 12rem;">
    <Popover content={movie.overview} status={movie.status} {addToWatchlist} {removeFromWatchlist}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="card-img-top" alt={movie.title}>
        <div class="card-body">
            <StarRating rating={movie.rating} />
            <h5 class="card-title">{movie.title}</h5>
        </div>
    </Popover>
</div>