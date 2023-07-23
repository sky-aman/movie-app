<!-- src/Popover.svelte -->
<script>
	import { WATCHING } from '../movieEnum';

    export let content;
    export let addToWatchlist;
    export let removeFromWatchlist;
    export let status;

</script>

<div class="popover-content">
  {#if content}
    <div class="popover-content-inner">
      <div class="popover-text">{content}</div>
      <div class="text-center">
        {#if status === WATCHING}
          <button class="btn btn-primary mt-2" on:click={removeFromWatchlist}>
              <i class="fas fa-minus"></i> Remove
          </button>
        {:else}
            <button class="btn btn-warning mt-2" on:click={addToWatchlist}>
                <i class="fas fa-plus"></i> Add to Watchlist
            </button>
        {/if}
      </div>
    </div>
  {/if}
  <slot />
</div>

<style>
  /* Customize the popover styles to your liking */
  .popover-content {
    position: relative;
  }

  .popover-content-inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px;
    border-radius: 4px;
    z-index: 999;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  .popover-content:hover .popover-content-inner {
    opacity: 1;
    pointer-events: auto;
  }

  .popover-text {
    font-size: 14px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

</style>
