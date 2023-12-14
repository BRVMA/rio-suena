<script>
    import { onMount } from 'svelte';
    import XSVG from './icons/XSVG.svelte';
    import MenuSVG from './icons/MenuSVG.svelte';

    import play from '../img/play.svg';

    export let episodes;

    let listContainer;
    let list;

    let open = false;

    onMount(() => {
        function setListHeight() {
            if (window.innerWidth < 640) {
                const usedHeight = document.body.offsetHeight - listContainer.offsetHeight;
                const remainingHeight = window.innerHeight - usedHeight;
                list.style.maxHeight = `${remainingHeight}px`;
                open = true;
            } else {
                list.style.maxHeight = '60vh';
                open = false;
            }
        }

        setListHeight();

        window.addEventListener('resize', setListHeight);
    });
</script>

<div
    class={'flex flex-col lg:mr-16 2xl:mr-32 sm:mb-4 px-6 py-4 w-full bg-black bg-opacity-40 rounded-3xl ' + (open ? 'lg:max-w-lg' : 'sm:max-w-3xl bg-transparent')}
>
    <div class="flex justify-between sm:justify-end">
        <div class="sm:hidden">
            <h2 class="mb-1 font-medium text-2xl">CAPÍTULOS</h2>
            <h3 class="text-sm">TEMPORADA 1</h3>
        </div>

        <button
            class="hidden xl:block h-6"
            on:click={() => open = !open}
        >
            {#if open}
                <XSVG clase="w-6" />
            {:else}
                <MenuSVG clase="w-8" />
            {/if}
        </button>
    </div>

    <div class="flex-grow mt-2" bind:this={listContainer}>
        <ul
            class={'gap-4 mt-2 p-2 space-y-4 overflow-auto ' + (open ? '' : 'sm:flex sm:space-y-0')}
            bind:this={list}
        >
            {#each episodes as episode}
                <li>
                    <a
                        href={`/capitulos/${episode.number}-${episode.slug}`}
                        class={'grid grid-cols-[3fr_4fr] flex-col gap-2 ' + (open ? '' : 'sm:flex')}
                    >
                        <div class={'relative w-fit h-fit ' + (open ? '' : 'sm:w-[176px]')}>
                            <img
                                src={episode.image.filename + '/m/176x132'}
                                alt="portada capítulo {episode.number}"
                                class="rounded-xl aspect-square object-cover shadow-[0_10px_15px_-3px_rgba(0,0,0,0.5),_0_4px_6px_-4px_rgba(0,0,0,0.5)] brightness-75 hover:brightness-100 contrast-75 hover:contrast-100 transition-all"
                            >

                            <img
                                src={play.src}
                                alt="botón reproducir"
                                width="40"
                                height="40"
                                class="absolute inset-0 m-auto"
                            >
                        </div>

                        <div>
                            <h4 class="mb-1 text-sm uppercase leading-tight">
                                <span class="font-light">{episode.title}</span><br>
                                <span class="font-bold">{episode.artist}</span>
                            </h4>

                            <p class={'text-xs ' + (open ? '' : 'sm:hidden')}>{episode.description}</p>
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
