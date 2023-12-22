<template>
    <div class="space-y-4">
        <input
            type="text"
            class="bg-transparent block"
            v-model="inputText"
            placeholder="Enter text"
        />
        <button class="bg-green-800 rounded p-1 px-3" @click="fetchData">
            Ask {{ name }}
        </button>
        <div>{{ responseData }}</div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            inputText: '',
            responseData: '',
        }
    },
    props: {
        name: String,
        apiUrl: String,
    },
    methods: {
        fetchData() {
            axios
                .post(this.apiUrl, {
                    message: this.inputText,
                })
                .then((response) => {
                    this.responseData = response.data
                })
                .catch((error) => {
                    console.error('Error fetching data:', error)
                })
        },
    },
}
</script>
