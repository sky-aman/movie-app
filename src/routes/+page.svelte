<!-- src/routes/__layout.svelte -->
<script>
  import authStore from '../auth.js';
  import LoginPage from '../components/LoginPage.svelte';
  import SignupPage from '../components/SignupPage.svelte';
  import InformationPage from '../components/InformationPage.svelte';
	import AlertProvider from '../components/AlertProvider.svelte';
	import LoaderProvider from '../components/LoaderProvider.svelte';

  let showLogin = 1;
  let toggleBtn;
  // Subscribe to the auth store to get the latest login state
  let isLoggedIn = false;
  authStore.subscribe((state) => {
    isLoggedIn = state.isLoggedIn;
  });

   // Handle logout
  function handleLogout() {
    showLogin = 1;
    authStore.logout();
  }

  function clickToggleBtn() {
    if(getComputedStyle(toggleBtn).display != 'none'){
      toggleBtn.click();
    }
  }
  function displayLogin () {
    if(showLogin != 1) {
      showLogin = 1;
      clickToggleBtn();
    } 
  }
  function hideLogin () {
    if(showLogin == 1){
      showLogin = 0;
      clickToggleBtn();
    }
  }
</script>

<main>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">Movies Todo</a>
      <button bind:this={toggleBtn} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          {#if isLoggedIn}
            <li class="nav-item">
              <!-- Display the logout button -->
              <button class="btn btn-outline-danger" on:click={handleLogout}>Logout</button>
            </li>
          {:else}
            <li class="nav-item">
              <button class="nav-link" class:fw-bold={showLogin == 1} on:click={() => displayLogin()}>Login</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" class:fw-bold={showLogin != 1} on:click={() => hideLogin()}>Signup</button>
            </li>
          {/if}
        </ul>
      </div>
    </div>
  </nav>

  <!-- The actual page content will be rendered here based on isLoggedIn -->
  <LoaderProvider>
    <AlertProvider>
      {#if isLoggedIn}
          <InformationPage />
      {:else}
        {#if showLogin == 1}
          <LoginPage />
        {:else}
          <SignupPage />
        {/if}
      {/if}
    </AlertProvider>
  </LoaderProvider>

  <!-- Footer -->
  <footer>
    <!-- Footer content goes here -->
  </footer>
</main>
