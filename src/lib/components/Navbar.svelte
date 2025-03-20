<script lang="ts">
    import { fade } from "svelte/transition";
    import { afterNavigate } from '$app/navigation';
    import { onMount, tick } from 'svelte';
    import { page } from '$app/stores';

    let kps = "/images/kps_logo.svg";
    let isOpen = false;

    // Ferme le menu lors d'un clic en dehors
    function handleClickOutside(event: MouseEvent) {
        if (isOpen) {
            const navbar = document.getElementById("navbar-default");
            const button = document.querySelector("button[data-collapse-toggle]");

            if (navbar && !navbar.contains(event.target as Node) && button && !button.contains(event.target as Node)) {
                isOpen = false;
                tick(); // Force la mise à jour de l'état
            }
        }
    }

    // Ferme le menu lors d'un changement de page
    afterNavigate(() => {
        isOpen = false;
    });

    onMount(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    });

    // Vérifie si le lien est actif
    function isActive(path: string) {
        return $page.url.pathname === path;
    }
</script>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={kps} class="h-13" alt="KPS Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kernel Panic Systems</span>
        </a>
        <button on:click={() => isOpen = !isOpen} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isOpen}>
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div transition:fade class={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="/" class={`block py-2 px-3 rounded-sm md:p-0 ${isActive("/") ? "text-white bg-red-700 md:bg-transparent md:text-red-700 dark:text-white md:dark:text-red-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}>Home</a>
                </li>
                <li>
                    <a href="/projets" class={`block py-2 px-3 rounded-sm md:p-0 ${isActive("/projets") ? "text-white bg-red-700 md:bg-transparent md:text-red-700 dark:text-white md:dark:text-red-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}>Nos Projets</a>
                </li>
                <li>
                    <a href="/events" class={`block py-2 px-3 rounded-sm md:p-0 ${isActive("/events") ? "text-white bg-red-700 md:bg-transparent md:text-red-700 dark:text-white md:dark:text-red-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}>Events</a>
                </li>
                <li>
                    <a href="/listes" class={`block py-2 px-3 rounded-sm md:p-0 ${isActive("/listes") ? "text-white bg-red-700 md:bg-transparent md:text-red-700 dark:text-white md:dark:text-red-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}>Liste</a>
                </li>
                <li>
                    <a href="/about" class={`block py-2 px-3 rounded-sm md:p-0 ${isActive("/about") ? "text-white bg-red-700 md:bg-transparent md:text-red-700 dark:text-white md:dark:text-red-500" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}`}>Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
