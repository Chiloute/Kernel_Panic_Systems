<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>


<div class="bg-gray-900 text-white">
<div class="flex flex-col min-h-screen ">
    <!-- Navbar -->
    <Navbar />

    <!-- Contenu principal -->
    <main class="flex-grow mx-auto p-5">
        <slot></slot>
    </main>

    <!-- Footer -->
    <Footer />
</div>

</div>