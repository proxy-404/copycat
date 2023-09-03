<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    console.log(data.softwareList);
</script>

software

{#each data.softwareList as software}
	<div class="card card-hover w-1/4">
        <header class="card-header">
            <img src="src/lib/storage/software_images/{software.id}.jpg" alt="">
        </header>
        <section class="p-4">
            <h3>{software.name}</h3>
            <p>{software.shortDescription}</p>
        </section>
        <footer class="card-footer">
            footer
        </footer>
    </div>

{/each}