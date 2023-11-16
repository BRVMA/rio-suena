<script>
    import MenuSvg from "./icons/MenuSVG.svelte";

    export let pages;
</script>

<button id="menu-btn" class="flex items-center ml-auto px-6 py-4 text-xl">
    <MenuSvg clase="h-5 mr-3" />
    MENÚ
</button>

<dialog id="menu" class="open:animate-fade-in">
    <form method="dialog">
        <button type="submit">
            X
        </button>
    </form>

    <nav>
        <ol>
            {#each pages as page }
                <li>
                    <a href={`/${page.path}`}>
                        {page.label}
                    </a>
                </li>
            {/each}
        </ol>
    </nav>
</dialog>
