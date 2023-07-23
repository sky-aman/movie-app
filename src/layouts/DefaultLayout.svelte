<!-- DefaultLayout.svelte -->
<script>
  // You can add any Svelte logic here if needed
</script>

<main class="container py-4">
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container">
      <a class="navbar-brand" href="/">Movie App</a>
      <!-- Add your navigation links here -->
    </div>
  </nav>

  <!-- Content -->
  <div class="row">
    <!-- Sidebar (if needed) -->
    <div class="col-lg-3">
      <!-- Add your sidebar content here (e.g., categories, filters, etc.) -->
    </div>

    <!-- Main Content Area -->
    <div class="col-lg-9">
      <!-- This slot will be filled with the content of the specific page using this layout -->
      <slot></slot>
    </div>
  </div>
</main>

<!-- Footer -->
<footer class="bg-light text-center py-3">
  <p>&copy; 2023 Your Movie App. All rights reserved.</p>
</footer>

<style>
  /* Add any custom styles for the layout here */
</style>
