<script>
  // lib
  import { onMount } from 'svelte';
  import defaultTheme from '../theme';
  
  // stores
  import theme from '@bobthered/svelte-tailwindcss-ui/theme';

  // components
  import { Button, Card, Input } from '@bobthered/svelte-tailwindcss-ui';

  // props ( internal )
  const tw = {
    cardWrapper : {
      backgroundColor: 'bg-blue-300',
      backgroundImage: '',
      gradientColorStops: '',
      maxWidth: 'max-w-[1073px]',
      position:'relative',
      width: 'w-full',
    },
    submitButton: {
      inset: 'top-[4px] right-[4px]',
      position: 'absolute',
    }
  }
  let users = [];

  // props ( dynamic )

  // lifecycle
  onMount(async() => {
    const res = await fetch('https://randomuser.me/api/?results=5');
    const data = await res.json();
    users = data.results;
    theme.update(defaultTheme);
  })
</script>

<svelte:head>
  <title>Call to Action Card - Oct. 10 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center bg-blue-50 p-[1rem] font-normal text-white">
  <!-- card wrapper -->
  <Card tw={tw.cardWrapper}>
    <!-- card -->
    <Card tw={{alignItems: 'items-center', padding: 'px-[1rem] py-[5rem]', space: 'space-y-[1rem] md:space-y-[2rem]'}}>
      <div class="font-bold text-[1.5rem] leading-[1.875rem] text-center lg:text-[2rem] lg:leading-[2.5rem]">Already working together?</div>
      <div class="text-center max-w-[343px]">Log in to your account and connect with your teammates!</div>
      <form on:submit|preventDefault class="relative w-full max-w-[461px]">
        <Input type="email" placeholder="youremail@address.com" />
        <Button tw={tw.submitButton}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66669 16H25.3334" stroke="#3D476D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 21.3333L25.3333 16" stroke="#3D476D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 10.6667L25.3333 16" stroke="#3D476D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Button>
      </form>
    </Card>
    <!-- users -->
    <div class="absolute flex bottom-[-36px] left-1/2 transform -translate-x-1/2 space-x-[1rem]">
      {#each users as user, i}
        <div class="rounded-full bg-white p-[.5rem] shadow-blue-500 {i > 2 ? 'hidden md:block':''}">
          <img src={user.picture.medium} alt={user.email} class="rounded-full w-[72px] h-[72px] max-w-none" />
        </div>
      {/each}
    </div>
  </Card>
</div>