import type { PageServerLoad } from './$types';
import { SoftwareRepo } from '$src/lib/repository/software';

export const load = (async () => {
	try {

		const softwareRepo = new SoftwareRepo();
		const softwareList = await softwareRepo.getAllSoftware();

		return { softwareList };
	} catch (error) {
		console.error('Error fetching data:', error);
		return { softwareList: [] }; // Provide a default value or handle the error appropriately
	}
}) satisfies PageServerLoad;
