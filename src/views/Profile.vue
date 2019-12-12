<template>
  <v-container>

      <!-- Applicant Profile -->
      <v-row no-gutters v-if="getIsApplicant">
          <v-col cols="12" md="4" class="pa-1">
              <v-card class="white">
                <v-container>
                  <v-row class="">
                    <v-col cols="4" class="pb-0">
                        <v-img
                            src="https://myjobstreet.jobstreet.com.ph/myjs11-static/responsive/common/image/resume-no-photo.png"
                            width="100"
                            style="border: 1px solid #ccc;"
                        ></v-img>
                    </v-col>
                    <v-col cols="8" class="pb-0">
                        <p class="title ma-0">{{getApplicantInfo.aboutMe.name}}</p>
                        <p class="caption ma-0">{{getApplicantInfo.aboutMe.title}}</p>
                    </v-col>
                  </v-row>
                </v-container>
                <v-divider class=" ma-1"></v-divider>
                <v-list>
                    <v-list-item-group v-model="model" mandatory color="primary">
                        <v-list-item
                          v-for="(item, i) in items"
                          :key="i"
                        >
                          <v-list-item-icon>
                              <v-icon v-text="item.icon"></v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                              <v-list-item-title v-text="item.text"></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
              </v-card>
          </v-col>
          <v-col cols="12" md="8" style="height:85%" class="pa-1">
            <v-card class="white" >
              <v-container class="pt-0">







                <!-- EDUCATION -->
                <v-row v-if="items[model].text=='Education'">
                  <v-col cols="12">
                    <span class="title">Education </span>
                      <!-- dialog EDUCATION -->
                      <v-dialog v-model="educationDialog" max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-icon color="primary" class="ml-2" v-on="on">mdi-border-color</v-icon>
                        </template>
                        <v-card>  
                          <v-card-title>
                            <span class="headline">Education</span>
                          </v-card-title>

                          <!-- EDUCATION, Form -->
                          <div class="pa-2">
                            <div class="pa-4 my-2" style="border:1px #424242 solid;"
                              v-for="(education,index) in getApplicantInfo.education" :key="index"
                            >
                              <p class="primary--text text-center caption">Education {{index+1}}</p>
                              <v-text-field
                                  dense
                                  label="School Name"
                                  hint="No Abbreviation"
                                  outlined
                                  color="light-green"
                                  v-model="getApplicantInfo.education[index].schoolName"
                              ></v-text-field>
                              <v-container fluid class="pa-0">
                                <v-row>
                                  <v-col cols="12" sm="6" class="py-0"> 
                                    <v-text-field
                                      label="Level"
                                      hint="ex. Tertiary/Primary/Secondary"
                                      outlined
                                      color="light-green"
                                      dense
                                      v-model="getApplicantInfo.education[index].educationLevel"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="6" class="py-0"> 
                                    <v-text-field
                                      label="Timeline"
                                      hint="ex. 2012-2018 / 2019-present"
                                      outlined
                                      color="light-green"
                                      dense
                                      v-model="getApplicantInfo.education[index].timeline"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                              </v-container>
                              <v-text-field
                                  dense
                                  label="Program"
                                  hint="ex. BS in Information Technology, No Abbrev"
                                  outlined
                                  color="light-green"
                                  v-model="getApplicantInfo.education[index].program"
                              ></v-text-field>
                            </div>
                            
                            
                            <v-divider class="light-green mt-6"></v-divider>
                            <v-divider class="light-green"></v-divider>
                            <v-divider class="light-green mb-6"></v-divider>

                            <!-- ADD EDUCATION -->
                            <div class="pa-4" style="border:1px solid #8BC34A;">
                              <p class=" body-2 font-weight-bold ma-2 text-center">Add Education</p>
                              <v-text-field
                                  dense
                                  label="School Name"
                                  hint="No Abbreviation"
                                  outlined
                                  color="light-green"
                                  v-model="newEducation.schoolName"
                              ></v-text-field>
                              <v-container fluid class="pa-0">
                                <v-row>
                                  <v-col cols="12" sm="6" class="py-0"> 
                                    <v-text-field
                                      label="Level"
                                      hint="ex. Tertiary/Primary/Secondary"
                                      outlined
                                      color="light-green"
                                      dense
                                      v-model="newEducation.educationLevel"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="6" class="py-0"> 
                                    <v-text-field
                                      label="Timeline"
                                      hint="ex. 2012-2018 / 2019-present"
                                      outlined
                                      color="light-green"
                                      dense
                                      v-model="newEducation.timeline"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                              </v-container>
                              <v-text-field
                                  dense
                                  label="Program"
                                  hint="ex. BS in Information Technology, No Abbrev"
                                  outlined
                                  color="light-green"
                                  v-model="newEducation.program"
                              ></v-text-field>
                              <v-btn block color="light-green white--text" @click="addEducation()">Add</v-btn>
                            </div>
                          </div>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary " text @click="educationDialog = false">Close</v-btn>
                            <v-btn color="primary " text @click.prevent="updateEducation()">Save</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>

                    <!-- Education View -->
                    <v-divider></v-divider>
                    <div v-for="(education,index) in getApplicantInfo.education" :key="index">
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="3">
                            <div style="position:relative; height:100%;">
                              <p class="body-1 font-weight-bold ma-0">{{education.educationLevel}}</p>
                              <v-divider vertical style="position:absolute; top:0; right:0;" class="hidden-xs-only primary"></v-divider>
                              <v-divider class="hidden-sm-and-up primary"></v-divider>
                            </div>
                          </v-col>
                          <v-col cols="12" sm="9">
                            <p class="body-1 font-weight-medium ma-0">{{education.schoolName}}</p>
                            <p class="ma-0 body-2">{{education.program}}</p>
                            <p class="ma-0 caption">{{education.timeline}}</p>
                          </v-col>
                        </v-row>
                      </v-container>
                      <v-divider></v-divider>
                    </div>
                  </v-col>
                </v-row>









                <!-- EXPERIENCE -->
                <v-row v-if="items[model].text=='Experience'">
                  <v-col cols="12">
                    <span class="title">Experience </span>
                    <!-- dialog edit about me -->
                      <v-dialog v-model="experienceDialog" max-width="800px">
                        <template v-slot:activator="{ on }">
                          <v-icon @click.prevent="" color="primary" class="ml-2" v-on="on">mdi-border-color</v-icon>
                        </template>
                        <v-card :class="{'pa-0': $vuetify.breakpoint.xsOnly, 'pa-12': $vuetify.breakpoint.smAndUp}">
                          <p class="headline text-center">Experience</p>

                          <!-- EXPERIENCE, Form -->
                          <div class="pa-2 text-center">
                            <div style="border:1px solid #424242" class="px-2 py-6 my-4" 
                              v-for="(experience,index) in getApplicantInfo.experience" :key="index"
                            >
                              <p class="caption primary--text">Experience {{index+1}}</p>
                              <v-text-field
                                label="Company Name"
                                outlined
                                color="primary"
                                dense
                                v-model="getApplicantInfo.experience[index].companyName"
                              ></v-text-field>
                              <v-container fluid class="pa-0">
                                <v-row>
                                  <v-col cols="12" sm="6" class="py-0"> 
                                    <v-text-field
                                      label="Timeline"
                                      outlined
                                      color="primary"
                                      dense
                                      v-model="getApplicantInfo.experience[index].timeline"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="6" class="py-0"> 
                                    <v-text-field
                                      label="Job Position"
                                      outlined
                                      color="primary"
                                      dense
                                      v-model="getApplicantInfo.experience[index].jobPosition"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                              </v-container>
                              <div 
                                v-for="(responsibility,index2) in getApplicantInfo.experience[index].responsibilities"
                                :key="index2"
                              >
                                <v-textarea
                                  label="Responsibility"
                                  outlined
                                  color="primary"
                                  dense
                                  rows="3"
                                  v-model="getApplicantInfo.experience[index].responsibilities[index2]"
                                ></v-textarea>
                              </div>
                              <v-divider class="primary mb-4"></v-divider>
                              <p class="caption font-weight-bold">Add Responsibility</p>
                              <v-textarea
                                label="Responsibility"
                                outlined
                                color="primary"
                                dense
                                rows="3"
                              ></v-textarea>
                              <v-btn color="primary darken-1">Add Responsibility</v-btn>
                            </div>

                            <v-divider class="light-green mt-12"></v-divider>
                            <v-divider class="light-green"></v-divider>
                            <p class="title text-center ma-2">Add New Experience</p>
                            <v-divider class="light-green"></v-divider>
                            <v-divider class="light-green mb-12"></v-divider>

                            <!-- Add new Experience -->
                            <div style="border:1px solid #8BC34A" class="px-2 py-6 text-center">
                              <v-text-field
                                label="Company Name"
                                outlined
                                color="light-green"
                                dense
                                v-model="newExperience.companyName"
                              ></v-text-field>
                              <v-container fluid class="pa-0">
                                <v-row>
                                  <v-col cols="12" sm="6" class="py-0"> 
                                    <v-text-field
                                      label="Timeline"
                                      outlined
                                      color="light-green"
                                      dense
                                      v-model="newExperience.timeline"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12" sm="6" class="py-0"> 
                                    <v-text-field
                                      label="Job Position"
                                      outlined
                                      color="light-green"
                                      dense
                                      v-model="newExperience.jobPosition"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                              </v-container>
                              <div v-for="(resp,index) in newExperience.responsibilities" :key="index">
                                <v-textarea
                                  label="Responsibility"
                                  outlined
                                  color="light-green"
                                  dense
                                  rows="3"
                                  v-model="newExperience.responsibilities[index]"
                                ></v-textarea>
                              </div>
                              <v-divider class="light-green mb-4"></v-divider>
                              <p class="caption font-weight-bold" >Add Responsibility</p>
                              <v-textarea
                                label="Responsibility"
                                outlined
                                color="light-green"
                                dense
                                rows="3"
                                v-model="newResponsibility"
                              ></v-textarea>
                              <v-btn color="light-green white--text" @click="addNewReponsibility()">Add Responsibility</v-btn>
                            </div>
                            <v-btn block color="light-green white--text mt-4" @click="addExperience()">Add Experience</v-btn>
                          </div>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary " text @click="experienceDialog = false">Close</v-btn>
                            <v-btn color="primary " text @click.prevent="updateExperience()">Save</v-btn>
                          </v-card-actions>

                        </v-card>
                      </v-dialog>

                    <v-divider></v-divider>

                    <!-- Experience View -->
                    <div v-for="(experience,index) in getApplicantInfo.experience" :key="index">
                      <v-row no-gutters class="pt-2">
                        <v-col cols="4"><p>{{getApplicantInfo.experience[index].timeline}}</p></v-col>
                        <v-col cols="8">
                          <p class="title mb-1">{{getApplicantInfo.experience[index].companyName}}</p>
                          <p class="caption mb-1 font-italic">{{getApplicantInfo.experience[index].jobPosition}}</p>
                          <ul v-for="(responsibility,index2) in getApplicantInfo.experience[index].responsibilities" :key="index2">
                            <li><p class="caption mb-1 font-italic">{{responsibility}}</p></li>
                          </ul>
                        </v-col>
                      </v-row>
                      <v-divider class="my-2"></v-divider>
                    </div>
                    
                  </v-col>
                </v-row>







                
                <!-- SKILLS -->
                <v-row v-if="items[model].text=='Skills'">
                  <v-col cols="12">
                    <div>
                      <span class="title">Skills </span>
                      <!-- dialog edit about me -->
                      <v-dialog v-model="skillsDialog" persistent max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-icon color="primary" class="ml-2" v-on="on">mdi-border-color</v-icon>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">About Me</span>
                          </v-card-title>

                          <!-- Skills, Form -->
                          <div class="pa-6">
                            <div v-for="(skill,index) in getApplicantInfo.skills" :key="index">
                              <v-text-field
                                  dense
                                  :label="'skill: '+(index+1)"
                                  outlined
                                  color="primary"
                                  v-model="getApplicantInfo.skills[index]"
                                  append-icon="close"
                                  @click:append="removeSkill(index)"
                              ></v-text-field>
                            </div>
                            <v-divider class="light-green mt-2"></v-divider>
                            <p class=" caption font-weight-bold ma-0 text-center">Add Skill</p>
                            <v-divider class="light-green mb-8"></v-divider>
                            <v-text-field
                                dense
                                label="add skill"
                                outlined
                                color="light-green"
                                v-model="newSkill"
                            ></v-text-field>
                            <v-btn block color="light-green white--text" @click="addSkill()">Add</v-btn>
                          </div>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary " text @click="skillsDialog = false">Close</v-btn>
                            <v-btn color="primary " text @click.prevent="updateSkills()">Save</v-btn>
                          </v-card-actions>

                        </v-card>
                      </v-dialog>
                    </div>
                    <v-divider></v-divider>
                    <ul class="pt-2" v-for="(skill, index) in getApplicantInfo.skills" :key="index">
                      <li>{{skill}}</li>
                    </ul>
                  </v-col>
                </v-row>









                <!-- ABOUT ME -->
                <v-row v-if="items[model].text=='About Me'">
                  <v-col cols="12">
                    <div>
                      <span class="title">About Me </span>
                      <!-- dialog edit about me -->
                      <v-dialog v-model="aboutMeDialog" max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-icon color="primary" class="ml-2" v-on="on">mdi-border-color</v-icon>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">About Me</span>
                          </v-card-title>

                          <!-- About me, Form -->
                          <div class="pa-6">
                            <v-text-field
                                dense
                                label="Name"
                                outlined
                                color="primary"
                                v-model="getApplicantInfo.aboutMe.name"
                            ></v-text-field>
                            <v-text-field
                                dense
                                label="Title"
                                outlined
                                color="primary"
                                v-model="getApplicantInfo.aboutMe.title"
                            ></v-text-field>
                            <v-text-field
                                dense
                                label="Gender"
                                outlined
                                color="primary"
                                v-model="getApplicantInfo.aboutMe.gender"
                            ></v-text-field>
                            <v-text-field
                                dense
                                label="Contact no."
                                outlined
                                color="primary"
                                v-model="getApplicantInfo.aboutMe.contact"
                            ></v-text-field>
                            <v-text-field
                                dense
                                label="Email"
                                outlined
                                color="primary"
                                v-model="getApplicantInfo.aboutMe.email"
                            ></v-text-field>
                            <v-text-field
                                dense
                                label="Date of Birth"
                                outlined
                                color="primary"
                                v-model="getApplicantInfo.aboutMe.dateOfBirth"
                            ></v-text-field>
                            <v-text-field
                                dense
                                label="Address"
                                outlined
                                color="primary"
                                v-model="getApplicantInfo.aboutMe.address"
                            ></v-text-field>
                            <v-text-field
                                dense
                                label="Nationality"
                                outlined
                                color="primary"
                                v-model="getApplicantInfo.aboutMe.nationality"
                            ></v-text-field>
                          </div>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary darken-1" text @click="aboutMeDialog = false">Close</v-btn>
                            <v-btn color="primary darken-1" text @click="updateApplicantAboutMe()">Save</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>

                    <v-divider></v-divider>
                    <v-row no-gutters class="pt-2">
                      <v-col cols="4"><p>Name:</p></v-col>
                      <v-col cols="8"><p>{{getApplicantInfo.aboutMe.name}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4"><p>Title:</p></v-col>
                      <v-col cols="8"><p>{{getApplicantInfo.aboutMe.title}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Gender:</p></v-col>
                      <v-col cols="8"><p>{{getApplicantInfo.aboutMe.gender}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Contact No.</p></v-col>
                      <v-col cols="8"><p>{{getApplicantInfo.aboutMe.contact}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Email</p></v-col>
                      <v-col cols="8"><p>{{getApplicantInfo.aboutMe.email}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Date of Birth</p></v-col>
                      <v-col cols="8"><p>{{getApplicantInfo.aboutMe.dateOfBirth}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Address</p></v-col>
                      <v-col cols="8"><p>{{getApplicantInfo.aboutMe.address}}</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Nationality</p></v-col>
                      <v-col cols="8"><p>{{getApplicantInfo.aboutMe.nationality}}</p></v-col>
                    </v-row>
                  </v-col>
                </v-row>







                <!-- RESUME -->
                <v-row v-if="items[model].text=='Resume'">
                  <v-col cols="12">
                    <p class="title">Resume</p>
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <v-btn color="primary">Download Resume <v-icon>mdi-download</v-icon></v-btn>
                  </v-col>
                </v-row>

              </v-container>
            </v-card>
          </v-col>

      </v-row>

  </v-container>
</template>

<script>
import {dbFirestore,db} from '../firebasedb'

export default {
    data:()=>({
        items: [
          {
            icon: 'mdi-inbox',
            text: 'Education',
          },
          {
            icon: 'mdi-star',
            text: 'Experience',
          },
          {
            icon: 'mdi-send',
            text: 'Skills', 
          },
          {
            icon: 'mdi-email-open',
            text: 'About Me',
          },
          {
            icon: 'mdi-download',
            text: 'Resume',
          },
        ],
        model: 0,
        aboutMeDialog:false,
        skillsDialog:false,
        experienceDialog:false,
        educationDialog:false,
        newSkill:'',
        newExperience:{
          companyName:'',
          jobPosition:'',
          timeline:'',
          responsibilities:[]
        },
        newResponsibility:'',
        newEducation:{
          educationLevel:'',
          program:'',
          schoolName:'',
          timeline:''
        }
    }),
    computed: {
      getIsApplicant(){
        return this.$store.getters.getIsApplicant;
      },
      getApplicantInfo(){
        return this.$store.getters.getApplicantInfo;
      }
    },
    methods:{
      getItem(val){
        if(val==0){
          return 'Education';
        }else if(val==1){
          return 'Experience';
        }else if(val==2){
          return 'Skills';
        }else if(val==3){
          return 'About Me';
        }else if(val==4){
          return 'Resume';
        }
      },
      updateApplicantAboutMe(){
        var applicantRef = dbFirestore.collection("applicant").doc(db.auth().currentUser.uid);

        return applicantRef.update({
            aboutMe:{
              address:this.getApplicantInfo.aboutMe.address,
              contact:this.getApplicantInfo.aboutMe.contact,
              dateOfBirth:this.getApplicantInfo.aboutMe.dateOfBirth,
              email:this.getApplicantInfo.aboutMe.email,
              gender:this.getApplicantInfo.aboutMe.gender,
              name:this.getApplicantInfo.aboutMe.name,
              nationality:this.getApplicantInfo.aboutMe.nationality,
              title:this.getApplicantInfo.aboutMe.title
            }
        }).then(()=>{
            window.console.log("Document successfully updated!");
            this.aboutMeDialog = false;
        }).catch((error)=>{
            window.console.error("Error updating document: ", error);
        });
      },
      removeSkill(val){
        this.getApplicantInfo.skills.splice(val,1);
      },
      addSkill(){
        this.getApplicantInfo.skills.push(this.newSkill);
        this.newSkill = '';
      },
      addExperience(){
        this.getApplicantInfo.experience.push(this.newExperience);

        this.newExperience = {
          companyName:'',
          jobPosition:'',
          timeline:'',
          responsibilities:[]
        };
      },
      addNewReponsibility(){
        this.newExperience.responsibilities.push(this.newResponsibility);
        this.newResponsibility = '';
      },
      addEducation(){
        this.getApplicantInfo.education.push(this.newEducation);

        this.newEducation = {
          educationLevel:'',
          program:'',
          schoolName:'',
          timeline:''
        };
      },
      updateSkills(){
        var applicantRef = dbFirestore.collection("applicant").doc(db.auth().currentUser.uid);

        return applicantRef.update({
            skills: this.getApplicantInfo.skills
        }).then(()=>{
            window.console.log("Skills successfully updated!");
            this.skillsDialog = false;
        }).catch((error)=>{
            window.console.error("Error updating document: ", error);
        });
      },
      updateExperience(){
        var applicantRef = dbFirestore.collection("applicant").doc(db.auth().currentUser.uid);

        return applicantRef.update({
            experience: this.getApplicantInfo.experience
        }).then(()=>{
            window.console.log("Experience successfully updated!");
            this.experienceDialog = false;
        }).catch((error)=>{
            window.console.error("Error updating document: ", error);
        });
      },
      updateEducation(){
        var applicantRef = dbFirestore.collection("applicant").doc(db.auth().currentUser.uid);

        return applicantRef.update({
            education: this.getApplicantInfo.education
        }).then(()=>{
            window.console.log("Education successfully updated!");
            this.educationDialog = false;
        }).catch((error)=>{
            window.console.error("Error updating document: ", error);
        });
      }
    }
}
</script>

<style>

</style>