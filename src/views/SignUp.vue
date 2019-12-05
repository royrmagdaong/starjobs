<template>
  <v-container >
      <v-row style="height:90vh;" align="center">
          <v-col cols="12" align-self="center" >
              <v-card dark max-width="500" class="mx-auto pa-8 " elevation="6">
                <p class="display-1 font-weight-bold text-center white--text">Sign Up</p>
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
                <v-text-field
                    label="Repeat Password"
                    outlined
                    type="password"
                    prepend-icon="lock"
                    append-icon="close"
                    v-model="rPassword"
                ></v-text-field>
                <v-btn block large light class="primary darken-1 font-weight-bold" @click.prevent="signUp">
                    Sign Up
                </v-btn>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import {db,dbFirestore} from '../firebasedb'

export default {
    data:()=>({
        email:'',
        password:'',
        rPassword:''
    }),
    methods:{
        signUp(){
            var mAuth = db.auth();
            if(this.rPassword == this.password){
                mAuth.createUserWithEmailAndPassword(this.email,this.password).then(()=>{
                    
                    mAuth.currentUser.sendEmailVerification().then(()=>{
                    window.console.log('email verification sent');

                    // create user data to firestore
                    dbFirestore.collection('users').doc(mAuth.currentUser.uid).set({
                        aboutMe:{
                            name: '',
                            gender:'',
                            contactNo:'',
                            email:this.email,
                            address:'',
                            dateOfBirth:'',
                            nationality:''
                        }
                    }).then(function(){
                        mAuth.signOut();
                        window.console.log('created');
                    }).catch(function(error){
                        window.console.log(error.message);
                        mAuth.signOut();
                    });

                    // clear form data
                    this.password = '';
                    this.rPassword = '';
                    this.email = '';

                    }).catch((err)=>{
                    window.console.log(err.message);
                    mAuth.signOut();
                    });

                }).catch((error)=>{
                    window.console.log(error.message)
                });
            }else{
                window.console.log('Password do not match');
            }
        },
    }
}
</script>

<style>

</style>