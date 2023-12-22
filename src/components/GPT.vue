<template>
    <div class="flex flex-col h-[80vh] overflow-scroll">
        <div>
            <div v-for="(item, index) in responses" :key="index">
                <div class="mb-2">
                    <div class="flex justify-end">
                        <div
                            class="max-w-[75%] inline-block bg-blue-500 rounded-xl px-3 py-2"
                        >
                            {{ item.question }}
                        </div>
                    </div>

                    <div class="flex justify-start mt-2">
                        <div
                            class="max-w-[75%] inline-block bg-zinc-700 rounded-2xl px-3 py-2"
                        >
                            {{ item.response }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="border-2 border-zinc-800 rounded-lg p-1 px-2 flex mt-0">
        <input
            type="text"
            class="bg-transparent block grow focus:outline-none"
            v-model="inputText"
            :placeholder="`Message ${name}`"
        />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 fill-blue-500 hover:fill-blue-400"
            @click="fetchData"
        >
            <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                clip-rule="evenodd"
            />
        </svg>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            inputText: '',
            responses: [],
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
                    this.responses.push({
                        question: this.inputText,
                        response: response.data,
                    })
                    this.inputText = ''
                })
                .catch((error) => {
                    console.error('Error fetching data:', error)
                })
        },
    },
}
</script>
