<template>
  <div class="col-sm-12">

  </div>
</template>

<script>
import auth from '../auth'
export default {
  data() {
    return {
      stories: ''
    }
  },
  methods: {
    getQuote() {
      this.$http
        .get('http://localhost:3001/v1/stories', (data) => {
          // toDo: it might be a good idea to store this data locally at some
          // stage so we can reduce loading times. 
          this.stories = data;
        })
        .error((err) => console.log(err))
    }
  },
  route: {
    canActivate() {
      return auth.user.authenticated
    }
  }
}
</script>
