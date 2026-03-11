import type { Locale, Localized } from '$lib/types';
import { ui } from './translations';

let locale = $state<Locale>('en');

export function getLocale(): Locale {
	return locale;
}

export function setLocale(newLocale: Locale) {
	locale = newLocale;
	if (typeof document !== 'undefined') {
		document.documentElement.lang = newLocale;
		localStorage.setItem('locale', newLocale);
	}
}

export function initLocale() {
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem('locale') as Locale | null;
		if (saved === 'en' || saved === 'pl') {
			locale = saved;
		} else if (navigator.language.startsWith('pl')) {
			locale = 'pl';
		}
		document.documentElement.lang = locale;
	}
}

export function l(obj: Localized): string {
	return obj[locale];
}

export function t(key: string): string {
	const entry = ui[key];
	if (!entry) return key;
	return entry[locale];
}
