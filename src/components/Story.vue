 <template>
     <!-- This will populate our list of tasks -->
     <h1>{{ title }}</h1>
     <p>{{ description }}</p>
 </template>

 <script>
 import auth from '../auth'
 export default {
   data() {
     return {
       title: '',
       description: ''
     }
   },
   methods: {
     getStory() {
       this.$http
         .get('http://localhost:3001/v1/stories', (data) => {
           this.title = data.title; // this is very wrong right now, but I'll need to get my api up and running so we can write this correctly
           this.description = data.description;
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
