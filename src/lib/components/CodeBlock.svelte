<script lang="ts">
	import { onMount } from 'svelte';

	let { code, lang = 'csharp', label = '' }: { code: string; lang?: string; label?: string } =
		$props();

	let html = $state('');
	let container: HTMLElement;

	onMount(async () => {
		const { codeToHtml } = await import('shiki');
		html = await codeToHtml(code, {
			lang,
			themes: {
				light: 'github-light',
				dark: 'github-dark'
			}
		});
	});
</script>

<div
	role="region"
	aria-label={label || `${lang} code example`}
	class="rounded-lg overflow-hidden text-sm"
	bind:this={container}
>
	{#if html}
		<div class="overflow-x-auto [&_pre]:p-4 [&_pre]:m-0 [&_code]:font-mono">
			{@html html}
		</div>
	{:else}
		<pre
			class="p-4 bg-zinc-50 dark:bg-zinc-900 overflow-x-auto"
		><code class="font-mono text-zinc-800 dark:text-zinc-200">{code}</code></pre>
	{/if}
</div>
