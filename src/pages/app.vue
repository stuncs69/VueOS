<template>
    <div id="top">
        <button>Openened Applications</button>
        <p ref="time">null</p>
        <p class="card">Uptime: {{ (uptime / 100).toFixed(1) }}</p>
    </div>
    <!-- wallpaper handler -->
    <img :src="wallpaper" id="wallpaper" ref="wallpaper">
</template>

<style>
.card {
    color: white;
    background-color: gray;
    padding: 0.2rem;
    border-radius: 10rem;
}

#top {
    width: 100%;
    background-color: white;
    height: max-content;
    top: 0;
    max-height: 4rem;
    left: 0;
    display: flex;
    position: absolute;
    z-index: 2;
    line-height: 2rem;
    justify-content: space-around;
}

#top>* {
    margin: 0.2rem;
    padding: 0.3rem;
}

#wallpaper {
    z-index: 1;
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
    width: 100%;
    /* Disallow dragging the background */
    -webkit-user-drag: none;
    height: 100%;
}
</style>

<script lang="ts">

export default {
    data() {
        return {
            debug: '',
            uptime: 0,
            wallpaper: "https://www.gannett-cdn.com/presto/2019/09/24/USAT/ca65ec63-180e-4edd-b92e-38cd0af795a9-catalina.jpg?crop=1279%2C720%2Cx0%2Cy278&width=1200"
        }
    },
    async mounted() {
        setInterval(() => {
            this.uptime++;
            //@ts-ignore
            this.$refs.time.innerHTML = new Date().toLocaleString();
        }, 1)

        setInterval(async () => {
            await $fetch("/api/validateToken", {
                method: "POST",
                body: JSON.stringify({
                    token: "debug",
                    id: 1
                })
            }).then((result: any) => {
                if (JSON.parse(result).type == "GOOD_AUTH") {
                    //ignore
                } else {
                    // refer to login screen for proper AUTH
                    window.location.href = "/login"
                }
            })
        }, 1000)




    }
}

</script>