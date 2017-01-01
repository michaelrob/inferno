// src/index.js

import Vue from 'vue'
import auth from './auth'
import App from './components/App.vue'
import Home from './components/Home.vue'
import SecretQuote from './components/SecretQuote.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

// Check the users auth status when the app starts
auth.checkAuth()

// Optional
Vue.http.headers.common['Authorization'] = auth.getAuthHeader();

export var router = new VueRouter()

// Set up routing and match routes to components
router.map({
  '/home': {
    component: Home
  },
  'secretquote': {
    component: SecretQuote
  },
  '/login': {
    component: Login
  },
  '/signup': {
    component: SignUp
  }
})

// Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/home'
})

// Start the app on the #app div
router.start(App, '#app')