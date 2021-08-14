import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCc5qyqSnvjnqDag2CeoIiGwe-XsX4WzT8",
    authDomain: "equine-statera.firebaseapp.com",
    databaseURL: "https://equine-statera-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "equine-statera",
    storageBucket: "equine-statera.appspot.com",
    messagingSenderId: "761214978336",
    appId: "1:761214978336:web:3ecd6b073624876a726f45",
    measurementId: "G-LT61RDSFHG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')