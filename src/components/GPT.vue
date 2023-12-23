<template>
    <div class="h-[90svh] overflow-scroll p-3">
        <div class="flex flex-col justify-end min-h-full pt-24">
            <TransitionGroup name="list" tag="div">
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
                                class="max-w-[75%] inline-block bg-zinc-700 rounded-xl px-3 py-2"
                            >
                                {{ item.response }}
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        </div>
    </div>
    <div class="border-2 border-zinc-800 rounded-lg p-1 px-2 flex mx-3 mt-2">
        <input
            type="text"
            class="bg-transparent block grow focus:outline-none"
            v-model="inputText"
            :placeholder="`Message ${name}`"
            @keyup.enter="fetchData"
        />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 fill-blue-500"
            :class="
                inputText
                    ? 'fill-blue-500 hover:fill-blue-400'
                    : 'fill-zinc-700'
            "
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
            if (this.inputText) {
                this.responses.push({
                    question: this.inputText,
                    response: `${this.name} is typing...`,
                })
                const currentQuestion = this.inputText
                this.inputText = ''
                axios
                    .post(this.apiUrl, {
                        message: currentQuestion,
                    })
                    .then((response) => {
                        this.responses[this.responses.length - 1] = {
                            question: currentQuestion,
                            response: response.data,
                        }
                    })
                    .catch((error) => {
                        console.error('Error fetching data:', error)
                    })
            }
        },
    },
}
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
}

.list-leave-active {
    position: absolute;
}
</style>
