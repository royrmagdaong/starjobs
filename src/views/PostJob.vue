<template>
  <v-container>
      <v-row>
          <v-col cols="12" md="8" offset-md="2">
              <v-card dark class=" pa-4">
                <p class="title text-center">Post A Job</p>
                <v-text-field
                    label="Position Title"
                    outlined
                    color="primary"
                    v-model="positionTitle"
                    dense
                ></v-text-field>
                <v-container fluid class="pa-0">
                    <v-row>
                        <v-col cols="12" sm="6" class="py-0">
                            <v-text-field
                                label="Location"
                                outlined
                                color="primary"
                                v-model="location"
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="py-0"> 
                            <v-text-field
                                label="Expected Salary"
                                outlined
                                color="primary"
                                v-model="expectedSalary"
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-textarea
                    clearable
                    clear-icon="cancel"
                    label="Qualifications"
                    rows="3"
                    outlined
                    color="primary"
                    v-model="qualifications"
                    dense
                ></v-textarea>
                <v-textarea
                    clearable
                    clear-icon="cancel"
                    label="Job Descriptions"
                    rows="3"
                    outlined
                    color="primary"
                    v-model="jobDescriptions"
                    dense
                ></v-textarea>
                <v-btn
                    block
                    color="primary darken-1"
                    large
                    @click.prevent="postJob"
                >
                    Post
                </v-btn>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import {dbFirestore,db} from '../firebasedb'

export default {
    data:()=>({
        positionTitle:'',
        location:'',
        expectedSalary:'',
        qualifications:'',
        jobDescriptions:''
    }),
    computed:{
        getCompanyInfo(){
            return this.$store.getters.getCompanyInfo;
        },
    },
    methods:{
        postJob(){
            if(this.positionTitle == '' || this.location == '' || this.expectedSalary == '' || this.qualifications == '' || this.jobDescriptions == ''){
                window.console.log('Some Fields are Empty, Please fill up all fields.');
            }else{
                // create user data to firestore
                dbFirestore.collection('JobPosts').doc().set({
                    companyName:this.getCompanyInfo.companyName,
                    positionTitle:this.positionTitle,
                    location:this.location,
                    expectedSalary:this.expectedSalary,
                    qualifications:this.qualifications,
                    jobDescriptions:this.jobDescriptions,
                    uid:db.auth().currentUser.uid

                }).then(()=>{
                    window.console.log('job post created');

                    this.positionTitle = null;
                    this.location = null;
                    this.expectedSalary = null;
                    this.qualifications = null;
                    this.jobDescriptions = null;
                }).catch(function(error){
                    window.console.log(error.message);
                });
            }
        }
    }
}
</script>

<style>

</style>