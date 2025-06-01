<script lang="ts">
  import Header from '$lib/components/header.svelte';
  import type { FormEventHandler } from 'svelte/elements';
  let spacingOptions = $state(Array<Array<string>>());

  let inputValue: string = $state('');
  function validateNumericInput(event: Event, currentTarget?: HTMLInputElement) {
    if (!(event instanceof InputEvent)) {
      return; // Ensure the event is an InputEvent
    }
    if (event.data !== null && isNaN(parseInt(event.data))) {
      event.preventDefault(); // Prevent non-numeric input
      currentTarget = event.currentTarget as HTMLInputElement;
      if (currentTarget) {
        currentTarget.value = currentTarget.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      }
    }
  }

  function handleCalculate() {
    inputValue = (inputValue.trim() || '0').replace(/[^0-9]/g, '');
    if (inputValue) {
      const blankSpace = parseInt(inputValue);
      if (!isNaN(blankSpace)) {
        spacingOptions = [];
        let maxDividers = Math.floor(blankSpace / 2);
        if (blankSpace % 2 === 0) {
          // Means odd number of dividers
          maxDividers -= 1;
        }
        for (let dividerCount = 0; dividerCount <= maxDividers; dividerCount += 1) {
          let remainingSpace = blankSpace - dividerCount;
          let partitionCount = dividerCount + 1;
          let partitionSize = remainingSpace / partitionCount;
          if ((remainingSpace / partitionCount) % 1 !== 0) {
            continue; // Skip if the remaining space cannot be evenly divided
          }
          // Ensure partitionSize is an integer
          partitionSize = Math.floor(partitionSize);
          let dividerResults: Array<string> = [];
          let partitionsRemaining = partitionSize;
          for (let spaceIndex = 0; spaceIndex < blankSpace; spaceIndex++) {
            if (partitionsRemaining > 0) {
              dividerResults.push('⬜️');
              partitionsRemaining -= 1;
            } else {
              dividerResults.push('✅');
              partitionsRemaining = partitionSize;
            }
          }
          spacingOptions.push(dividerResults);
        }
      } else {
        console.error('Invalid input, please enter a number.');
      }
    } else {
      console.error('Input is empty, please enter a value.');
    }
    return spacingOptions;
  }
</script>

<Header />
<main
  class="max-w-9/10 container mx-auto grid h-screen w-full scroll-m-10 grid-rows-[auto_1fr_auto]"
>
  <h1 class="h1 w-full text-center">Block Spacing Calculator</h1>
  <div class="w-full max-w-sm">
    Calculate even spacing for any gap. Great for torches, parapets, or columns.
    <div class="mt-4">
      <input
        type="text"
        class="w-full rounded border p-2 text-black"
        placeholder="Enter value"
        oninput={(e) => {
          validateNumericInput(e);
        }}
        bind:value={inputValue}
      />
      <button class="mt-2 rounded bg-blue-500 px-4 py-2 text-white" onclick={handleCalculate}>
        Calculate
      </button>
      {#each spacingOptions as option, index}
        <div class="w-full max-w-sm">
          <div class="mt-2 flex justify-center">
            {#each option as block}
              <span class="text-2xl">{block}</span>
            {/each}
          </div>
          <div class="text-center text-sm text-gray-500">Option {index + 1}</div>
        </div>
      {/each}
    </div>
  </div>
</main>
sh
