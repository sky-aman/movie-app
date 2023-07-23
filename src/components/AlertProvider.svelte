<!-- src/Alert.svelte -->
<script>
    import {  setContext } from 'svelte';
    
    import { onMount, getContext } from 'svelte';
    import { ALERT } from '../movieEnum';

    export let status = 'primary';
    export let message = '';
    export let duration = 3000;

    let visible = false;

    function showAlert(newStatus, newMessage) {
        clearInterval(window.timeoutId || null);
        status = newStatus;
        message = newMessage;
        visible = true;


        window.timeoutId = setTimeout(() => {
          hideAlert();
        }, duration);
    }

    function hideAlert() {
        visible = false;
    }

  // Hide the alert after the specified duration
  onMount(() => {
    setTimeout(() => {
      hideAlert();
    }, duration);
  });

    setContext(ALERT, { showAlert, hideAlert });
</script>

<slot />

<div class="alert alert-{status} bg-{status} fw-bold rounded alert-dismissible text-white" style="bottom: {visible ? '10px' : '-100px'};">
  <div class="d-flex">
      <span>{message}</span>
      <button type="button" class="btn p-0 close text-white" on:click={hideAlert}>
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
  </div>
</div>

<style>
  /* Customize the alert appearance */
  .alert {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 16px;
    border-radius: 4px;
    z-index: 9999;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }

  /* Additional styling for different alert statuses */
  .alert-primary {
    background-color: #007bff;
    color: #fff;
  }

  .alert-warning {
    background-color: #ffc107;
    color: #212529;
  }

  .alert-danger {
    background-color: #dc3545;
    color: #fff;
  }

  /* Close button style */
  .close {
    margin-left: 8px;
    color: #000;
  }
</style>