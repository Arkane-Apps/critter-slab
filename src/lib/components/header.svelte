<script lang="ts">
  interface NavLink {
    linkText: string;
    linkUrl: string;
  }

  const navLinks: Array<NavLink> = [
    { linkUrl: '/', linkText: 'Home' },
    { linkUrl: '/worlds', linkText: 'World Downloads' },
    { linkUrl: '/mods', linkText: 'Java Mods' },
    { linkUrl: '/addons', linkText: 'Bedrock Add Ons' },
    { linkUrl: '/modpacks', linkText: 'Modpacks' },
    { linkUrl: '/tools', linkText: 'Minecraft Tools' }
  ];
</script>

<header class="sticky top-0 z-10 flex w-full p-4 backdrop-blur-sm preset-filled-primary-500">
  <span id="headerTitle" class="flex font-minecraft type-scale-8">CrittersLab</span>
  <ul class="0 mx-10 flex grow space-x-2">
    {#each navLinks as navLink}
      <li class="flex-1 content-center items-center justify-center p-2 text-center font-minecraft">
        <a href={navLink.linkUrl} class="m-auto">{navLink.linkText}</a>
      </li>
    {/each}
  </ul>
  <div class="flex-1"></div>
</header>
