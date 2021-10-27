<script>
  // lib
  import { onMount } from 'svelte';
  import defaultTheme from '../theme';
  
  // stores
  import theme from '@bobthered/svelte-tailwindcss-ui/theme';
  theme.update(defaultTheme);

  // components
  import { Button, Card, FlexColumn, FlexRow, Spinner } from '@bobthered/svelte-tailwindcss-ui';

  // props ( internal )
  let loaded = false;
  const popularList = [
    'Popular', 'Machine learning', 'Containers', 'Compute'
  ]

  // props ( dynamic )
  $: tw = {
    loading: {
      alignItems: 'items-center',
      backgroundColor: 'bg-gray-700',
      duration: 'duration-1000',
      flex: 'flex',
      justifyItems: 'justify-center',
      height: 'h-screen',
      inset: 'top-0 left-0',
      opacity: loaded ? 'opacity-0' : 'opacity-1',
      pointerEvents: loaded ? 'pointer-events-none' : 'pointer-events-auto',
      position: 'fixed',
      transform: 'transform',
      transtion: 'transition',
      scale: loaded ? 'scale-[1.1]' : 'scale-[1]',
      width: 'w-screen',      
    }
  }

  // lifecycle
  onMount(async() => {
    theme.update(defaultTheme);
    loaded = true;
  })
</script>

<svelte:head>
  <title>Dark Mode UI Components - Oct. 4 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center p-[1rem] bg-gray-700 text-white">
  <div class="flex flex-col space-y-[4rem] md:space-y-0 items-center md:grid md:grid-cols-2 md:gap-x-[8rem] md:gap-y-[8rem]">
    <!-- popular list -->
    <div class="flex flex-col w-full space-y-[4px]">
      {#each popularList as text, i}
        <a on:click|preventDefault href="#{text.replace(/\s/g, '-').toLowerCase()}" class="duration-200 transition ring ring-white ring-opacity-0 focus:ring-opacity-[.3] outline-none text-white px-[1.5rem] py-[1rem] relative rounded {i !== 2 ? '' : 'bg-gray-600 shadow-gray-900'}">
          {text}
          {#if i === 2}
            <div class="absolute top-[10%] left-[10px] w-[3px] h-[80%] bg-yellow rounded-full" />
          {/if}
        </a>
      {/each}
      <a on:click|preventDefault href="#see-all-products" class="duration-200 transition ring ring-blue ring-opacity-0 focus:ring-opacity-[.3] outline-none text-blue flex space-x-[.5rem] items-center px-[1.5rem] py-[1rem] rounded">
        <div>See all products</div>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.25 5.5L13.75 11L8.25 16.5" stroke="#4378FF" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
    <!-- card -->
    <div class="justify-center">
      <Card tw={{alignItems: 'items-center', padding: 'px-[1rem] md:px-[1.5rem] lg:px-[2rem] py-[2rem] md:py-[3rem] lg:py-[4rem]', space: 'space-y-[2rem]'}}>
        <div class="text-center text-[1.25rem] font-bold">App Services</div>
        <div class="text-center max-w-[212px]">Build, deploy, and scale web apps on a fully managed platform,</div>
        <Button>View services</Button>
      </Card>
    </div>
    <!-- popular -->
    <FlexColumn tw={{gridColumn: 'md:col-span-2', space:'space-y-[2rem]'}}>
      <!-- top -->
      <FlexColumn>
        <div class="font-semibold text-[1.5rem]">Popular</div>
        <div class="text-[1.2rem]">Explore some of the most popular products</div>
      </FlexColumn>
      <div class="flex flex-col space-y-[1rem] md:flex-row md:space-y-0 md:space-x-[1rem]">
        <Card tw={{space: 'space-y-[1rem]'}}>
          <div class="font-bold underline text-[1.25rem]">Virtual Machines</div>
          <div class="max-w-[278px]">Provision Windows and Linkux in seconds</div>
        </Card>
        <Card tw={{backgroundColor: '', boxShadow: '',space: 'space-y-[1rem]'}}>
          <div class="font-bold text-[1.25rem]">Virtual Desktop</div>
          <div class="max-w-[278px]">Enable a secure, remote desktop experience from anywhere.</div>
        </Card>
      </div>
    </FlexColumn>
  </div>
</div>

<!-- loading spinner -->
<div class={Object.values(tw.loading).join(' ')}>
  <Spinner />
</div>