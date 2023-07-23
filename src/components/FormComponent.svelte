<script>
    export let title;

</script>

<main class="container py-4">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title mb-4">{title}</h2>
          <slot />
        </div>
      </div>
    </div>
  </div>
</main>