import type { Software } from '../types/software';


export class SoftwareMap {
	public static toDomain(data: any): Software {
        const softwareDto: Software = {
			id: data.id,
			name: data.name,
			shortDescription: data.short_description,
			longDescription: data.long_description
        };

        return softwareDto;
    }






}