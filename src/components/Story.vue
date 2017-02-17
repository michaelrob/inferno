 <template>
     <!-- This will populate our list of tasks -->
     <div class="col-sm-12">
       <div v-if="story">
        {{ story.id }}
        <h2>{{ story.title }}</h2>
        <p>{{ story.author }}</p>
        <p>{{ story.description }}</p>
        <p>{{ story.body }}</p>
      </div>
      <div v-else>
        There are no story :(.
      </div>
     </div>
 </template>

 <script>
 import auth from '../auth'
 import services from '../services/stories'
 export default {
   data() {
     return {
       story: ''
     }
   },
   methods: {
     getStory() {
       services.getStory(this, this.$route.params.storyId)
     }
   },
   ready() {
     this.getStory()
   },
   route: {
     canActivate() {
       return auth.user.authenticated
     }
   }
 }
 </script>
