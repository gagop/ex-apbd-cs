<script lang="ts">
	import { t } from '$lib/i18n/index.svelte';
</script>

<a
	href="#main-content"
	class="
		fixed top-0 left-0 z-50 -translate-y-full
		bg-accent-600 text-white px-4 py-2 text-sm font-medium
		focus:translate-y-0 transition-transform
	"
>
	{t('skipLink')}
</a>
