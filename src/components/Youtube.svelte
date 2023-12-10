<script>
    // 2. This code loads the IFrame Player API code asynchronously.
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    let player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            width: '1920',
            height: '1080',
            videoId: '5EBdEoZUH7o',
            playerVars: {
                color: 'white',
                'playsinline': 0,
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
            }
        });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(_event) {
        const iframe = player.getIframe();
        iframe.style.setProperty('width', '100%');
        iframe.style.setProperty('height', '100%');
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    function onPlayerStateChange(event) {

    }
</script>

<div id="player"></div>
