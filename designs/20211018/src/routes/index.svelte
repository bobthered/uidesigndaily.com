<script>
  // lib
  import merge from 'lodash-es/merge';
  import theme from '@bobthered/svelte-tailwindcss-ui/theme';
  import defaultTheme from '../theme';
  import { onMount } from 'svelte'

  // components
  import { Button, Card, FlexColumn, Radio } from '@bobthered/svelte-tailwindcss-ui';

  // props ( internal )
  let language = 'English'
  const languages = {
    'Deutsch' : 'Derzeit werden Suchergebnisse angezeigt in:',
    'hrvatski' : 'Trenutno prikazuju rezultate pretraživanja u:',
    'English' : 'Currently showing search results in:',
    'Nederlands' : 'Er worden momenteel zoekresultaten weergegeven in:',
    'español' : 'Actualmente se muestran resultados de búsqueda en:',
    'polski' : 'Obecnie pokazuje wyniki wyszukiwania w:',
    'italiano' : 'Attualmente mostra i risultati di ricerca in:',
    'português (Brasil)' : 'Atualmente mostrando resultados de pesquisa em:',
  }
  const navigationClasses = {
    current: 'whitespace-nowrap bg-white text-gray-900 rounded p-[.75rem] pr-[2rem] md:pr-[3rem] lg:pr-[4rem] ring-2 ring-gray-900 ring-opacity-0 focus:ring-opacity-30 outline-none transition duration-200',
    default: 'whitespace-nowrap text-gray-900 rounded p-[.75rem] pr-[2rem] md:pr-[3rem] lg:pr-[4rem] ring-2 ring-gray-900 ring-opacity-0 focus:ring-opacity-30 outline-none transition duration-200',
  }
  const navigationItems = [
    { href: './#search-results', text: 'Search results' },
    { href: './#languages', text: 'Languages' },
    { href: './#appearance', text: 'Appearance' },
    { href: './#help', text: 'Help' },
  ]
  const navigation = './#languages'

  // lifecycle
  onMount(()=>{
    // $theme = merge($theme, defaultTheme);
    theme.update(defaultTheme);
  })
</script>

<svelte:head>
  <title>Settings - Oct. 18 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center bg-gray-100 p-[1rem] font-semibold">
  <Card tw={{padding: 'p-[1rem] md:p-[2rem] lg:p-[3rem]', width: 'w-full md:w-auto'}}>
    <!-- top bar -->
    <div class="flex justify-start w-full border-b border-gray-50 space-x-[1rem] items-center pb-[1rem] font-serif font-bold text-gray-900 mb-[1rem] md:mb-[2rem]">
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.8333L6.66667 12.5M6.66667 12.5L12 7.16667M6.66667 12.5H21.3333C22.7478 12.5 24.1044 13.0619 25.1046 14.0621C26.1048 15.0623 26.6667 16.4188 26.6667 17.8333C26.6667 19.2478 26.1048 20.6044 25.1046 21.6046C24.1044 22.6048 22.7478 23.1667 21.3333 23.1667H20" stroke="#0D0C2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="text-[1.5rem]">Search Settings</div>
    </div>
    <FlexColumn tw={{alignItems:'md:items-start', flexDirection: 'flex-col md:flex-row', space:'space-y-[1rem] md:space-y-0 md:space-x-[2rem] lg:space-x-[4rem]'}}>
      <!-- navigation -->
      <Card tw={{backgroundColor: 'bg-gray-100', boxShadow: '', space: 'space-y-[2px]'}}>
        {#each navigationItems as {href, text}}
          <a {href} on:click|preventDefault  class={navigationClasses[href===navigation?'current':'default']}>{text}</a>
        {/each}
      </Card>
      <!-- language container -->
      <FlexColumn tw={{space:'space-y-[1rem] md:space-y-[2rem]'}}>
        <div class="text-[1rem] font-bold">In what language would you like to use our product</div>
        <div class="grid grid-cols-1 gap-[.5rem] md:grid-cols-2">
          {#each Object.keys(languages) as title}
            <Radio bind:group={language} value={title}><div class="ml-[1rem]">{title}</div></Radio>
          {/each}
        </div>
        <a href="#show-more" on:click|preventDefault class="flex items-center space-x-[1rem] text-purple outline-none ring ring-purple ring-opacity-0 focus:ring-opacity-30 transtion duration-200">
          <div>Show more</div>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 8.25L11 13.75L16.5 8.25" stroke="currentColor" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <div class="ring-1 ring-gray-50 rounded-[1rem] h-[104px] md:h-[120px] lg:h-[136px] p-[1rem] md:p-[1.5rem] lg:p-[2rem] flex flex-col md:w-[446px] lg:w-[475px]">
          <div class="font-bold">{languages[language]}</div>
          <div>{language}</div>
        </div>
      </FlexColumn>
    </FlexColumn>
    <!-- bottom bar -->
    <div class="flex space-x-[1rem] mt-[1rem] md:justify-end md:mt-[2rem] lg:mt-[3rem]">
      <Button tw={{backgroundColor: 'bg-transparent hover:bg-gray-50', flexGrow: 'flex-grow md:flex-grow-0', ringColor: 'ring-black',  textColor: 'text-black', textOpacity:'text-opacity-[.5]'}}>Cancel</Button>
      <Button tw={{flexGrow: 'flex-grow md:flex-grow-0'}}>Save</Button>
    </div>
  </Card>
</div>