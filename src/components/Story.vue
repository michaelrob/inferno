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
       stories: ''
     }
   },
   methods: {
     getStory() {
       this.$http
         .get('http://localhost:3001/v1/stories', (data) => {
           this.stories = data;
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
