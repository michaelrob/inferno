<template>
  <div class="col-sm-12">
    {{ information }}
  </div>
</template>

<script>
import auth from '../auth'
export default {
  data() {
    return {
      information: 'Please sign up or log in :)'
    }
  }
}
</script>
