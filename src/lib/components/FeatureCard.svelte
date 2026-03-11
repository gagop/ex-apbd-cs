<script lang="ts">
	import type { Feature } from '$lib/types';
	import { l, t } from '$lib/i18n/index.svelte';
	import CodeBlock from './CodeBlock.svelte';

	let { feature }: { feature: Feature } = $props();

	let showJava = $state(false);
</script>

<article
	id={feature.slug}
	class="
		rounded-xl border border-zinc-200 dark:border-zinc-700
		bg-white dark:bg-zinc-800/50
		overflow-hidden
		transition-colors
	"
>
	<div class="p-6 space-y-4">
		<!-- Header -->
		<div class="flex items-start justify-between gap-3">
			<h3 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
				{feature.name}
			</h3>
			<span
				class="
					shrink-0 px-2.5 py-0.5 rounded-full text-xs font-medium
					bg-accent-100 text-accent-700
					dark:bg-accent-900 dark:text-accent-300
				"
			>
				{t(`category.${feature.category}`)}
			</span>
		</div>

		<!-- Summary -->
		<p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
			{l(feature.summary)}
		</p>

		<!-- Rationale -->
		<div class="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-4">
			<h4 class="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
				{t('feature.rationale')}
			</h4>
			<p class="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
				{l(feature.rationale)}
			</p>
		</div>

		<!-- C# Code -->
		<div>
			<h4 class="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
				{t('feature.example')}
			</h4>
			<CodeBlock code={feature.csharpCode} lang="csharp" label="{feature.name} C# example" />
		</div>

		<!-- Java Comparison Toggle -->
		{#if feature.javaEquivalent}
			<div>
				<button
					onclick={() => (showJava = !showJava)}
					class="
						text-sm font-medium
						text-accent-600 dark:text-accent-400
						hover:text-accent-700 dark:hover:text-accent-300
						transition-colors
						focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500
						rounded px-1 -ml-1
					"
					aria-expanded={showJava}
				>
					{showJava ? t('feature.hideJava') : t('feature.showJava')}
				</button>

				{#if showJava}
					<div class="mt-2 space-y-2">
						<h4 class="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
							{t('feature.javaComparison')}
						</h4>
						<CodeBlock
							code={feature.javaEquivalent}
							lang="java"
							label="{feature.name} Java equivalent"
						/>
					</div>
				{/if}
			</div>
		{/if}

		<!-- Tip for Java developers -->
		{#if feature.tip}
			<div
				class="
					flex gap-3 p-4 rounded-lg
					bg-amber-50 dark:bg-amber-950/30
					border border-amber-200 dark:border-amber-800
				"
			>
				<span class="shrink-0 text-amber-600 dark:text-amber-400 text-lg" aria-hidden="true">*</span>
				<div>
					<h4 class="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-0.5">
						{t('feature.tip')}
					</h4>
					<p class="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
						{l(feature.tip)}
					</p>
				</div>
			</div>
		{/if}
	</div>
</article>
