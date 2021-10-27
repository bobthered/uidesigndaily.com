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
  const events = [
    { backgroundColor: 'bg-blue-50', date: 'Today', time: '17:00', title: 'Bergen International Film Festival', description: 'Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.' },
    { backgroundColor: 'bg-pink-50', date: '22 - 31 Oct', time: '10:00', title: 'Wool week', description: 'ULLVEKA 2021 will be held for the eighth time in the period 22 - 31 October 2021, and will take place in the entire Bergen region.' },
    { backgroundColor: 'bg-red-50', date: '22 - 31 Oct', time: '19:00', title: 'Light park at Bergenhus Fortress', description: 'LUMAGICA - a magical experience for young and old at Bergenhus Fortress, 12 November to 19 December 2021.' },
    { backgroundColor: 'bg-green-50', date: '13 - 31 Dec', time: '10:00', title: 'Gingerbread City 2021', description: 'The world\'s largest Gingerbread Town can be found in the Xhibition shopping center, right in the center of Bergen' },
  ]
  let loaded = false;

  // props ( dynamic )
  $: tw = {
    loading: {
      alignItems: 'items-center',
      backgroundColor: 'bg-blue-50',
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
  <title>Events List - Oct. 26 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center p-[1rem] bg-blue-50 text-blue-900">
  <FlexColumn tw={{maxWidth:'max-w-[1047px]', space:'space-y-[1rem]'}}>
    <div class="font-serif text-[1.5rem]">Events</div>
    {#each events as { backgroundColor, date, time, title, description}}
      <Card>
        <div class="{backgroundColor} p-[1rem] md:p-[1.5rem] lg:p-[2rem] flex flex-col items-center rounded md:rounded-[.5rem] lg:rounded-[1rem] min-w-[120px]">
          <div class="uppercase mulish font-bold whitespace-nowrap">{date}</div>
          <div class="font-serif text-[1.5rem] font-bold">{time}</div>
        </div>
        <FlexColumn tw={{space:'space-y-[1rem]'}}>
          <div class="font-serif text-[1.5rem] font-black">{title}</div>
          <div class="text-black">{description}</div>
        </FlexColumn>
        <Button>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4.58333V17.4167" stroke="currentColor" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.58325 11H17.4166" stroke="currentColor" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="whitespace-nowrap">Add to calendar</div>
        </Button>
      </Card>
    {/each}
  </FlexColumn>
</div>

<!-- loading spinner -->
<div class={Object.values(tw.loading).join(' ')}>
  <Spinner />
</div>