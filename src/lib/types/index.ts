export interface Localized {
	en: string;
	pl: string;
}

export type Locale = 'en' | 'pl';

export type FeatureCategory =
	| 'syntax'
	| 'types'
	| 'async'
	| 'linq'
	| 'pattern-matching'
	| 'performance'
	| 'records'
	| 'other';

export interface Feature {
	name: string;
	slug: string;
	category: FeatureCategory;
	summary: Localized;
	rationale: Localized;
	csharpCode: string;
	javaEquivalent?: string;
	tip?: Localized;
}

export interface CSharpVersion {
	id: string;
	version: string;
	dotnetVersion: string;
	year: number;
	tagline: Localized;
	features: Feature[];
}
