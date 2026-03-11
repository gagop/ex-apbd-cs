<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { initLocale, t } from '$lib/i18n/index.svelte';
	import SkipLink from '$lib/components/SkipLink.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let { children } = $props();

	onMount(() => {
		initLocale();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{t('site.title')}</title>
	<meta name="description" content={t('site.description')} />
</svelte:head>

<SkipLink />

<div class="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
	<!-- Header -->
	<header class="sticky top-0 z-30 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
		<div class="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
			<a
				href="{base}/"
				class="
					font-bold text-lg tracking-tight
					text-zinc-900 dark:text-zinc-100
					hover:text-accent-600 dark:hover:text-accent-400
					transition-colors shrink-0
				"
				aria-current={undefined}
			>
				C# <span class="text-accent-600 dark:text-accent-400">Evolution</span>
			</a>

			<div class="flex-1 flex justify-center">
				<SearchBar />
			</div>

			<div class="flex items-center gap-2 shrink-0">
				<LanguageSwitcher />
				<ThemeToggle />
			</div>
		</div>
	</header>

	<!-- Main content -->
	<main id="main-content" class="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-zinc-200 dark:border-zinc-800">
		<div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-center">
			<p class="text-sm text-zinc-500 dark:text-zinc-400">
				{t('footer.description')}
			</p>
			<p class="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
				C# 1.0 (2002) &ndash; C# 13 (2024)
			</p>
		</div>
	</footer>
</div>
