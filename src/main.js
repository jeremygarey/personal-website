import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDierwXk89qMbJdJWhgjUnt_XMdqeN7emw',
    authDomain: 'personal-website-6887e.firebaseapp.com',
    projectId: 'personal-website-6887e',
    storageBucket: 'personal-website-6887e.appspot.com',
    messagingSenderId: '582284338316',
    appId: '1:582284338316:web:286055b2614c9ca185c7a9',
    measurementId: 'G-V1BG70H2JS',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const app = createApp(App);

app.use(router);

app.mount('#app');
