<script>
  // lib
  import theme from '@bobthered/svelte-tailwindcss-ui/theme';
  import defaultTheme from '../theme';
  theme.update(defaultTheme);
  import { onMount } from 'svelte';

  // components
  import { Button, Checkbox } from '@bobthered/svelte-tailwindcss-ui';

  // handlers
  const addUser = i => currentUsers = [...currentUsers, availableUsers[i]];
  const removeUser = i => currentUsers = currentUsers.slice(0, i).concat(currentUsers.slice(i + 1, currentUsers.length))
  const toggleEmailList = () => pickingEmails = !pickingEmails;

  // props ( internal )
  let currentUsers = [];
  let notify = false;
  let pickingEmails = false;
  let users = [];

  // props ( dynamic )
  $: currentUserNames = [...currentUsers].map(user=>`${user.name.first} ${user.name.last}`)
  $: availableUsers = users.filter(user=>!currentUserNames.includes(`${user.name.first} ${user.name.last}`))
  
  $: tw = {
    backButton : {
      backgroundColor: 'bg-white',
      borderRadius:'rounded-full',
      padding: 'p-[11px]',
      ringColor: 'ring-white',
      textColor: 'text-blue-900',
    },
    button : {
      cancel: {
        backgroundColor: 'bg-blue-800 hover:bg-blue-900',
        flexGrow: 'flex-grow md:flex-grow-0',
        ringColor: 'ring-purple',
        textTransform: '',
      },
      default: {
        backgroundColor: 'bg-purple hover:bg-purple-600',
        flexGrow: 'flex-grow md:flex-grow-0',
        ringColor: 'ring-purple',
        textTransform: '',
      }
    },
    checkbox: {
      backgroundColor: notify ? 'bg-purple' : 'bg-blue-800',
      height: 'h-[30px]',
      padding: 'p-[3px]',
      ringColor: 'ring-blue-300',
      ringOffsetColor: notify ? 'ring-offset-purple' : 'ring-offset-blue-300',
      ringOffsetWidth: 'ring-offset-1',
      width: 'w-[30px]'
    },
  }

  // lifecycle
  onMount(async ()=> {
    const result = await fetch('https://randomuser.me/api/?results=50');
    const data = await result.json();
    users = data.results;
    theme.update(defaultTheme);
  })
</script>

<svelte:head>
  <title>Share Modal - Oct. 12 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center bg-blue-900 text-white font-semibold">
  <div class="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-screen max-h-screen overflow-y-auto p-[1rem] justify-center md:p-[2rem]">
    <div class="rounded-[.5rem] p-[1rem] flex flex-col bg-blue-700 md:p-[2rem] w-full max-w-[640px]">
      <!-- top bar -->
      <div class="flex justify-between items-center">
        <Button tw={tw.backButton}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 17.3333L6.66669 12M6.66669 12L12 6.66666M6.66669 12H21.3334C22.7478 12 24.1044 12.5619 25.1046 13.5621C26.1048 14.5623 26.6667 15.9188 26.6667 17.3333C26.6667 18.7478 26.1048 20.1044 25.1046 21.1046C24.1044 22.1048 22.7478 22.6667 21.3334 22.6667H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Button>
        <div class="flex items-center space-x-[1rem]">
          <div>Settings</div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7667 5.756C14.3347 3.41467 17.6653 3.41467 18.2333 5.756C18.3186 6.10773 18.4856 6.43437 18.7209 6.70933C18.9563 6.98429 19.2532 7.19981 19.5875 7.33833C19.9219 7.47685 20.2842 7.53447 20.645 7.50649C21.0059 7.47852 21.355 7.36574 21.664 7.17733C23.7213 5.924 26.0773 8.27867 24.824 10.3373C24.6359 10.6462 24.5233 10.9951 24.4954 11.3557C24.4674 11.7163 24.525 12.0784 24.6634 12.4125C24.8017 12.7467 25.017 13.0434 25.2916 13.2787C25.5663 13.514 25.8926 13.6812 26.244 13.7667C28.5853 14.3347 28.5853 17.6653 26.244 18.2333C25.8923 18.3186 25.5656 18.4856 25.2907 18.7209C25.0157 18.9563 24.8002 19.2532 24.6617 19.5875C24.5232 19.9219 24.4655 20.2842 24.4935 20.645C24.5215 21.0059 24.6343 21.355 24.8227 21.664C26.076 23.7213 23.7213 26.0773 21.6627 24.824C21.3538 24.6359 21.0049 24.5233 20.6443 24.4954C20.2837 24.4674 19.9216 24.525 19.5875 24.6634C19.2533 24.8017 18.9566 25.017 18.7213 25.2916C18.486 25.5663 18.3188 25.8926 18.2333 26.244C17.6653 28.5853 14.3347 28.5853 13.7667 26.244C13.6814 25.8923 13.5144 25.5656 13.2791 25.2907C13.0437 25.0157 12.7468 24.8002 12.4125 24.6617C12.0781 24.5232 11.7158 24.4655 11.355 24.4935C10.9941 24.5215 10.645 24.6343 10.336 24.8227C8.27867 26.076 5.92267 23.7213 7.176 21.6627C7.36414 21.3538 7.47673 21.0049 7.50465 20.6443C7.53256 20.2837 7.47499 19.9216 7.33663 19.5875C7.19827 19.2533 6.98301 18.9566 6.70836 18.7213C6.43371 18.486 6.10742 18.3188 5.756 18.2333C3.41467 17.6653 3.41467 14.3347 5.756 13.7667C6.10773 13.6814 6.43437 13.5144 6.70933 13.2791C6.98429 13.0437 7.19981 12.7468 7.33833 12.4125C7.47685 12.0781 7.53447 11.7158 7.50649 11.355C7.47852 10.9941 7.36574 10.645 7.17733 10.336C5.924 8.27867 8.27867 5.92267 10.3373 7.176C11.6707 7.98667 13.3987 7.26933 13.7667 5.756Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <!-- message -->
      <div class="text-[2rem] leading-[2.5rem] font-medium my-[2rem] max-w-[303px]">Share with people and groups</div>
      <!-- email list -->
      <div on:click|self={toggleEmailList} class="relative rounded-[26px] ring-1 ring-blue-300 p-[5px] pb-[0] bg-blue-900 cursor-pointer min-h-[52px] flex">
        <div class="flex justify-start flex-wrap overflow-y-auto pt-[1px] pl-[1px]">
          {#each currentUsers as {name, picture}, i}
            <div on:click={()=>removeUser(i)} class="flex space-x-[1rem] rounded-full ring-1 ring-blue-300 p-[5px] pr-[1rem] bg-blue-700 items-center cursor-pointer mr-[5px] mb-[5px]">
              <img src={picture.thumbnail} alt="{name.first} {name.last}" class="rounded-full w-[32px] h-[32px]" />
              <div>{name.first} {name.last}</div>
            </div>
          {/each}
        </div>
        {#if pickingEmails}
          <div class="absolute left-0 bottom-[-9rem] flex flex-col w-full h-[8rem] overflow-y-auto bg-blue-900 ring-1 ring-blue-300 shadow p-[1rem] rounded z-10 items-start space-y-[1rem] cursor-default">
            {#each availableUsers as {name, picture}, i}
              <div on:click={()=>addUser(i)} class="flex space-x-[1rem] rounded-full ring-1 ring-blue-300 p-[5px] pr-[1rem] bg-blue-700 items-center cursor-pointer">
                <img src={picture.thumbnail} alt="{name.first} {name.last}" class="rounded-full w-[32px] h-[32px]" />
                <div>{name.first} {name.last}</div>
              </div>
            {/each}
          </div>
        {/if}
      </div>
      <!-- notify people -->
      <div class="flex space-x-[1rem] my-[2rem] items-center">
        <Checkbox tw={tw.checkbox} bind:checked={notify} />
        <div>Notify people</div>
      </div>
      <!-- bottom -->
      <div class="flex flex-col justify-between items-center md:flex-row">
        <div class="flex space-x-[1rem] w-full my-[1rem] md:order-2 md:w-auto">
          <Button tw={tw.button.cancel}>Cancel</Button>
          <Button tw={tw.button.default}>Send</Button>
        </div>
        <a href="/send-feedback" on:click|preventDefault class="text-purple no-underline whitespace-nowrap hover:underline md:order-1">Send feedback</a>
      </div>
    </div>
  </div>
</div>