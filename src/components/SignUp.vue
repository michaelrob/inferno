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
         v-model="user.email"
       >
     </div>
     <div class="form-group">
       <input
         type="password"
         class="form-control"
         placeholder="Enter your password"
         v-model="user.password"
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
       user: {
         email: '',
         password: '',
         password_confirmation: ''
       },
       error: ''
     }
   },
   methods: {
     submit() {
       var credentials = {
         user: {
           email: this.user.email,
           password: this.user.password,
           password_confirmation: this.user.password
         }
       }
       auth.signup(this, credentials, 'home')
     }
   }

 }
 </script>
