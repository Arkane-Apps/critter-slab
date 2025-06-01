<script lang="ts">
  import Header from '../lib/components/header.svelte';
  import { Tween } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import { onMount } from 'svelte';
  import { color } from 'three/tsl';

  interface ColorValue {
    red: number;
    green: number;
    blue: number;
  }
  let progressionIndex: number = 0;
  const tweenDuration: number = 1000;
  const colorProgression: Array<ColorValue> = [
    { red: 255, green: 0, blue: 0 },
    { red: 255, green: 154, blue: 0 },
    { red: 208, green: 222, blue: 33 },
    { red: 79, green: 220, blue: 74 },
    { red: 63, green: 218, blue: 216 },
    { red: 47, green: 201, blue: 226 },
    { red: 28, green: 127, blue: 238 },
    { red: 95, green: 21, blue: 242 },
    { red: 186, green: 12, blue: 248 },
    { red: 251, green: 7, blue: 217 },
    { red: 255, green: 0, blue: 0 }
  ];

  interface ColorTweens {
    red: Tween<number>;
    green: Tween<number>;
    blue: Tween<number>;
  }

  let currentColorTween: ColorTweens = {
    red: new Tween(colorProgression[progressionIndex].red, {
      duration: tweenDuration,
      easing: cubicOut
    }),
    green: new Tween(colorProgression[progressionIndex].green, {
      duration: tweenDuration,
      easing: cubicOut
    }),
    blue: new Tween(colorProgression[progressionIndex].blue, {
      duration: tweenDuration,
      easing: cubicOut
    })
  };

  function updateColorTween(tween: ColorTweens) {
    let progTarget = colorProgression[progressionIndex];
    if (
      tween.red.current === progTarget.red &&
      tween.green.current === progTarget.green &&
      tween.blue.current === progTarget.blue
    ) {
      progressionIndex += 1;
      if (progressionIndex >= colorProgression.length) {
        progressionIndex = 0;
      }
      progTarget = colorProgression[progressionIndex];
      tween.red.target = progTarget.red;
      tween.green.target = progTarget.green;
      tween.blue.target = progTarget.blue;
    }
  }

  function colorTweenToHex(tween: ColorTweens): string {
    let hexRed = Math.round(tween.red.current).toString(16).padStart(2, '0');
    let hexGreen = Math.round(tween.green.current).toString(16).padStart(2, '0');
    let hexBlue = Math.round(tween.blue.current).toString(16).padStart(2, '0');
    return `#${hexRed}${hexGreen}${hexBlue}`;
  }

  onMount(() => {
    let frame: number;
    const loop = () => {
      updateColorTween(currentColorTween);
      frame = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<Header />
<main class="max-w-9/10 grid h-screen w-full scroll-m-10 grid-rows-[auto_1fr_auto]">
  <h1 class="h1 text-center">Welcome to TheCraftyCritter's Laboratory</h1>
  <h2 class="h2 text-center">
    A collection of my worlds, mods, and tools for <span
      class="glintText font-minecraft"
      style="color: {colorTweenToHex(currentColorTween)}">Minecraft</span
    > and more!
  </h2>
  <p class="h-[512px] p-4">Paragraph 1</p>
  <p class="h-[512px] p-4">Paragraph 2</p>
  <p class="h-[512px] p-4">Paragraph 3</p>
</main>
