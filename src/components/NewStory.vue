<template>
    <div class="col-sm-12">
      <!-- Form for adding a new story -->
      <!-- Notification of success or failure -->

      <!-- Form elements -->
      <h2>New Story</h2>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>

      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter a title" v-model="story.title">
      </div>
      <div class="form-group">
        <textarea class="form-control" placeholder="Enter a description" v-model="story.body"></textarea>
      </div>

      <button class="btn btn-primary" @click="postStory()">Login</button>
    </div>
</template>

<script>
import auth from '../auth'
import services from '../services/stories'
export default {
  data() {
    return {
      story: {
        title: '',
        body: ''
      },
      success: '',
      error: ''
    }
  },
  methods: {
    postStory() {
      var story = {
        title: this.story.title,
        body: this.story.body
      }
      services.postStory(this, story)
    }
  },
  route: {
    canActivate() {
      return auth.user.authenticated
    }
  }
}
</script>

<style>
textarea {
  max-width: 100%;
}
</style>
