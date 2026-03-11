<script lang="ts">
	import { getLocale, setLocale, t } from '$lib/i18n/index.svelte';

	function toggle() {
		setLocale(getLocale() === 'en' ? 'pl' : 'en');
	}
</script>

<button
	onclick={toggle}
	class="
		px-3 py-1.5 rounded-lg text-sm font-semibold
		border border-zinc-300 dark:border-zinc-600
		text-zinc-700 dark:text-zinc-300
		hover:bg-zinc-100 dark:hover:bg-zinc-800
		transition-colors
		focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500
	"
	aria-label={t('lang.switchLabel')}
>
	{t('lang.switch')}
</button>
