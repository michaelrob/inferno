<template>
    <!-- This will populate our list of tasks -->
    <div class="col-sm-12">
      <div v-if="stories">
        <ul v-for="story in stories" id="stories">
          <li>
            {{ story.title }}
            {{ story.description }}
          </li>
        </ul>
     </div>
     <div v-else>
       There are no stories :(.
     </div>
     <br />
     <a v-link="'new'" class="btn btn-info" role="button">New Story</a>
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
