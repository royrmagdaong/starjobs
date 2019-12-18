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
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Password"
                                outlined
                                type="password"
                                prepend-icon="lock"
                                append-icon="close"
                                v-model="password"
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Repeat Password"
                                outlined
                                type="password"
                                prepend-icon="lock"
                                append-icon="close"
                                v-model="rPassword"
                                dense
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
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Company Email"
                                outlined
                                prepend-icon="email"
                                append-icon="close"
                                v-model="companyEmail"
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Password"
                                outlined
                                type="password"
                                prepend-icon="lock"
                                append-icon="close"
                                v-model="companyPassword"
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Repeat Password"
                                outlined
                                type="password"
                                prepend-icon="lock"
                                append-icon="close"
                                v-model="companyRPassword"
                                dense
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
                        isCompany:true,
                        overviewOpeningParag:[
                            'At (company Name), we work with some of the biggest companies in the Philippines and around the world. We solve our clients’ toughest challenges by providing unmatched services in strategy, consulting, digital, technology and operations. Today, more than ever, we are adopting innovation to deliver transformational outcomes for a demanding new digital world. How do we do it? We apply the new every day, through new thinking, technology, innovation and delivery platforms that revolutionize our clients’ businesses. We invest in the future by empowering our people to lead in the new through next horizon business and leadership skills. With our 49,000-strong community in the Philippines and as one of the biggest and most diversified IT-BPM company in the country today, Accenture works to make a difference in the way the world works and lives.'
                        ],
                        whyJoinUs:[
                            'Build a career that engages your whole self to become the best you. At Accenture, you’ll have the opportunity to explore your passions to solve challenges that are relevant to you. Future proof your career as you continuously learn and grow. New labs, innovations centers, liquid studios and learning facilities allow us to collaborate like never before. You’ll work with supportive colleagues, get access to training opportunities so you can perform at your best and have the freedom to drive your career in the direction that you want.'
                        ],
                        whatElse:[
                            'In fiscal 2016, we invested US$941M in learning and development for our people.',
                            'We strive to build a diverse and inclusive workplace where everyone feels a sense of belonging. We have more than 150,000 women globally, and we target to grow our percentage of women by 50 percent in 2025.',
                            'We value the contribution of our working mothers, providing them an array of benefits including 120 days of maternity leave.',
                            'With our corporate citizenship initiatives, you’ll have the opportunity to support meaningful causes and make a bigger impact. In fiscal 2016, our people contributed more than 700,000 hours to volunteering activities, from teaching young students how to code to helping nonprofits build houses for the poor.'
                        ]

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