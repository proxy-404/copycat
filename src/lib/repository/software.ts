import type { Software } from '$lib/types/software';
import { supabase } from '$lib/httpClients/supabaseClient';
import { SoftwareMap } from '$lib/mappers/software';

export class SoftwareRepo {
	async getAllSoftware(): Promise<Software[]> {
		try {
			const { data } = await supabase.from('Software').select();

			let allSoftware: Software[] = [];
			if (data) {
				allSoftware = data.map((item) => SoftwareMap.toDomain(item));
			}

			return allSoftware;

		} catch (error) {
			console.error('Error fetching (Software) data:', error);
			throw error;
		}
	}
}
