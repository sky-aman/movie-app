<script>
  export let rating = 0;
</script>

{#each [1, 2, 3, 4, 5] as star}
    <i class="fa-solid fa-star" style="color: {rating >= star ? '#ffc107' : '#e4e5e9'}"></i>
{/each}

<style>
  /* Customize the appearance of the star icons */
  .bi-star-fill {
    font-size: 1.2rem;
  }
</style>