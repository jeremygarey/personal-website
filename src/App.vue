<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="container mt-4 text-white">
        <header>
            <div class="wrapper text-white">
                <nav class="text-green-500 space-x-4">
                    <RouterLink to="/" class="font-bold">FamGPT</RouterLink>
                    <RouterLink to="/margo">Aunt Margo</RouterLink>
                    <RouterLink to="/nana">Nana</RouterLink>
                </nav>
            </div>
        </header>
        <div class="mt-4">
            <RouterView />
        </div>
    </div>
</template>
