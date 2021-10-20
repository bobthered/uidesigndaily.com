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
  let percentage = .4;
  const steps = [
    { text: 'Experience contextual conversations', complete: true},
    { text: 'Brand your customer experience', complete: true},
    { text: 'Offer support beyond your website', complete: false},
    { text: 'Top customer support with bots', complete: false},
    { text: 'Build your team', complete: false},
  ]

  // props ( dynamic )
  $: tw = {
    loading: {
      alignItems: 'items-center',
      backgroundColor: 'bg-white',
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
  <title>Onboarding List - Oct. 19 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center bg-gray-50 p-[1rem] text-gray-900 font-semibold">
  <FlexColumn tw={{alignItems: 'items-end', space: 'space-y-[1rem]'}}>
    <Card>
      <!-- top half -->
      <FlexColumn tw={{padding: 'p-[1rem] md:p-[1.5rem] lg:p-[2rem]', space: 'space-y-[1rem]'}}>
        <FlexRow tw={{alignItems: 'items-center', justifyItems: 'justify-between'}}>
          <div class="font-serif font-bold text-[1.5rem]">Take a quick tour</div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L16 20L24 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </FlexRow>
        <div class="max-w-[253px]">Here are a few steps to help you hit the ground.</div>
        <FlexRow tw={{alignItems: 'items-center', space:'space-x-[1rem]'}}>
          <div class="font-serif font-bold text-[1.5rem]">{percentage*100}%</div>
          <div class="rounded-full h-[12px] bg-gray-50 flex-grow p-[2px]">
            <div class="rounded-full h-full bg-gray-900" style="width: {percentage*100}%;" />
          </div>
        </FlexRow>
      </FlexColumn>
      <!-- bottom half -->
      <FlexColumn tw={{alignItems: 'items-start', padding: 'p-[1rem] md:p-[1.5rem] lg:p-[2rem]', space:'space-y-[2rem]'}}>
        <FlexColumn tw={{space:'space-y-[1rem]'}}>
          {#each steps as {text, complete}}
            <div class="flex space-x-[1rem] items-center">
              <div class="rounded-full ring-2 ring-gray-300 w-[2rem] h-[2rem] flex items-center justify-center text-white {complete? 'bg-gray-900' :''}">
                {#if complete}
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.41663 13L10.8333 18.4167L21.6666 7.58333" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                {/if}
              </div>
              <div>{text}</div>
            </div>
          {/each}
        </FlexColumn>
        <a href="/#skip" class="text-gray-900 opacity-[.7] transition duration-200 hover:opacity-1 outline-none ring-2 ring-offset-2 ring-offset-white ring-black ring-opacity-0 focus:ring-opacity-30" on:click|preventDefault>Skip this</a>
      </FlexColumn>
    </Card>
    <div class="flex rounded-full space-x-[1rem] pl-[1.5rem] pr-[.75rem] py-[.75rem] bg-gray-900 text-white">
      <div>Get started</div>
      <div class="rounded-full bg-white text-gray-900 w-[24px] h-[24px] items-center justify-center flex">5</div>
    </div>
  </FlexColumn>
</div>

<!-- loading spinner -->
<div class={Object.values(tw.loading).join(' ')}>
  <Spinner />
</div>