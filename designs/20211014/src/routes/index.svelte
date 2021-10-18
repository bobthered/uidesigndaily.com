<script>
  // lib
  import theme from '@bobthered/svelte-tailwindcss-ui/theme';
  import defaultTheme from '../theme';
  theme.update(defaultTheme);

  // components
  import { Button, Card, FlexColumn, Input } from '@bobthered/svelte-tailwindcss-ui';
</script>

<svelte:head>
  <title>Sign Up - October 14 2021 - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen p-[1rem] bg-blue-50 flex items-center justify-center text-blue-900 font-semibold">
  <Card tw={{backgroundColor:'bg-blue-100', boxShadow: ''}}>
    <Card tw={{padding: 'p-[1rem] md:px-[4rem] md:py-[3rem] lg:px-[8rem] py-[6rem]', maxWidth: 'max-w-[642px]'}}>
      <FlexColumn tw={{items:'items-center'}}>
        <div class="max-w-[254px] text-[1.5rem] lg:text-[2rem] text-center font-extrabold">
          Join the community
        </div>
        <div class="max-w-[381px] my-[1rem] lg:text-[1.25rem] text-center">Take your art to the next level.  Get it seen by millions of people.</div>
        <Button>Join with Facebook</Button>
        <div class="text-black opacity-[.5] lg:text-[18px] my-[1rem]">Or</div>
        <form on:submit|preventDefault class="w-full max-w-[364px]">
          <FlexColumn tw={{space:'space-y-[1rem]'}}>
            <FlexColumn tw={{flexDirection:'flex-col md:flex-row', space:'space-y-[1rem] md:space-y-0 md:space-x-[1rem]'}}>
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
            </FlexColumn>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button type="submit" tw={{backgroundColor:'bg-blue-900 hover:bg-blue-800', ringColor:'ring-blue-900'}}>Create New Account</Button>
          </FlexColumn>
        </form>
        <div class="max-w-[274px] text-[14px] mt-[2rem] font-normal text-center">By joining, you agree to our Terms of Service and Privacy Policy</div>
      </FlexColumn>
    </Card>
  </Card>
</div>