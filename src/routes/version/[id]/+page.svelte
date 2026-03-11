<script lang="ts">
	import { l, t } from '$lib/i18n/index.svelte';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import { base } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>C# {data.version.version} &mdash; {t('site.title')}</title>
</svelte:head>

<article>
	<!-- Back link -->
	<a
		href="{base}/"
		class="
			inline-flex items-center gap-1.5 text-sm
			text-zinc-500 dark:text-zinc-400
			hover:text-accent-600 dark:hover:text-accent-400
			transition-colors mb-6
		"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
		{t('nav.allVersions')}
	</a>

	<!-- Version Header -->
	<header class="mb-10">
		<div class="flex items-baseline gap-3 flex-wrap">
			<h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
				C# {data.version.version}
			</h1>
			<span class="text-lg text-zinc-400 dark:text-zinc-500">{data.version.year}</span>
			<span class="text-sm px-2.5 py-0.5 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 font-medium">
				{data.version.dotnetVersion}
			</span>
		</div>
		<p class="mt-3 text-xl text-zinc-600 dark:text-zinc-400">
			{l(data.version.tagline)}
		</p>
	</header>

	<!-- Features -->
	<section>
		<h2 class="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-6">
			{t('version.features')} ({data.version.features.length})
		</h2>

		<div class="space-y-6">
			{#each data.version.features as feature (feature.slug)}
				<FeatureCard {feature} />
			{/each}
		</div>
	</section>

	<!-- Prev/Next Navigation -->
	<nav class="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-between gap-4" aria-label="Version navigation">
		{#if data.prev}
			<a
				href="{base}/version/{data.prev.id}"
				class="
					group flex-1 p-4 rounded-xl
					border border-zinc-200 dark:border-zinc-700
					hover:border-accent-300 dark:hover:border-accent-700
					transition-colors text-left
				"
			>
				<span class="text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-accent-500">
					&larr; {t('version.prev')}
				</span>
				<span class="block mt-1 font-semibold text-zinc-900 dark:text-zinc-100">
					C# {data.prev.version}
				</span>
			</a>
		{:else}
			<div class="flex-1"></div>
		{/if}

		{#if data.next}
			<a
				href="{base}/version/{data.next.id}"
				class="
					group flex-1 p-4 rounded-xl
					border border-zinc-200 dark:border-zinc-700
					hover:border-accent-300 dark:hover:border-accent-700
					transition-colors text-right
				"
			>
				<span class="text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-accent-500">
					{t('version.next')} &rarr;
				</span>
				<span class="block mt-1 font-semibold text-zinc-900 dark:text-zinc-100">
					C# {data.next.version}
				</span>
			</a>
		{/if}
	</nav>
</article>
