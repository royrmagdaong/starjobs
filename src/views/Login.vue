<template>
  <v-container >
       

      <v-row style="height:90vh;" align="center">
          <v-col cols="12" align-self="center" >
              <v-card dark max-width="500" class="mx-auto pa-8 " elevation="6">
                <p class="display-1 font-weight-bold text-center white--text" >Log in</p>
                <v-text-field
                    label="Email"
                    outlined
                    prepend-icon="email"
                    append-icon="close"
                    v-model="email"
                ></v-text-field>
                <v-text-field
                    label="Password"
                    outlined
                    type="password"
                    prepend-icon="lock"
                    append-icon="close"
                    v-model="password"
                ></v-text-field>
                <v-btn block large light class="primary darken-1 font-weight-bold" @click.prevent="signIn">
                    Log in 
                </v-btn>
              </v-card>
          </v-col>
      </v-row>

     

  </v-container>
</template>

<script>
import {db} from '../firebasedb'

export default {
    data:()=>({
        email:'',
        password:'',
    }),
    methods:{
        signIn(){
            db.auth().signInWithEmailAndPassword(this.email,this.password).then(()=>{
            if(db.auth().currentUser.emailVerified){
                window.console.log('email is verified')
                this.email = '';
                this.password = '';
                this.$router.push('/home');
            }else{
                window.console.log('email is not verified')
                db.auth().signOut();
            }
            }).catch((err)=>{
                window.console.log(err.message)
            });
        },
    },
    

}
</script>

<style>

</style>