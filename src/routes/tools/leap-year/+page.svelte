<script lang="ts">
  import Header from '$lib/components/header.svelte';
  import type { FormEventHandler } from 'svelte/elements';
  let leapYearResult = $state('');

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
      const inputYear = parseInt(inputValue);
      if (!isNaN(inputYear)) {
        if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) {
          leapYearResult = '✅ ' + inputYear + ' is a Leap Year';
        } else {
          leapYearResult = '❌ ' + inputYear + ' is NOT a Leap Year';
        }
      }
    }
    return leapYearResult;
  }
</script>

<Header />
<main
  class="max-w-9/10 container mx-auto grid h-screen w-full scroll-m-10 grid-rows-[auto_1fr_auto]"
>
  <h1 class="h1 w-full text-center">Leap Year Calculator</h1>
  <div class="w-full max-w-sm">
    Calculate if a year is a leap year or not. Enter a year to find out.
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
    </div>
    <div class="mt-4 text-center">
      <p class="text-lg font-bold">{leapYearResult}</p>
    </div>
  </div>
</main>
sh
