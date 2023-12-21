<template>
    <div>
        <h1 class="text-3xl font-bold">MargoGPT</h1>
        <input
            type="text"
            class="bg-transparent"
            v-model="inputText"
            @change="fetchData"
            placeholder="Enter text"
        />
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
    methods: {
        fetchData() {
            axios
                .get('https://api.example.com/data', {
                    params: {
                        text: this.inputText,
                    },
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
