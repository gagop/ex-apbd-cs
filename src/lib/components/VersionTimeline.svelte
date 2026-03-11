<script lang="ts">
	import type { CSharpVersion } from '$lib/types';
	import { l, t } from '$lib/i18n/index.svelte';
	import { base } from '$app/paths';

	let { versions }: { versions: CSharpVersion[] } = $props();
</script>

<nav aria-label={t('timeline.title')}>
	<ol class="relative">
		{#each versions as version, i}
			<li class="relative pl-10 pb-10 last:pb-0">
				<!-- Vertical line -->
				{#if i < versions.length - 1}
					<div
						class="
							absolute left-[15px] top-[28px] bottom-0 w-px
							bg-zinc-200 dark:bg-zinc-700
						"
						aria-hidden="true"
					></div>
				{/if}

				<!-- Dot -->
				<div
					class="
						absolute left-0 top-1
						w-[30px] h-[30px]
						rounded-full border-2
						border-accent-500 bg-white dark:bg-zinc-900
						flex items-center justify-center
						text-xs font-bold text-accent-600 dark:text-accent-400
					"
					aria-hidden="true"
				>
					{version.year % 100}
				</div>

				<!-- Content -->
				<a
					href="{base}/version/{version.id}"
					class="
						group block rounded-xl p-5
						border border-transparent
						hover:border-accent-200 dark:hover:border-accent-800
						hover:bg-accent-50/50 dark:hover:bg-accent-950/20
						transition-all
						focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500
					"
				>
					<div class="flex items-baseline gap-3 mb-1">
						<span class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
							C# {version.version}
						</span>
						<span class="text-sm text-zinc-500 dark:text-zinc-400">
							{version.year}
						</span>
						<span class="text-xs text-zinc-400 dark:text-zinc-500">
							{version.dotnetVersion}
						</span>
					</div>

					<p class="text-zinc-600 dark:text-zinc-400 text-sm mb-2">
						{l(version.tagline)}
					</p>

					<div class="flex flex-wrap gap-2">
						{#each version.features.slice(0, 4) as feature}
							<span
								class="
									text-xs px-2 py-0.5 rounded-md
									bg-zinc-100 dark:bg-zinc-800
									text-zinc-600 dark:text-zinc-400
									group-hover:bg-accent-100 group-hover:text-accent-700
									dark:group-hover:bg-accent-900 dark:group-hover:text-accent-300
									transition-colors
								"
							>
								{feature.name}
							</span>
						{/each}
						{#if version.features.length > 4}
							<span class="text-xs text-zinc-400 dark:text-zinc-500 self-center">
								+{version.features.length - 4} more
							</span>
						{/if}
					</div>
				</a>
			</li>
		{/each}
	</ol>
</nav>
