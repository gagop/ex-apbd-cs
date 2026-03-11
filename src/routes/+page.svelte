<script lang="ts">
	import { versions } from '$lib/data/versions';
	import { t } from '$lib/i18n/index.svelte';
	import VersionTimeline from '$lib/components/VersionTimeline.svelte';
</script>

<!-- Hero Section -->
<section class="text-center py-12 sm:py-20">
	<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
		{t('hero.title')}
	</h1>
	<p class="mt-4 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
		{t('hero.subtitle')}
	</p>
	<div class="mt-6 flex items-center justify-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
		<span class="flex items-center gap-1.5">
			<span class="inline-block w-2 h-2 rounded-full bg-accent-500"></span>
			{versions.length} versions
		</span>
		<span class="flex items-center gap-1.5">
			<span class="inline-block w-2 h-2 rounded-full bg-accent-500"></span>
			{versions.reduce((acc, v) => acc + v.features.length, 0)} features
		</span>
		<span class="flex items-center gap-1.5">
			<span class="inline-block w-2 h-2 rounded-full bg-accent-500"></span>
			{versions[versions.length - 1].year - versions[0].year}+ years
		</span>
	</div>
	<a
		href="#timeline"
		class="
			mt-8 inline-flex items-center gap-2
			px-6 py-3 rounded-xl
			bg-accent-600 hover:bg-accent-700
			text-white font-medium
			transition-colors
			focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500
		"
	>
		{t('hero.cta')}
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
	</a>
</section>

<!-- Timeline Section -->
<section id="timeline" class="py-8">
	<h2 class="sr-only">{t('timeline.title')}</h2>
	<VersionTimeline {versions} />
</section>
