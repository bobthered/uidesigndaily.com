<script>
  // lib
  import theme from '@bobthered/svelte-tailwindcss-ui/theme';
  import defaultTheme from '../theme';
  theme.update(defaultTheme);

  // components
  import { Button, Card, FlexColumn, Icon, Icons } from '@bobthered/svelte-tailwindcss-ui';
  const { ArrowLeft, Cake, Chat, Cog, Plus, ViewGrid, ViewList, Users } = Icons

  // props ( internal )
  const groups = [
    { title: 'Cuisine' , members:36, featured: true},
    { title: 'Art' , members:9, featured: false},
    { title: 'Workout' , members:27, featured: true},
    { title: 'Gaming' , members:105, featured: true},
    { title: 'Hiking' , members:97, featured: false},
    { title: 'Yoga' , members:65, featured: false},
  ]
  const navigationItems = [
    {title: 'chat', component: Chat}, 
    {title: 'users', component: Users}, 
    {title: 'cake', component: Cake}, 
    {title: 'cog', component: Cog}
  ]
  let navigation = 'users';
  let view = 'grid';

  // props ( external )
  $: tw = {
    create: {
      alignItems: 'items-center',
      backgroundColor: 'bg-blue-700',
      borderRadius: 'rounded-[.75rem]',
      boxShadow: '',
      justifyItems: 'justify-center',
      padding: 'py-[40px] px-[1rem] lg:px-[3.5rem]',
      position: 'relative'
    },
    createButton: {
      backgroundColor: 'bg-blue-900 hover:bg-blue-800',
      borderRadius: 'rounded-full',
      padding: 'p-[1rem]',
      textColor: 'text-blue-200'
    },
    group: {
      alignItems: 'items-center',
      backgroundColor: 'bg-blue-900',
      borderRadius: 'rounded-[.75rem]',
      padding: 'py-[40px] px-[1rem] lg:px-[3.5rem]',
      position: 'relative'
    },
    navigation : {
      current:{
        backgroundColor: 'bg-blue-800',
        flexGrow: 'flex-grow lg:flex-grow-0',
        padding: 'p-[.75rem]',
        position: 'relative',
        ringWidth: 'ring-4 ring-inset',
        textColor: 'text-blue-200'
      },
      default:{
        backgroundColor: 'bg-blue-900 hover:bg-blue-800',
        flexGrow: 'flex-grow lg:flex-grow-0',
        padding: 'p-[.75rem]',
        position: 'relative',
        ringWidth: 'ring-4 ring-inset',
        textColor: 'text-blue-200'
      }
    },
    view: {
      flex: view === 'grid' ? '' : 'flex',
      flexDirection: view === 'grid' ? '' : 'flex-col',
      grid: view === 'grid' ? 'grid grid-cols-2 md:grid-cols-4' : '',
      gridGap: view === 'grid' ? 'gap-[1rem]' : '',
      overflow: 'overflow-y-auto lg:overflow-y-visible',
      padding: 'p-[1rem] lg:py-[0]'
    },
    viewButtons: {
      list: {
        backgroundColor: view === 'list' ? 'bg-blue-900' : 'bg-blue-800 hover:bg-blue-900',
        borderRadius: 'rounded-tr rounded-br',
        padding: 'p-[.5rem]',
        ringWidth:'ring-2 ring-inset',
        textColor: 'text-blue-200'
      },
      grid: {
        backgroundColor: view === 'grid' ? 'bg-blue-900' : 'bg-blue-800 hover:bg-blue-900',
        borderRadius: 'rounded-tl rounded-bl',
        padding: 'p-[.5rem]',
        ringWidth:'ring-2 ring-inset',
        textColor: 'text-blue-200'
      },
    }
  }
</script>

<svelte:head>
  <title>Groups List - Oct. 17 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen max-h-screen flex flex-col items-center justify-center bg-blue-900 text-blue-200 font-serif">
  <div class="flex flex-col flex-grow overflow-y-auto bg-blue-800 lg:flex-row lg:flex-grow-0 lg:rounded-[1.5rem] lg:py-[2rem] lg:pl-[2rem] lg:pr-[1rem]">
    <div class="flex-grow flex flex-col bg-blue-800 overflow-y-auto lg:order-2 lg:overflow-y-visible">
      <div class="flex justify-between items-center p-[1rem] lg:pb-[2rem]">
        <div class="flex space-x-[1rem] items-center">
          <Icon src={ArrowLeft}/>
          <div class="lg:text-[1.5rem]">Groups</div>
        </div>
        <div class="rounded ring-2 ring-blue-900 flex">
          <Button on:click={()=>view='grid'} tw={tw.viewButtons.grid}><Icon src={ViewGrid} /></Button>
          <Button tw={tw.viewButtons.list}><Icon src={ViewList} /></Button>
        </div>
      </div>
      <FlexColumn tw={tw.view}>
        <Card tw={tw.create}>
          <Button tw={tw.createButton}><Icon src={Plus} tw={{height: 'h-[32px]', width: 'w-[32px]'}}/></Button>
          <div class="text-[.7rem] font-sans lg:text-[.85rem] mt-[1rem]">Create Group</div>
        </Card>
        {#each groups as {title, members, featured}}
          <Card tw={tw.group}>
            <img src="./{title.toLowerCase()}.png" alt={title} class="w-[72px] h-[72px]" />
            <div class="font-bold mt-[.75rem] mb-[.25rem] lg:text-[1.15rem] lg:mt-[1rem] lg:mb-[.4rem]">{title}</div>
            <div class="text-[.7rem] font-sans lg:text-[.85rem]">{members} members</div>
            {#if featured}
              <div class="w-[.625rem] h-[.625rem] absolute top-[1rem] right-[1rem] rounded-full bg-purple" />
            {/if}
          </Card>
        {/each}
      </FlexColumn>
    </div>
    <div class="flex bg-blue-900 w-screen justify-center py-[.5rem] lg:order-1 lg:flex-col lg:w-auto lg:rounded-[1.25rem] lg:px-[.5rem] lg:space-y-[1rem]">
      {#each navigationItems as {title, component}}
        <Button tw={tw.navigation[navigation === title ? 'current' : 'default']}>
          <Icon src={component}/>
        </Button>
      {/each}
    </div>
  </div>
</div>