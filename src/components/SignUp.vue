<!-- ToDo: this really needs to be combined with login, we're duplicating code -->

 <template>
   <div class="col-sm-4 col-sm-offset-4">
     <h2>Sign Up</h2>
     <p>Sign up for awesome things.</p>
     <div class="alert alert-danger" v-if="error">
       <p>{{ error }}</p>
     </div>
     <div class="form-group">
       <input
         type="text"
         class="form-control"
         placeholder="Enter your email address"
         v-model="credentials.email"
       >
     </div>
     <div class="form-group">
       <input
         type="password"
         class="form-control"
         placeholder="Enter your password"
         v-model="credentials.password"
       >
     </div>
     <button class="btn btn-primary" @click="submit()">Signup</button>
   </div>
 </template>

 <script>
 import auth from '../auth'
 export default {
   data() {
     return {
       credentials: {
         email: '',
         password: ''
       },
       error: ''
     }
   },
   methods: {
     submit() {
       var credentials = {
         username: this.credentials.username,
         password: this.credentials.password
       }
       auth.signup(this, credentials, 'secretquote')
     }
   }

 }
 </script>
