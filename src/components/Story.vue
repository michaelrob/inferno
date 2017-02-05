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
 import services from '../services'
 export default {
   data() {
     return {
       story: ''
     }
   },
   methods: {
     services.getStory(this, story_id)
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
