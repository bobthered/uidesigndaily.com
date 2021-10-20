<script>
  // lib
  import { onMount } from 'svelte';
  import defaultTheme from '../theme';
  
  // stores
  import theme from '@bobthered/svelte-tailwindcss-ui/theme';

  // components
  import { Button } from '@bobthered/svelte-tailwindcss-ui';

  // props ( internal )

  // props ( dynamic )

  // lifecycle
  onMount(async() => {
    theme.update(defaultTheme);
  })
</script>

<svelte:head>
  <title>__TITLE__ - __DATE__ - UI Design Daily</title>
</svelte:head>

<div class="min-w-screen min-h-screen flex items-center justify-center">

</div>