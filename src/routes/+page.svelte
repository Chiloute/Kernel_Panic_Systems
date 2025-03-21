<script lang="ts">
    let main_image = "/images/image-main.jpg";
</script>
<div class="flex flex-col">
    <h1 class="mx-auto p-3 font-bold text-xl text-red-800">Bienvenue sur Kernel Panic Systems</h1>

    <p class="text-sm text-center mx-auto py-4 ">
        Chez Kernel Panics Systems, nous sommes une association de passionnés d'informatique et de cybersécurité de
        l'ESIEA.
    </p>
    <div class="mx-auto py-3">
        <img class="mx-auto drop-shadow-lg rounded-2xl md:size-1/2 " src={main_image} alt="main_image"/>
    </div>

    <div class="flex items-center justify-center mx-auto p-4 drop-shadow-*">
        <a href="/projets">
            <button type="button"
                    class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-md px-7 py-4 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Nos projets
            </button>
        </a>
    </div>
</div>