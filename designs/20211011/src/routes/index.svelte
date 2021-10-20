<script>
  // lib
  import { onMount } from 'svelte';
  import defaultTheme from '../theme';
  
  // stores
  import theme from '@bobthered/svelte-tailwindcss-ui/theme';

  // components
  import { Button, Card, FlexColumn } from '@bobthered/svelte-tailwindcss-ui';

  // props ( internal )
  const tw = {
    button: {
      secondary: {
        backgroundColor: 'bg-purple-100 hover:bg-purple-200 focus:bg-purple-200',
        boxShadow:'',
        padding: 'px-[2rem] py-[.875rem]',
        ringColor: 'ring-purple-200',
        textColor: 'text-purple',
      }
    },
    image: {
      borderRadius: 'rounded-[1rem]',
      boxShadow: 'shadow-purple-500',
      padding: '',
      position: 'relative',
    }
  }

  // props ( dynamic )

  // lifecycle
  onMount(async() => {
    theme.update(defaultTheme);
  })
</script>

<svelte:head>
  <title>Course Card - Oct. 11 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center bg-gray-50 p-[1rem] font-semibold text-gray-900">
  <Card tw={{space:'space-y-[1rem] md:space-y-[2rem]'}}>
    <!-- image -->
    <Card tw={tw.image}>
      <img src="./painting-canvas.png" alt="Painting Canvas" class="w-[287px] h-[180px] rounded" />
      <div class="rounded-full bg-white bg-opacity-[.6] p-[11px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0246 9.91257C15.1924 8.78504 12.8333 10.1032 12.8333 12.2546V31.7454C12.8333 33.8967 15.1924 35.215 17.0246 34.0874L32.8608 24.3421C34.6058 23.2682 34.6058 20.7318 32.8608 19.6579L17.0246 9.91257Z" fill="#6E6BFF" stroke="#EFEFFF" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </Card>
    <!-- price -->
    <FlexColumn>
      <div class="text-gray-500 text-[.875rem] line-through">Kr599</div>
      <div class="flex items-center space-x-[1rem]">
        <div class="font-bold text-[1.375rem]">Kr189</div>
        <div class="rounded-full py-[.125rem] px-[.5rem] text-[.875rem] text-white bg-green">68% off</div>
      </div>
    </FlexColumn>
    <!-- buttons -->
    <FlexColumn tw={{space:'space-y-[.5rem]'}}>
      <Button>Buy now</Button>
      <Button tw={tw.button.secondary}>Add to cart</Button>
      <div class="text-center text-gray-500 text-[.875rem]">30-Day Money-Back Guarantee</div>
    </FlexColumn>
    <!-- includes -->
    <FlexColumn tw={{fontWeight: 'font-bold'}}>
      <div class="uppercase">Includes</div>
      <ul class="list-disc pl-[1rem]">
        <li>3.5 hours on-demand video</li>
        <li>Full lifetime access</li>
        <li>Exercise files</li>
        <li>Access from anywhere</li>
        <li>Certificate on completion</li>
      </ul>
    </FlexColumn>
  </Card>
</div>