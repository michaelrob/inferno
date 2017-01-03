<template>
  <div class="col-sm-12">

  </div>
</template>

<script>
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
          this.stories = data;
        })
        .error((err) => console.log(err))
    }
  }
}
</script>
