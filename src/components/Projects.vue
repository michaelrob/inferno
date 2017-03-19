<template>
    <!-- This will populate our list of projects -->
    <div class="col-sm-12">
      <div v-if="projects" class="stories">
        <ul class="list-group">
          <li v-for="project in projects" class="list-group-item">
            {{ project.title }} |
            {{ project.description }}
          </li>
        </ul>
     </div>
     <div v-else>
       There are no stories :(.
     </div>
     <br />
     <a v-link="'new'" class="btn btn-info" role="button">New Project</a>
    </div>
</template>

<script>
import auth from '../auth'
import services from '../services/projects'
export default {
  data() {
    return {
      stories: ''
    }
  },
  methods: {
    getProjects() {
      services.getProjects(this)
    }
  },
  ready() {
    this.getProjects()
  },
  route: {
    canActivate() {
      return auth.user.authenticated
    }
  }
}
</script>

<style>

</style>
