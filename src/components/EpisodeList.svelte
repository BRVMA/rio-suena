<script>
    import { onMount } from "svelte";

    export let episodes;

    let listContainer;
    let list;

    onMount(() => {
        function setListHeight() {
            if (window.innerWidth < 1280) {
                const usedHeight = document.body.offsetHeight - listContainer.offsetHeight;
                const remainingHeight = window.innerHeight - usedHeight;
                list.style.maxHeight = `${remainingHeight}px`;
            } else {
                list.style.maxHeight = '60vh';
            }
        }

        setListHeight();

        window.addEventListener('resize', setListHeight);
    });
</script>

<div class="flex flex-col px-6 py-4 max-w-lg bg-black bg-opacity-40 rounded-3xl">
    <h2 class="mb-1 font-medium text-2xl">CAPÍTULOS</h2>
    <h3 class="text-sm">TEMPORADA 1</h3>

    <div class="flex-grow mt-2" bind:this={listContainer}>
        <ul class="mt-2 p-2 space-y-4 overflow-auto" bind:this={list}>
            {#each episodes as episode}
                <li>
                    <a
                        href={`/capitulos/${episode.number}-${episode.slug}`}
                        class="grid grid-cols-[3fr_4fr] gap-2"
                    >
                        <img
                            src={episode.image.filename + '/m/176x132'}
                            alt="portada capítulo {episode.number}"
                            class="rounded-xl aspect-square object-cover shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5),_0_4px_6px_-4px_rgba(0,0,0,0.5)]"
                        >

                        <div>
                            <h4 class="mb-1 text-sm uppercase leading-tight">
                                <span class="font-light">{episode.title}</span><br>
                                <span class="font-bold">{episode.artist}</span>
                            </h4>

                            <p class="text-xs">{episode.description}</p>
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: white; 
  border-radius: 5px;
}
</style>
