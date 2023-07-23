<!-- src/Alert.svelte -->
<script>
    import {  setContext, onMount } from 'svelte';
    import {  LOADER } from '../movieEnum';

    $: visible = false;

    function showLoader() {
        visible = true;
    }

    function hideLoader() {
        visible = false;
    }

    setContext(LOADER, { showLoader, hideLoader });
</script>

<slot />
{#if visible}
    <div class="d-flex justify-content-center align-items-center position-fixed">
    <i class="fas fa-spinner fa-pulse fa-3x"></i>
    </div>
{/if}

<style>
  /* Customize the loader appearance */
  .d-flex {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0, 0.3);
  }
</style>