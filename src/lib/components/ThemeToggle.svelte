<script lang="ts">
	import { t } from '$lib/i18n/index.svelte';
	import { onMount } from 'svelte';

	let dark = $state(false);
	let mounted = $state(false);

	onMount(() => {
		dark = document.documentElement.classList.contains('dark');
		mounted = true;
	});

	function toggle() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	}
</script>

<button
	onclick={toggle}
	class="
		p-2 rounded-lg
		text-zinc-600 dark:text-zinc-400
		hover:bg-zinc-100 dark:hover:bg-zinc-800
		transition-colors
		focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500
	"
	aria-label={t('theme.toggle')}
>
	{#if mounted}
		{#if dark}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
		{/if}
	{/if}
</button>
