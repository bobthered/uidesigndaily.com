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

  // props ( dynamic )
  $: tw = {
    loading: {
      alignItems: 'items-center',
      backgroundColor: 'bg-gray-900',
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
  <title>Card - Oct. 24 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center p-[1rem] bg-gray-900">
  <FlexColumn tw={{flexGrow: 'flex-grow', maxWidth: 'max-w-[1000px]', space:'space-y-[1rem] lg:space-y-[2rem]'}}>
    <!-- bread crumbs -->
    <FlexRow tw={{alignItems: 'items-center', space:'space-x-[.5rem]'}}>
      <a on:click|preventDefault href="#home" class="text-pink hover:text-pink-600 duration-200 transition">Home</a>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5L12.5 10L7.5 15" stroke="#FF529B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <a on:click|preventDefault href="#apps" class="text-pink hover:text-pink-600 duration-200 transition">Apps</a>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5L12.5 10L7.5 15" stroke="#FF529B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <div class="text-gray-300">Lighthouse</div>
    </FlexRow>
    <!-- card -->
    <Card>
      <FlexRow tw={{alignItems: 'items-center', space:'space-x-[1rem]'}}>
        <img src="./logo.png" alt="Logo" class="w-[85px] h-[85px" />
        <FlexColumn tw={{space: 'space-y-[.5rem]', textColor: 'text-gray-300'}}>
          <div class="font-serif font-black text-[1.5rem]">Lighthouse</div>
          <div>By <a href="#developer-tools" class="text-pink hover:text-pink-600 duration-200 transition" on:click|preventDefault>Developer Tools</a></div>
        </FlexColumn>
      </FlexRow>
      <FlexColumn tw={{alignItems: 'items-center', space:'space-y-[1rem]'}}>
        <Button>Download now</Button>
        <div class="rounded-full py-[.5rem] px-[1rem] bg-gray-900 text-white flex space-x-[1rem] items-center">
          <svg width="95" height="17" viewBox="0 0 95 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.79851 0.701477L10.1775 5.22555L15.2153 6.09011L11.6478 9.75071L12.3824 14.8091L7.79851 12.5474L3.21466 14.8091L3.94918 9.75071L0.381686 6.09011L5.41949 5.22555L7.79851 0.701477Z" fill="#ECC86B"/>
            <path d="M27.6492 0.701477L30.0282 5.22555L35.066 6.09011L31.4985 9.75071L32.2331 14.8091L27.6492 12.5474L23.0654 14.8091L23.7999 9.75071L20.2324 6.09011L25.2702 5.22555L27.6492 0.701477Z" fill="#ECC86B"/>
            <path d="M67.3508 0.701477L69.7298 5.22555L74.7676 6.09011L71.2001 9.75071L71.9346 14.8091L67.3508 12.5474L62.7669 14.8091L63.5014 9.75071L59.9339 6.09011L64.9717 5.22555L67.3508 0.701477Z" fill="#ECC86B"/>
            <path d="M47.5 0.701477L49.8791 5.22555L54.9169 6.09011L51.3494 9.75071L52.0839 14.8091L47.5 12.5474L42.9162 14.8091L43.6507 9.75071L40.0832 6.09011L45.121 5.22555L47.5 0.701477Z" fill="#ECC86B"/>
            <path d="M87.2015 0.701477L89.5805 5.22555L94.6183 6.09011L91.0508 9.75071L91.7853 14.8091L87.2015 12.5474L82.6176 14.8091L83.3521 9.75071L79.7846 6.09011L84.8224 5.22555L87.2015 0.701477Z" fill="#ECC86B"/>
          </svg>
          <div>279</div>
        </div>
      </FlexColumn>
    </Card>
  </FlexColumn>
</div>

<!-- loading spinner -->
<div class={Object.values(tw.loading).join(' ')}>
  <Spinner />
</div>