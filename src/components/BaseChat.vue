<template>
    <div class="h-[100svh] text-white">
        <div
            class="backdrop-blur-lg bg-zinc-800/60 space-x-4 flex justify-between items-center p-4 absolute top-0 w-full"
        >
            <router-link to="/chat">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#3b82f6"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
            </router-link>
            <div class="mx-auto inline-block flex flex-col items-center">
                <!-- <div class="rounded-full w-10 h-10 bg-white"></div> -->
                <slot name="profile-pic"></slot>
                <div class="text-sm mt-1">{{ name }}</div>
            </div>
            <div class="w-6"></div>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    props: {
        name: String,
    },
    componenets: {
        RouterLink,
    },
}
</script>
