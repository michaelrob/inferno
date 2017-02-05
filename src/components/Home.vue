<template>
  <div class="col-sm-12">
    <p v-if="!user.authenticated">
      Please sign up or log in :)
    </p>
    <p v-else>
      You're logged in, please do something
      <!-- Add in something to show stories -->
    </p>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  data() {
    return {
      user: auth.user
    }
  }
}
</script>
