import PocketBase from 'pocketbase';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
console.log(apiBaseUrl);

const pb = new PocketBase(apiBaseUrl);

export default pb ;