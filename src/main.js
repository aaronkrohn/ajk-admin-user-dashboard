import Vue from 'vue'
import App from './App.vue'

import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDkRMdDL-Tvjd4QQuSH4cLojVNneIvHPEc",
    authDomain: "ajk-admin-login-dashboard.firebaseapp.com",
    databaseURL: "https://ajk-admin-login-dashboard.firebaseio.com",
    projectId: "ajk-admin-login-dashboard",
    storageBucket: "ajk-admin-login-dashboard.appspot.com",
    messagingSenderId: "171306214490"
};

firebase.initializeApp(config);

new Vue({
  el: '#app',
  render: h => h(App)
})
