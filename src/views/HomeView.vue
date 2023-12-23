<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="h-[100svh] flex justify-center items-center font-mono">
        <div class="text-center">
            <p>jeremygarey.com</p>
            <p class="text-yellow-500 mt-4">coming soon</p>
            <p class="text-zinc-500 mt-20">
                for now, you can check out
                <router-link to="/chat" class="text-green-600 hover:underline"
                    >BerrymanGPT</router-link
                >
            </p>
        </div>
    </div>
</template>
