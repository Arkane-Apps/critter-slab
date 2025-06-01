<script lang="ts">
  import Header from '../../lib/components/header.svelte';
  import ToolCard from '$lib/components/tool_card.svelte';
</script>

<Header />
<main
  class="max-w-9/10 container mx-auto grid h-screen w-full scroll-m-10 grid-rows-[auto_1fr_auto]"
>
  <h1 class="h1 w-full text-center">Featured Tools</h1>
  <div class="w-full max-w-sm">
    Tools for every occasion
    <ToolCard
      title="Block Spacing Calculator"
      detail="Calculate even spacing for any gap. Great for torches, parapets, or columns."
      extraClass="mt-4"
      href="/tools/block-spacing"
    />
    <ToolCard
      title="Leap Year Calculator"
      detail="Check if any year is a leap year 😎."
      extraClass="mt-4"
      href="/tools/leap-year"
    />
  </div>
</main>
sh
