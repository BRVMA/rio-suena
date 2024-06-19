<script>
    export let episodes;

    import EpisodeList from "./EpisodeList.svelte";
    import play from "@assets/play.svg";

    let number = 0;
    $: episode = episodes[number];
</script>

<img
    src={episode.image.filename + "/m/filters:quality(80)"}
    alt="episode thumbnail"
    class="absolute inset-0 -z-10 w-full h-full object-cover brightness-75 contrast-75"
/>

<div class="mt-4 text-xl uppercase">
    <p class="font-light leading-tight">{episode.title}</p>
    <p class="font-bold">{episode.artist}</p>
</div>

<button class="p-12">
    <img src={play.src} alt="botón reproducir" class="w-16" />
</button>

<p class="self-start mb-4 text-sm">{episode.description}</p>

<div class="flex-grow">
    <EpisodeList {episodes} bind:number />
</div>
