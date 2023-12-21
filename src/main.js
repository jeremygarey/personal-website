import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyD7mFnPaePRbECc9k4mTkB3l-Ilu21Bd5Y',
    authDomain: 'family-gpt.firebaseapp.com',
    projectId: 'family-gpt',
    storageBucket: 'family-gpt.appspot.com',
    messagingSenderId: '970027000660',
    appId: '1:970027000660:web:a54a2da76a2628ddb89ec1',
    measurementId: 'G-MZZ3RED0P0',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

const app = createApp(App)

app.use(router)

app.mount('#app')
