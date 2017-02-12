<template>
    <!-- This will populate our list of tasks -->
    <div class="col-sm-12">
      <div v-if="stories.length > 0">
        <ul id="stories">
          <li v-for="story in stories">
            {{ story.title }}
            {{ story.desscription }}
          </li>
        </ul>
     </div>
     <div v-else>
       There are no stories :(.
     </div>
    </div>
</template>

<script>
import auth from '../auth'
import services from '../services/stories'
export default {
  data() {
    return {
      stories: ''
    }
  },
  methods: {
    getStories() {
      services.getStories(this)
    }
  },
  ready() {
    this.getStories()
  },
  route: {
    canActivate() {
      return auth.user.authenticated
    }
  }
}
</script>
