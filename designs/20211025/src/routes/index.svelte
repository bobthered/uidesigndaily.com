<script>
  // lib
  import { onMount } from 'svelte';
  import defaultTheme from '../theme';
  
  // stores
  import theme from '@bobthered/svelte-tailwindcss-ui/theme';
  theme.update(defaultTheme);

  // components
  import { Button, Card, FlexColumn, Spinner } from '@bobthered/svelte-tailwindcss-ui';

  // props ( internal )
  let loaded = false;

  // props ( dynamic )
  $: tw = {
    loading: {
      alignItems: 'items-center',
      backgroundColor: 'bg-gray-100',
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
  <title>Cards - Oct. 25 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center p-[1rem] bg-gray-100 font-semibold text-gray-900">
  <div class="flex flex-col space-y-[1rem] lg:flex-row lg:space-y-0 lg:space-x-[2rem]">
    <Card tw={{ringColor: 'ring-pink'}}>
      <FlexColumn tw={{alignItems: 'items-center', space: 'space-y-[1rem]'}}>
        <div class="p-[10px] rounded-full bg-pink">
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 9H18C16.7574 9 15.75 10.0074 15.75 11.25V42.75C15.75 43.9926 16.7574 45 18 45H36C37.2426 45 38.25 43.9926 38.25 42.75V11.25C38.25 10.0074 37.2426 9 36 9Z" stroke="white" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.75 11.25H29.25" stroke="white" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M27 38.25V38.2717" stroke="white" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="text-center font-bold font-serif text-[1.5rem] max-w-[274px]">My Page for mobile and broadband</div>
        <div class="text-center h-[72px] max-w-[274px]">Overview of your mobile services. See consumption and invoice, buy data and add services.</div>
        <Button>Sign In</Button>
      </FlexColumn>
    </Card>
    <Card tw={{ringColor: 'ring-blue'}}>
      <FlexColumn tw={{alignItems: 'items-center', space: 'space-y-[1rem]'}}>
        <div class="p-[10px] rounded-full bg-blue">
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.75 15.75H11.25C8.76472 15.75 6.75 17.7647 6.75 20.25V40.5C6.75 42.9853 8.76472 45 11.25 45H42.75C45.2353 45 47.25 42.9853 47.25 40.5V20.25C47.25 17.7647 45.2353 15.75 42.75 15.75Z" stroke="white" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M36 6.75L27 15.75L18 6.75" stroke="white" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="text-center font-bold font-serif text-[1.5rem] max-w-[274px]">My Page for TV and  broadband</div>
        <div class="text-center h-[72px] max-w-[274px]">Overview of your TV and broadband services. </div>
        <Button tw={{backgroundColor: 'bg-blue-100 hover:bg-blue-200', ringColor: 'ring-blue', textColor: 'text-blue-700'}}>Sign In</Button>
      </FlexColumn>
    </Card>
  </div>
</div>

<!-- loading spinner -->
<div class={Object.values(tw.loading).join(' ')}>
  <Spinner />
</div>