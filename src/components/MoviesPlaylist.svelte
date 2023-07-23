<script>
    import ActivityBar from './ActivityBar.svelte';
    import MovieCard from './MovieCard.svelte';

    export let title;
    export let movies = [];
    export let status = 0;
    export let showFilter = false;
    
    const scrollStep = 200; // Change this value to adjust the scrolling distance
    let containerRef;
    function scrollLeft() {
        containerRef.scrollLeft -= scrollStep;
    }

    function scrollRight() {
        containerRef.scrollLeft += scrollStep;
    }
    
    let filteredMovies = [...movies];
</script>
<h1 class="text-center my-4">{title}</h1>
{#if showFilter && movies.length > 0}
  <ActivityBar bind:filteredMovies {movies}/>
  <div class="d-flex flex-wrap scroll-container" bind:this={containerRef} style="overflow-x: scroll;">
      <div class="d-flex">
      {#each filteredMovies as movie}
          <MovieCard movie={{...movie, status}} />
      {/each}
      </div>
  </div>
{:else}
  <div class="d-flex flex-wrap scroll-container" bind:this={containerRef} style="overflow-x: scroll;">
      <div class="d-flex">
      {#each movies as movie}
          <MovieCard movie={{...movie, status}} />
      {/each}
      </div>
  </div>

{/if}
<div class="d-flex justify-content-center my-3">
    <button class="btn btn-secondary mx-2" on:click={scrollLeft} data-bs-toggle="tooltip" title="Scroll Left"><i class="fa-solid fa-chevron-left"></i></button>
    <button class="btn btn-secondary mx-2" on:click={scrollRight} data-bs-toggle="tooltip" title="Scroll Right"><i class="fa-solid fa-chevron-right"></i></button>
</div>

<style>
  .scroll-container {
    overflow-x: scroll;
    scrollbar-width: none; /* Firefox */
    scroll-behavior: smooth;
  }

  .scroll-container::-webkit-scrollbar {
    display: none; /* Webkit-based browsers (e.g., Chrome, Safari) */
  }
</style>