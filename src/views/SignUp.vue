<template>
  <v-container >
      <v-row align="center">
          <v-col cols="12" align-self="center" >
              <v-card dark max-width="500" class="mx-auto pa-8 " elevation="6">
                <p class="display-1 font-weight-bold text-center white--text">Sign Up</p>

                <v-tabs
                    v-model="tab"
                    color="primary"
                >
                    <v-tab class="pa-0" style="width:50%;">
                        As Applicant
                    </v-tab>
                    <v-tab class="pa-0" style="width:50%;">
                        As Company
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab" style="background:#424242;">
                    <!-- as applicant -->
                    <v-tab-item>
                        <v-card flat dark tile class="pt-4">
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
                    </v-tab-item>

                    <!-- as company -->
                    <v-tab-item>
                        <v-card flat dark tile class="pt-4">
                            <v-text-field
                                label="Company Name"
                                outlined
                                prepend-icon="email"
                                append-icon="close"
                                v-model="companyName"
                            ></v-text-field>
                            <v-text-field
                                label="Company Email"
                                outlined
                                prepend-icon="email"
                                append-icon="close"
                                v-model="companyEmail"
                            ></v-text-field>
                            <v-text-field
                                label="Password"
                                outlined
                                type="password"
                                prepend-icon="lock"
                                append-icon="close"
                                v-model="companyPassword"
                            ></v-text-field>
                            <v-text-field
                                label="Repeat Password"
                                outlined
                                type="password"
                                prepend-icon="lock"
                                append-icon="close"
                                v-model="companyRPassword"
                            ></v-text-field>
                            <v-btn block large light class="primary darken-1 font-weight-bold" @click.prevent="signUpAsCompany">
                                Sign Up
                            </v-btn>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
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
        rPassword:'',
        companyName:'',
        companyEmail:'',
        companyPassword:'',
        companyRPassword:'',
        tab: null,
        
    }),
    methods:{
        signUp(){
            var mAuth = db.auth();
            if(this.rPassword == this.password){
                mAuth.createUserWithEmailAndPassword(this.email,this.password).then(()=>{
                    
                    mAuth.currentUser.sendEmailVerification().then(()=>{
                    window.console.log('email verification sent');
                
                    // set display name as applicant or employee
                    // applicant = true, company = false
                    mAuth.currentUser.updateProfile({
                        displayName: "true",
                    }).then(() => {
                    // Update successful.
                        window.console.log(mAuth.currentUser.displayName);
                    }).catch((error) => {
                    // An error happened.
                        window.console.log(error);
                    });

                    // create user data to firestore
                    dbFirestore.collection('applicant').doc(mAuth.currentUser.uid).set({
                        email:this.email,
                        isApplicant:true,
                        aboutMe:{
                            Nationality:'',
                            Address:'',
                            DateOfBirth:'',
                            Email:'',
                            Contact:'',
                            Gender:'',
                            Name:'',
                            title:''
                        },
                        skills:[],
                        experience:[
                            {
                                companyName:'Sample Company Inc.',
                                jobPosition:'Job Position',
                                responsibilities:['Sample Responsibility'],
                                timeline:'2011-present (sample)'
                            }
                        ],
                        education:[
                            {
                                educationLevel:'Tersiary',
                                schoolName:'Sample School Name',
                                program:'Bachelor of Science in Sample Program',
                                timeline:'2019-present'
                            }
                        ]

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
        signUpAsCompany(){
            var mAuth = db.auth();
            if(this.companyPassword == this.companyRPassword){
                mAuth.createUserWithEmailAndPassword(this.companyEmail,this.companyPassword).then(()=>{
                    
                    mAuth.currentUser.sendEmailVerification().then(()=>{
                    window.console.log('email verification sent');

                    // set display name as applicant or employee
                    // applicant = true, company = false
                    mAuth.currentUser.updateProfile({
                        displayName: "false",
                    }).then(() => {
                        window.console.log(mAuth.currentUser.displayName);
                    }).catch((error) => {
                        window.console.log(error);
                    });

                    // create user data to firestore
                    dbFirestore.collection('company').doc(mAuth.currentUser.uid).set({
                        companyName:this.companyName,
                        companyEmail:this.companyEmail,
                        isCompany:true

                    }).then(function(){
                        mAuth.signOut();
                        window.console.log('created');
                    }).catch(function(error){
                        window.console.log(error.message);
                        mAuth.signOut();
                    });

                    // clear form data
                    this.companyEmail = '';
                    this.companyName = '';
                    this.companyPassword = '';
                    this.companyRPassword = '';

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