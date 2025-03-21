<script lang="ts">
    export let data;
    const {events} = data
</script>

<div class="max-w-screen-xl mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#if events && events.length > 0}
            {#each events as event}
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                    <a href={event.links}>
                        <img class="rounded-t-lg object-cover h-48 w-full" src={event.imageUrl} alt={event.nom}/>
                    </a>
                    <div class="p-5 flex flex-col flex-grow">
                        <a href={event.links}>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.nom}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">{event.decriptions}</p>
                        <a href={event.links}
                           class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            {/each}
        {:else}
            <p>Aucun événement trouvé.</p>
        {/if}
    </div>
</div>
