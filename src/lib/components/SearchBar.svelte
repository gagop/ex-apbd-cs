<script lang="ts">
	import { t, l } from '$lib/i18n/index.svelte';
	import { searchFeatures } from '$lib/data/versions';
	import { base } from '$app/paths';

	let query = $state('');
	let results = $derived(query.length >= 2 ? searchFeatures(query) : []);
	let open = $derived(query.length >= 2);
	let inputEl: HTMLInputElement;

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			query = '';
			inputEl?.blur();
		}
	}
</script>

<div class="relative w-full max-w-md">
	<div class="relative">
		<svg
			class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</svg>
		<input
			bind:this={inputEl}
			bind:value={query}
			onkeydown={handleKeydown}
			type="search"
			placeholder={t('search.placeholder')}
			class="
				w-full pl-10 pr-4 py-2.5 rounded-xl
				bg-zinc-100 dark:bg-zinc-800
				text-zinc-900 dark:text-zinc-100
				placeholder-zinc-400 dark:placeholder-zinc-500
				border border-transparent
				focus:border-accent-300 dark:focus:border-accent-700
				focus:bg-white dark:focus:bg-zinc-800
				focus:outline-none focus:ring-2 focus:ring-accent-500/20
				transition-all text-sm
			"
			role="combobox"
			aria-expanded={open}
			aria-controls="search-listbox"
			aria-haspopup="listbox"
			aria-autocomplete="list"
		/>
	</div>

	{#if open}
		<div
			class="
				absolute top-full left-0 right-0 mt-2 z-40
				bg-white dark:bg-zinc-800
				border border-zinc-200 dark:border-zinc-700
				rounded-xl shadow-lg overflow-hidden
				max-h-80 overflow-y-auto
			"
			role="listbox"
			id="search-listbox"
		>
			{#if results.length === 0}
				<p class="p-4 text-sm text-zinc-500 dark:text-zinc-400">
					{t('search.noResults')}
				</p>
			{:else}
				{#each results as { version, feature }}
					<a
						href="{base}/version/{version.id}#{feature.slug}"
						class="
							block p-3
							hover:bg-zinc-50 dark:hover:bg-zinc-700/50
							border-b border-zinc-100 dark:border-zinc-700
							last:border-0
							transition-colors
						"
						role="option"
						aria-selected="false"
						onclick={() => (query = '')}
					>
						<div class="flex items-baseline gap-2">
							<span class="font-medium text-sm text-zinc-900 dark:text-zinc-100">
								{feature.name}
							</span>
							<span class="text-xs text-zinc-400 dark:text-zinc-500">
								C# {version.version}
							</span>
						</div>
						<p class="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-1">
							{l(feature.summary)}
						</p>
					</a>
				{/each}
			{/if}
		</div>
	{/if}
</div>
