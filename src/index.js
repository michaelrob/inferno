import Vue from 'vue'
import auth from './auth'
import App from './components/App.vue'
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Story from './components/Story.vue'
import Stories from './components/Stories.vue'
import NewStory from './components/NewStory.vue'
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
  '/login': {
    component: Login
  },
  '/signup': {
    component: SignUp
  },
  '/story/:storyId': {
    component: Story
  },
  '/stories': {
    component: Stories
  },
  '/new': {
    component: NewStory
  }
})

// Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/home'
})

// Start the app on the #app div
router.start(App, '#app')
