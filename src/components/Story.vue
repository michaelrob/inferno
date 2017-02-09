 <template>
     <!-- This will populate our list of tasks -->
     <div class="col-sm-12">
       <ul id="story-list">
        <li v-for="story in stories">
          {{ story.title }}
          {{ story.desscription }}
        </li>
      </ul>
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
     stories() {
       services.getStory(this, story_id)
     }
   },
   ready() {
     this.stories()
   },
   route: {
     canActivate() {
       return auth.user.authenticated
     }
   }
 }
 </script>
