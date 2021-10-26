<script>
  // lib
  import { onMount } from 'svelte';
  import defaultTheme from '../theme';
  
  // stores
  import theme from '@bobthered/svelte-tailwindcss-ui/theme';
  theme.update(defaultTheme);

  // components
  import { Button, Card, Chart, Icon, Icons, FlexColumn, FlexRow, Spinner } from '@bobthered/svelte-tailwindcss-ui';

  // props ( internal )
  const data = {
    goals: [
      { title: 'Direct', amount: 3183,tw:{backgroundColor: 'bg-teal'}},
      { title: 'Organic', amount: 3846,tw:{backgroundColor: 'bg-gray-900'}},
      { title: 'Social', amount: 1058,tw:{backgroundColor: 'bg-purple'}},
      { title: 'Referral', amount: 174,tw:{backgroundColor: 'bg-blue'}},
    ],
    recycled: [
      { title: 'Text', amount: 47.1*.32, backgroundColor: 'bg-gray-900', tw: { textColor: 'text-gray-900'} },
      { title: 'Images', amount: 47.1*.25, backgroundColor: 'bg-orange', tw: { textColor: 'text-orange'} },
      { title: 'Documents', amount: 47.1*.22, backgroundColor: 'bg-yellow', tw: { textColor: 'text-yellow'} },
      { title: 'Videos', amount: 47.1*.11, backgroundColor: 'bg-pink', tw: { textColor: 'text-pink'} },
    ]
  }
  let loaded = false;

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
  <title>Charts - Sep. 15 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center p-[1rem] text-gray-900">
  <div class="flex flex-col space-y-[2rem] lg:flex-row lg:space-y-0 lg:space-x-[1rem] lg:items-center">
    <Card>
      <!-- top bar -->
      <FlexRow tw={{justifyItems:'justify-between'}}>
        <div class="text-[1.5rem] font-semibold">Recycled</div>
        <Button tw={{padding: 'p-[.5rem]', width: 'w-auto'}}>
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 7.99905C3.02513 7.99905 2.4375 8.58668 2.4375 9.31155C2.4375 10.0364 3.02513 10.6241 3.75 10.6241C4.47487 10.6241 5.0625 10.0364 5.0625 9.31155C5.0625 8.58668 4.47487 7.99905 3.75 7.99905Z" fill="currentColor"/>
            <path d="M9 7.99905C8.27513 7.99905 7.6875 8.58668 7.6875 9.31155C7.6875 10.0364 8.27513 10.6241 9 10.6241C9.72487 10.6241 10.3125 10.0364 10.3125 9.31155C10.3125 8.58668 9.72487 7.99905 9 7.99905Z" fill="currentColor"/>
            <path d="M14.25 7.99905C13.5251 7.99905 12.9375 8.58668 12.9375 9.31155C12.9375 10.0364 13.5251 10.6241 14.25 10.6241C14.9749 10.6241 15.5625 10.0364 15.5625 9.31155C15.5625 8.58668 14.9749 7.99905 14.25 7.99905Z" fill="currentColor"/>
          </svg>
        </Button>
      </FlexRow>
      <FlexRow tw={{space:'space-x-[2rem]'}}>
        <div class="relative">
          <Chart type="donut" data={data.recycled} tw={{height: 'h-[145px]', width: 'w-[145px]'}} />
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div class="text-gray-500 text-[.875rem]">Total</div>
            <div class="font-bold">${[...data.recycled].reduce((a,c)=>a+c.amount,0)}K</div>
          </div>
        </div>
        <div class="grid items-center gap-[.5rem]" style="grid-template-columns:11px 88px 32px;">
          {#each data.recycled as {title, backgroundColor, amount}}
            <div class="rounded-full w-[11px] h-[11px] {backgroundColor}" />
            <div class="text-gray-500 text-[.875rem]">{title}</div>
            <div class="font-bold text-right text-[.875rem]">{amount * 100 / 47.1}%</div>
          {/each}
        </div>
      </FlexRow>
      <Button>
        <div>Read full report</div>
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35225 4.60225C6.57192 4.38258 6.92808 4.38258 7.14775 4.60225L11.6477 9.10225C11.8674 9.32192 11.8674 9.67808 11.6477 9.89775L7.14775 14.3977C6.92808 14.6174 6.57192 14.6174 6.35225 14.3977C6.13258 14.1781 6.13258 13.8219 6.35225 13.6023L10.4545 9.5L6.35225 5.39775C6.13258 5.17808 6.13258 4.82192 6.35225 4.60225Z" fill="currentColor"/>
        </svg>
      </Button>
    </Card>
    <Card>
      <!-- top bar -->
      <FlexRow tw={{justifyItems:'justify-between'}}>
        <div class="text-[1.5rem] font-semibold">Goals</div>
      </FlexRow>
      <Chart type="horizontalList" data={data.goals} max={5000} />
    </Card>
  </div>
</div>

<!-- loading spinner -->
<div class={Object.values(tw.loading).join(' ')}>
  <Spinner />
</div>