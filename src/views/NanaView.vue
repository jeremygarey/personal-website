<script setup>
import GPT from '../components/GPT.vue'
import BaseChat from '../components/BaseChat.vue'
</script>

<template>
    <base-chat name="Nana">
        <template #profile-pic>
            <img
                src="../assets/nana-profile.jpg"
                class="rounded-full h-12 w-12"
            />
        </template>
        <template #content>
            <GPT
                name="Nana"
                api-url="https://us-central1-family-gpt.cloudfunctions.net/nanaGPT"
            />
        </template>
    </base-chat>
</template>
