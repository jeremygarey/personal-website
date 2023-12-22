<script setup>
import GPT from '../components/GPT.vue'
</script>

<template>
    <div class="space-y-4">
        <h1 class="text-3xl font-bold">NanaGPT</h1>
        <GPT
            name="Nana"
            api-url="https://us-central1-family-gpt.cloudfunctions.net/nanaGPT"
        />
    </div>
</template>
