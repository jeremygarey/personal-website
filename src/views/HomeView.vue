<template>
    <div>
        <div class="sm:hidden">
            <div
                class="h-12 w-full absolute top-0 bg-black flex items-center z-40 lg:hidden"
            >
                <div class="container px-4 mx-auto flex justify-between">
                    <a href="https://boxedwaterisbetter.com/" target="_blank">
                        <box-logo class="fill-zinc-300 w-6 h-6" />
                    </a>
                    <div class="gap-4 hidden sm:flex">
                        <a class="font-light" href="#">Hey</a>
                        <a class="font-light" href="#">I'm</a>
                        <a class="font-light" href="#">Jeremy</a>
                        <a class="font-light" href="#">And</a>
                        <a class="font-light" href="#">This</a>
                        <a class="font-light" href="#">Is</a>
                        <a class="font-light" href="#">My</a>
                        <a class="font-light" href="#">Website</a>
                    </div>
                    <div class="flex gap-6 text-zinc-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            />
                        </svg>
                        <button @click="isOpen = !isOpen">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                                v-show="!isOpen"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                                v-show="isOpen"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>

                            <!-- TODO: add menu here -->
                            <!-- <div
                                class="absolute top-0 left-0 right-0 z-100 bg-black text-zinc-300"
                            >
                                <div>hey there</div>
                            </div> -->
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="h-[100svh] flex flex-col justify-between items-center bg-cover bg-top pt-12"
                style="background-image: url('/img/vision-pro-profile.webp')"
            >
                <div class="sticky top-0 left-0 w-full z-50 text-white">
                    <div
                        class="h-12 w-full bg-black/30 backdrop-blur-lg flex justify-between items-center px-4"
                    >
                        <div class="text-xl font-medium">Jeremy Garey</div>
                        <div class="flex gap-3">
                            <button @click="isMenu2Open = !isMenu2Open">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                    v-show="!isMenu2Open"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                    v-show="isMenu2Open"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                    />
                                </svg>
                            </button>
                            <a
                                href="https://www.instagram.com/jeremy.garey/"
                                target="_blank"
                                class="rounded-full bg-blue-500 text-xs px-3 py-1"
                                >Say hi</a
                            >
                        </div>
                    </div>
                    <Transition name="slide-fade">
                        <div
                            class="absolute top-14 right-4 text-zinc-300"
                            v-show="isMenu2Open"
                        >
                            <div
                                class="bg-black/30 backdrop-blur-lg p-4 rounded-lg"
                            >
                                <ul class="dropdown-menu">
                                    <li class="font-bold">
                                        Some things I love:
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.bible.com/bible/97/1JN.4.9.MSG"
                                            target="_blank"
                                            >Jesus</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.youtube.com/watch?v=Iocivkb9Qeo"
                                            target="_blank"
                                            >Drums</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="https://vsco.co/jeremygarey/media/62b91961fd64e2655d62d344"
                                            target="_blank"
                                            >Wakeboarding</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="https://hackertyper.com/"
                                            target="_blank"
                                            >Web Dev</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Transition>
                </div>
                <div class="text-center pb-12">
                    <div class="font-bold text-4xl text-black">
                        Jeremy Garey
                    </div>
                    <p class="text-blue-600 mt-2">
                        Hang tight. Website coming soon.
                    </p>
                </div>
            </div>
            <div class="h-40 text-white flex justify-center items-center">
                <div class="text-center">
                    <p class="text-lg font-semibold">hey there 👋🏻</p>
                    <p class="text-xs mt-1">
                        you should totally check out
                        <a
                            class="text-blue-400"
                            href="https://vsco.co/jeremygarey/gallery"
                            >my vsco</a
                        >. it's pretty fun
                    </p>
                </div>
            </div>
        </div>
        <div
            class="hidden sm:flex flex-col justify-center items-center gap-4 text-zinc-200 font-mono h-[100svh]"
        >
            <h1 class="font-semibold text-3xl">hey there 👋🏻</h1>
            <p class="mt-8">i haven't built a desktop site quite yet...</p>
            <p>
                but in the meantime, you can follow me
                <a
                    href="https://www.instagram.com/jeremy.garey/"
                    target="_blank"
                    class="text-blue-400 font-semibold"
                    >on instagram</a
                >
            </p>
            <p>
                also, check out
                <a
                    href="https://vsco.co/jeremygarey/gallery"
                    target="_blank"
                    class="text-blue-400 font-semibold"
                    >my vsco</a
                >
            </p>
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
