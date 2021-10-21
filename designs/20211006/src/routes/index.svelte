<script>
  // lib
  // import { slideHorizontal } from '@bobthered/svelte-tailwindcss-ui/transitions';
  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';
  import defaultTheme from '../theme';

  // stores
  import theme from '@bobthered/svelte-tailwindcss-ui/theme';
  theme.update(defaultTheme);

  // components
  import { Button, Card, FlexColumn, FlexRow, Spinner } from '@bobthered/svelte-tailwindcss-ui';

  // props ( internal )
  const likeAndComment = [
    { 
      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33333 14.6667V25.3333C9.33333 25.687 9.19286 26.0261 8.94281 26.2761C8.69276 26.5262 8.35362 26.6667 8 26.6667H5.33333C4.97971 26.6667 4.64057 26.5262 4.39052 26.2761C4.14048 26.0261 4 25.687 4 25.3333V16C4 15.6464 4.14048 15.3072 4.39052 15.0572C4.64057 14.8071 4.97971 14.6667 5.33333 14.6667H9.33333ZM9.33333 14.6667C10.7478 14.6667 12.1044 14.1048 13.1046 13.1046C14.1048 12.1044 14.6667 10.7478 14.6667 9.33334V8C14.6667 7.29276 14.9476 6.61448 15.4477 6.11438C15.9478 5.61429 16.6261 5.33334 17.3333 5.33334C18.0406 5.33334 18.7189 5.61429 19.219 6.11438C19.719 6.61448 20 7.29276 20 8V14.6667H24C24.7072 14.6667 25.3855 14.9476 25.8856 15.4477C26.3857 15.9478 26.6667 16.6261 26.6667 17.3333L25.3333 24C25.1416 24.818 24.7778 25.5203 24.2969 26.0013C23.8159 26.4823 23.2438 26.7158 22.6667 26.6667H13.3333C12.2725 26.6667 11.2551 26.2452 10.5049 25.4951C9.75476 24.745 9.33333 23.7275 9.33333 22.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`, 
      amount : 86 
    },
    { 
      svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.33334 28V10.6667C5.33334 9.6058 5.75477 8.58838 6.50492 7.83824C7.25506 7.08809 8.27248 6.66666 9.33334 6.66666H22.6667C23.7275 6.66666 24.745 7.08809 25.4951 7.83824C26.2453 8.58838 26.6667 9.6058 26.6667 10.6667V18.6667C26.6667 19.7275 26.2453 20.7449 25.4951 21.4951C24.745 22.2452 23.7275 22.6667 22.6667 22.6667H10.6667L5.33334 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6667 12H21.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6667 17.3333H18.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`, 
      amount : 2 
    },
  ]
  let loaded = false;
  let showSocialIcons = false;
  const socialIcons = [
    `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3334 5.34667C28 6 26.6934 6.26534 25.3334 6.66667C23.8387 4.98 21.6227 4.88667 19.4934 5.684C17.364 6.48134 15.9694 8.43067 16 10.6667V12C11.6734 12.1107 7.82002 10.14 5.33335 6.66667C5.33335 6.66667 -0.242647 16.5773 10.6667 21.3333C8.17069 22.996 5.68135 24.1173 2.66669 24C7.07735 26.404 11.884 27.2307 16.0454 26.0227C20.8187 24.636 24.7414 21.0587 26.2467 15.7C26.6957 14.0702 26.9187 12.3865 26.9094 10.696C26.9067 10.364 28.9227 7 29.3334 5.34534V5.34667Z" stroke="#2E407E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33331 13.3333V18.6667H13.3333V28H18.6666V18.6667H22.6666L24 13.3333H18.6666V10.6667C18.6666 10.313 18.8071 9.97391 19.0572 9.72386C19.3072 9.47381 19.6464 9.33333 20 9.33333H24V4H20C18.2319 4 16.5362 4.70238 15.2859 5.95262C14.0357 7.20286 13.3333 8.89856 13.3333 10.6667V13.3333H9.33331Z" stroke="#2E407E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 18.6667C13.7678 19.1101 14.2864 19.4624 14.8588 19.703C15.4312 19.9435 16.0458 20.0674 16.6666 20.0674C17.2875 20.0674 17.9021 19.9435 18.4745 19.703C19.0468 19.4624 19.5655 19.1101 20 18.6667L25.3333 13.3333C26.2174 12.4493 26.714 11.2502 26.714 10C26.714 8.74976 26.2174 7.55072 25.3333 6.66667C24.4493 5.78261 23.2502 5.28596 22 5.28596C20.7497 5.28596 19.5507 5.78261 18.6666 6.66667L18 7.33334" stroke="#2E407E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6667 13.3333C18.2322 12.8899 17.7135 12.5376 17.1412 12.2971C16.5688 12.0565 15.9542 11.9327 15.3333 11.9327C14.7125 11.9327 14.0979 12.0565 13.5255 12.2971C12.9531 12.5376 12.4345 12.8899 12 13.3333L6.66666 18.6667C5.78261 19.5507 5.28595 20.7498 5.28595 22C5.28595 23.2502 5.78261 24.4493 6.66666 25.3333C7.55072 26.2174 8.74975 26.714 10 26.714C11.2502 26.714 12.4493 26.2174 13.3333 25.3333L14 24.6667" stroke="#2E407E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
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
      textColor: 'text-blue',
      transform: 'transform',
      transtion: 'transition',
      scale: loaded ? 'scale-[1.1]' : 'scale-[1]',
      width: 'w-screen'
    },
    likeAndCommentButton: {
      alignItems: 'items-center',
      backgroundColor: 'bg-gray-50',
      borderRadius: 'rounded-full',
      padding: 'py-[.5rem] px-[1rem]', 
      ringColor: 'ring-blue',
      textColor: 'text-black',
    },
    showSocialButton : {
      backgroundColor: 'bg-transparent hover:bg-black',
      backgroundOpacity: 'bg-opacity-[.05] hover:bg-opacity-[.05]',
      borderRadius: 'rounded-full',
      padding: 'px-[.5625rem] py-[1.125rem]',
      ringColor: 'ring-blue',
    },
    socialButton : {
      backgroundColor: 'bg-transparent hover:bg-black',
      backgroundOpacity: 'bg-opacity-[.05] hover:bg-opacity-[.05]',
      borderRadius: 'rounded-full',
      padding: 'p-[.25rem]',
      ringColor: 'ring-blue',
      ringOffsetColor: 'ring-offset-gray-50',
      ringOffsetWidth: 'ring-offset-1',
    }
  };

  // transition
  const slideHorizontal = (node, { delay = 0, duration = 500, easing = cubicOut }) => {
    const style = getComputedStyle(node);
    const width = parseFloat(style.width);

    return {
      delay,
      duration,
      easing,
      css: t => {
        const scale = cubicOut(t);
        return `margin-left: ${t * .5}rem;` + `width: ${t * width}px;` + `transform: scale(${scale});`
      }
    }
  }

  // lifecycle
  onMount(async () => {
    theme.update(defaultTheme);
    loaded = true;
  });
</script>

<svelte:head>
  <title>Article Footer - Oct. 6 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center p-[1rem] bg-gray-50">
  <Card>
    <!-- top half -->
    <FlexColumn tw={{alignItems: 'items-start', space:'space-y-[1rem]'}}>
      <div class="font-serif font-black text-[1.5rem]">Sign up</div>
      <div class="md:max-w-[450px] lg:max-w-[672px]">The Muzli email digest is a weekly summary of the most popular and inspiring design-related content from Muzli publications . We curate the best, so you can stay continually informed and inspired.</div>
      <Button>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3333 6.66667H6.66667C5.19391 6.66667 4 7.86058 4 9.33334V22.6667C4 24.1394 5.19391 25.3333 6.66667 25.3333H25.3333C26.8061 25.3333 28 24.1394 28 22.6667V9.33334C28 7.86058 26.8061 6.66667 25.3333 6.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4 9.33333L16 17.3333L28 9.33333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div>Get this newsletter</div>
      </Button>
      <div class="text-blue">Email will be sent to email@address.com. <a href="./#not-you" class="text-blue underline outline-none ring-blue ring-2 ring-opacity-0 focus:ring-opacity-30 transition duration-200 ring-offset-4 ring-offset-white" on:click|preventDefault>Not you?</a></div>
    </FlexColumn>
    <!-- divider line -->
    <div class="w-full h-[1px] bg-gray-50 my-[2rem]"/>
    <!-- bottom -->
    <FlexRow tw={{alignItems: 'items-end md:items-center', flexDirection: 'flex-col md:flex-row', justifyItems: 'justify-between', space: 'space-y-[1rem] md:space-y-0'}}>
      <FlexRow tw={{space: 'space-x-[.5rem]'}}>
        {#each likeAndComment as {svg, amount}}
          <Button tw={tw.likeAndCommentButton}>
            {@html svg}
            <div>{amount}</div>
          </Button>
        {/each}
      </FlexRow>
      <FlexRow on:mouseenter={()=>showSocialIcons = true} on:mouseleave={()=>showSocialIcons = false} tw={{alignItems:'items-center', space: 'space-x-[.5rem] md:space-x-[1rem]'}}>
        {#if showSocialIcons}
          <div class="flex items-center space-x-[.5rem]">
            {#each socialIcons as svg}
              <div in:slideHorizontal out:slideHorizontal>
                <Button tw={tw.socialButton}>{@html svg}</Button>
              </div>
            {/each}
          </div>
        {/if}
        {#if !showSocialIcons}
          <div transition:slideHorizontal>
            <Button tw={tw.showSocialButton}>
              <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="#2E407E"/>
                <circle cx="11" cy="2" r="2" fill="#2E407E"/>
                <circle cx="20" cy="2" r="2" fill="#2E407E"/>
              </svg>
            </Button>
          </div>
          {/if}
      </FlexRow>
    </FlexRow>
  </Card>
</div>

<!-- loading spinner -->
<div class={Object.values(tw.loading).join(' ')}>
  <Spinner />
</div>
