<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="font-mono flex flex-col items-center">
        <h1 class="font-bold text-3xl text-green-500 mt-24">BerrymanGPT</h1>
        <div>
            <p class="mt-32">Chat with:</p>
            <router-link
                to="/chat/margo"
                class="block text-green-500 hover:underline"
                >Aunt Margo</router-link
            >
            <router-link
                to="/chat/nana"
                class="block text-green-500 hover:underline"
                >Nana</router-link
            >
        </div>
    </div>
</template>
