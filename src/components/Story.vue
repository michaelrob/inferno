 <template>
     <!-- This will populate our list of tasks -->
     <div class="col-sm-12">
       <div v-if="story">
        {{ story.id }}
        {{ story.title }}
        {{ story.author }}
        {{ story.description }}
        {{ story.body }}
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
       story: ''
     }
   },
   methods: {
     getStory() {
       services.getStory(this, storyId)
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
