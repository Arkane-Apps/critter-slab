<script lang="ts">
  import Header from '../../lib/components/header.svelte';
  import WorldCard from '../../lib/components/world_card.svelte';
</script>

<Header />
<main
  class="max-w-9/10 container mx-auto grid h-screen w-full scroll-m-10 grid-rows-[auto_1fr_auto]"
>
  <h1 class="h1 w-full text-center">Featured World Downloads</h1>
  <div class="mx-auto grid grid-flow-row-dense gap-5 md:grid-cols-2 lg:grid-cols-3">
    {#each [1, 2, 3, 4] as i}
      <div class="w-full max-w-sm">
        <WorldCard />
      </div>
    {/each}
  </div>
</main>
sh
