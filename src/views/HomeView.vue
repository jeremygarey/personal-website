<template>
    <div class="container px-4 py-16 max-w-screen-sm">
        <div
            class="flex flex-col justify-center items-center gap-12 text-zinc-200 font-mono"
        >
            <h1 class="font-semibold text-3xl">hey there! it's Jeremy 👋🏻</h1>
            <div class="flex gap-4 items-center">
                <p>this is me 👉🏻</p>
                <div
                    class="w-24 h-24 rounded-full bg-cover bg-center"
                    style="background-image: url('/img/jeremy-profile.jpg')"
                ></div>
            </div>
            <p>
                I'm a software engineer working at
                <a
                    href="https://mirusresearch.com"
                    target="_blank"
                    class="text-orange-300"
                    >Mirus Research</a
                >.
            </p>
            <div>
                <p>
                    I play the drums and sometimes make covers of fun songs.
                    Here's where you can check them out:
                </p>
                <div
                    class="gap-2 mt-4 text-sm font-sans font-bold grid grid-cols-3"
                >
                    <a
                        href="https://www.youtube.com/@jeremyondrums"
                        target="_blank"
                        class="px-2 py-3 bg-red-100 text-red-700 rounded-lg flex gap-2 items-center justify-center"
                    >
                        <div
                            class="w-5 h-5 rounded-full bg-cover bg-right"
                            style="
                                background-image: url('/img/drum-profile.jpg');
                            "
                        ></div>
                        YouTube
                    </a>
                    <a
                        href="https://www.tiktok.com/@jeremygarey"
                        target="_blank"
                        class="px-2 py-3 bg-emerald-100 text-emerald-700 rounded-lg flex gap-2 items-center justify-center"
                    >
                        <div
                            class="w-5 h-5 rounded-full bg-cover bg-right"
                            style="
                                background-image: url('/img/jeremy-profile.jpg');
                            "
                        ></div>
                        TikTok
                    </a>
                    <a
                        href="https://www.instagram.com/jeremyondrums"
                        target="_blank"
                        class="px-2 py-3 bg-fuchsia-100 text-fuchsia-700 rounded-lg flex gap-2 items-center justify-center"
                    >
                        <div
                            class="w-5 h-5 rounded-full bg-cover bg-right"
                            style="
                                background-image: url('/img/drum-profile.jpg');
                            "
                        ></div>
                        Instagram
                    </a>
                </div>
            </div>
            <p>
                I also love
                <a
                    href="https://www.bible.com/bible/97/1JN.4.9.MSG"
                    target="_blank"
                    class="text-blue-400 font-semibold"
                    >Jesus</a
                >,
                <a
                    href="https://vsco.co/jeremygarey/media/62b91961fd64e2655d62d344"
                    target="_blank"
                    class="text-blue-400 font-semibold"
                    >wakeboarding</a
                >, and
                <a
                    href="https://boxedwaterisbetter.com/"
                    target="_blank"
                    class="text-blue-400 font-semibold"
                    >Boxed Water</a
                >.
            </p>
            <div>
                <p>Last thing - here's my IG and VSCO :)</p>
                <div class="grid grid-cols-2 gap-2 text-sm mt-4">
                    <a
                        href="https://www.instagram.com/jeremy.garey"
                        target="_blank"
                        class="bg-fuchsia-100 text-fuchsia-700 font-sans py-2 px-4 rounded-xl font-bold flex gap-2 items-center"
                    >
                        <div
                            class="w-8 h-8 rounded-full bg-cover bg-right"
                            style="
                                background-image: url('/img/jeremy-profile.jpg');
                            "
                        ></div>
                        @jeremy.garey
                    </a>
                    <a
                        href="https://vsco.co/jeremygarey"
                        target="_blank"
                        class="bg-zinc-200 text-zinc-700 font-sans py-2 px-4 rounded-xl font-bold flex gap-2 items-center"
                    >
                        <div
                            class="w-8 h-8 rounded-full bg-cover bg-right"
                            style="
                                background-image: url('/img/camera-profile.jpg');
                            "
                        ></div>
                        @jeremy.garey
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BoxLogo from '../components/BoxLogo.vue';

export default {
    data() {
        return {
            isMenu2Open: false,
        };
    },
    components: {
        BoxLogo,
    },
};
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
