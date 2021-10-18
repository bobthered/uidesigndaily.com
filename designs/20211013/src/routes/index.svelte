<script>
	// lib
	import theme from '@bobthered/svelte-tailwindcss-ui/theme';
	import { grow, shrink } from '@bobthered/svelte-tailwindcss-ui/transitions';
	import defaultTheme from '../theme';
	theme.update(defaultTheme);

	// components
  import { Button, Card, FlexColumn, FlexRow, Icon, Icons } from '@bobthered/svelte-tailwindcss-ui';
  
  // handlers
  const toggleMenu = i => profiles[i].menuOpen = !profiles[i].menuOpen;

	// props ( internal )
	const profiles = [
    {name: 'Andrew Robinson', menuOpen: false},
    {name: 'Mary Kyles', menuOpen: false}
  ];
</script>

<svelte:head>
	<title>Select Account - October 13 2021 - UI Deisgn Daily</title>
</svelte:head>

<div
	class="flex items-center justify-center min-w-screen min-h-screen bg-blue-light p-[1rem] text-blue-dark font-bold font-mulish"
>
	<Card
		tw={{
			borderRadius: 'rounded-[1.25rem]',
			padding: 'py-[2.5rem] px-[1rem] md:py-[7.5rem] md:px-[7.5rem]',
			width: 'lg:w-[934px]'
		}}
	>
		<FlexColumn tw={{ items: 'items-center' }}>
			<FlexColumn tw={{ items: 'items-center', width: 'w-full md:w-[442px]' }}>
				<div class="text-[1.625rem]">Select your profile</div>
				<div class="text-center mt-[1rem]">
					Logged in users can view full business profiles and can save contact details.
				</div>
			</FlexColumn>
			<FlexRow tw={{ flexDirection: 'flex-col md:flex-row', items: 'items-center', margin: 'mt-[2rem] md:mt-[89px]' }}>
        {#each profiles as {name, menuOpen}, i}
          <Button tw={{ backgroundColor:'', ringWidth: 'ring-0', textTransform:''}}>
            <Card
              tw={{
                backgroundColor: 'bg-blue-light',
                borderRadius: 'rounded-[.9375rem]',
                boxShadow: 'shadow-none',
                margin: 'mb-[22px] md:mb-[0] md:mr-[22px]'
              }}
            >
              <Card tw={{ boxShadow: 'shadow-sm', height: 'h-[173px]', width: 'w-[173px]' }}>
                <FlexColumn
                  tw={{
                    items: 'items-center',
                    height: 'h-full',
                    justifyItems: 'justify-center',
                    space: 'space-y-[.5rem]'
                  }}
                >
                  <img
                    src="./{name.toLowerCase().replace(/\s/g, '-')}.png"
                    alt={name}
                    class="w-[71px] h-[71px]"
                  />
                  <div class="text-[12px] font-mulish">{name}</div>
                  <Button on:click={()=>toggleMenu(i)} tw={{position:'relative'}}>
                    <Icon src={Icons.DotsHorizontal} />
                    <Card tw={{duration: 'duration-200', inset: 'bottom-0 left-1/2',opacity:menuOpen ? 'opacity-1': 'opacity-0', pointerEvents: menuOpen ? 'pointer-events-auto' : 'pointer-events-none', position:'absolute', tranform: 'transform', transition:'transition', translate:menuOpen ? 'translate-y-full -translate-x-1/2' : 'translate-y-[90%] -translate-x-1/2'}}>
                      <FlexColumn tw={{space:'space-y-[.25rem]'}}>
                        <Button tw={{padding:'py-[.25rem] pl-[.25rem] pr-[1.5rem]'}}><Icon src={Icons.Pencil}/><div>Edit</div></Button>
                        <Button tw={{padding:'py-[.25rem] pl-[.25rem] pr-[1.5rem]'}}><Icon src={Icons.Trash}/><div>Delete</div></Button>
                      </FlexColumn>
                    </Card>
                  </Button>
                </FlexColumn>
              </Card>
            </Card>
          </Button>
				{/each}
				<Button
					tw={{
            borderRadius: 'rounded-full',
            margin: 'mt-[2rem] md:mt-0 md:ml-[2rem]',
						padding: 'p-[6px]',
            ringOffsetColor: 'ring-offset-blue-light',
            ringOffsetOpacity: 'ring-offset-opacity-[1]',
						ringOffsetWidth: 'ring-offset-4',
						textColor: 'text-blue hover:text-blue-dark'
					}}><Icon src={Icons.Plus} tw={{ height: 'h-[60px]', width: 'w-[60px]' }} /></Button
				>
			</FlexRow>
		</FlexColumn>
	</Card>
</div>
