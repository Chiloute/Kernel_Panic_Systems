import type {PageServerLoad} from './$types';
import  pb from '$lib/server/pocketbase'
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const load: PageServerLoad = async () => {
	try {
		const events = await pb.collection('Events').getFullList({
			sort: '+date',
		});

		const eventsWithImages = events.map(event => ({
			...event,
			imageUrl: `${apiBaseUrl}/api/files/${event.collectionId}/${event.id}/${event.image}`,
		}));


		//console.log('Projets récupérés:', events);
		return { events: eventsWithImages };
	} catch (error) {
		console.error('❌ Erreur lors de la récupération des projets:', error);
		return { events: [], error: 'Erreur lors de la récupération des projets' };
	}
};
