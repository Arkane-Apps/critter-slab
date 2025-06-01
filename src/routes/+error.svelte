<script lang="ts">
  import Header from '../lib/components/header.svelte';
  import { page } from '$app/state';

  let errorMsg = 'Error';
  if (page.error !== null) {
    errorMsg = page.error.message;
  }
</script>

<div class="grid h-screen scroll-m-10 grid-rows-[auto_1fr_auto]">
  <Header />
  <main>
    <div class="size-full content-center">
      <h1 class="font-minecraft h1 text-center">{page.status} {errorMsg}</h1>
      <h2 class="h2 text-center">Maybe a creeper blew this up??</h2>
    </div>
  </main>
</div>
