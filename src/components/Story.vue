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
 export default {
   el: 'story-list',
   data() {
     return {
       story: ''
     }
   },
   methods: {
     getStory() {
       // ToDo: move this method into its own class, we will probably want to use
       // it elsewhere. Also, its just good design.
       this.$http
         .get('http://localhost:3001/v1/stories/' + story_id, (data) => {
           this.story = data;
         }, {
           headers: auth.getAuthHeader()
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
