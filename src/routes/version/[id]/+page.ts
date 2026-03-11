import { versions, getVersion, getAdjacentVersions } from '$lib/data/versions';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const version = getVersion(params.id);
	if (!version) throw error(404, 'Version not found');

	const { prev, next } = getAdjacentVersions(params.id);

	return { version, prev, next };
};

export function entries() {
	return versions.map((v) => ({ id: v.id }));
}
