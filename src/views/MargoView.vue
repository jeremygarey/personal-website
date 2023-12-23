<script setup>
import GPT from '../components/GPT.vue'
import BaseChat from '../components/BaseChat.vue'
</script>

<template>
    <base-chat name="Aunt Margo">
        <template #profile-pic>
            <img
                src="../assets/margo-profile.png"
                class="rounded-full h-12 w-12"
            />
        </template>
        <template #content>
            <GPT
                name="Aunt Margo"
                api-url="https://us-central1-family-gpt.cloudfunctions.net/margoGPT"
            />
        </template>
    </base-chat>
</template>
