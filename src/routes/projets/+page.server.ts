import type {PageServerLoad} from './$types';
import  pb from '$lib/server/pocketbase'
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const load: PageServerLoad = async () => {
    try {
        const projects = await pb.collection('Projects').getFullList({
            sort: '-created',
        });

        const projectsWithImages = projects.map(project => ({
            ...project,
            imageUrl: `${apiBaseUrl}/api/files/${project.collectionId}/${project.id}/${project.image}`,
        }));

       // console.log('Projets récupérés:', projects);
        return { projects: projectsWithImages };
    } catch (error) {
        console.error('❌ Erreur lors de la récupération des projets:', error);
        return { projects: [], error: 'Erreur lors de la récupération des projets' };
    }
};
