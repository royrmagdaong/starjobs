<template>
  <v-container>

      <!-- Company Profile -->
      <v-row no-gutters>
          <v-col cols="12">
            <v-card tile>
              <div style="position:relative;">
                <v-img
                  :src="require('../assets/no_banner_img.png')"
                  height="150"
                >
                </v-img>

                <!-- sm and above -->
                <div class="hidden-xs-only">
                  <v-img style="position:absolute; top:45px; left:50px; z-index:2; border:solid 1px #eee;"
                    :src="require('../assets/no_company_profile_img.png')"
                    height="130"
                    width="130"
                  >
                  </v-img>

                  <div style="position:absolute; top:95px; left:200px; z-index:2;">
                    <p class="white--text title">{{getCompanyInfo.companyName}}</p>
                  </div>

                  <v-card tile elevation="0" class="white" height="50">
                    
                    <v-tabs
                      v-model="tab"
                    >
                      <v-spacer></v-spacer>
                      <v-tab href="#tab-1">
                        Overview
                      </v-tab>
                      <v-tab href="#tab-2">
                        Jobs
                      </v-tab>
                      <v-tab href="#tab-3">
                        Feedback
                      </v-tab>
                    </v-tabs>
                  </v-card>
                </div>


                <!-- xs only -->
                <div class="hidden-sm-and-up">
                  <v-card tile elevation="0" class="white"  style="position:relative;">
                    <v-img
                      style="border:solid 1px #eee; position:relative; top:-25px;"
                      :src="require('../assets/no_company_profile_img.png')"
                      height="130"
                      width="130"
                      class="mx-auto"
                    >
                    </v-img>
                    <p class="text-center title ma-0">{{getCompanyInfo.companyName}}</p>
                    <div class="mb-3"></div>
                    <v-tabs
                      fixed-tabs
                      v-model="tab"
                    >
                      <v-tab href="#tab-1">
                        Overview
                      </v-tab>
                      <v-tab href="#tab-2">
                        Jobs
                      </v-tab>
                      <v-tab href="#tab-3">
                        Feedback
                      </v-tab>
                    </v-tabs>

                     
                  </v-card>
                </div>
                
              </div>
            </v-card>


            <v-tabs-items v-model="tab">
              <v-tab-item
                value="tab-1"
                style="background:#fafafa;"
              >
                <v-col cols="12" class="px-0 py-2">
                  <v-card class="white" tile elevation="1" :class="{'pa-5': $vuetify.breakpoint.smAndDown, 'pa-12': $vuetify.breakpoint.mdAndUp}">
                    
                    <!-- Opening Paragraph Dialog -->
                        <v-dialog v-model="openingParagDialog" max-width="600px" >
                          <template v-slot:activator="{ on }">
                            <div style="position:relative;">
                              <p class="headline">Overview</p>
                              <v-icon color="primary" class="ml-2" v-on="on" style="position:absolute; right:0; top:0;">mdi-border-color</v-icon>
                            </div>
                          </template>
                          <v-card>  
                            <v-card-title>
                              <span class="headline">Overview</span>
                            </v-card-title>

                            <!-- Opening Paragraph, Form -->
                            <div class="pa-2">
                              <div class="pa-4 my-2" style="border:1px #424242 solid;"
                              >
                                <p class="primary--text text-center caption">Paragraph</p>
                                <div v-for="(openingParag,index) in getCompanyInfo.overviewOpeningParag" :key="index">
                                  <v-textarea
                                      dense
                                      :label="'Paragraph ' + (index+1)"
                                      outlined
                                      rows="6"
                                      color="primary"
                                      class="caption"
                                      v-model="getCompanyInfo.overviewOpeningParag[index]"
                                  ></v-textarea>
                                </div>
                              </div>
                              
                              <v-divider class="light-green mt-6"></v-divider>
                              <v-divider class="light-green"></v-divider>
                              <v-divider class="light-green mb-6"></v-divider>

                              <!-- ADD Opening Paragraph -->
                              <div class="pa-4" style="border:1px solid #8BC34A;">
                                <p class=" body-2 font-weight-bold ma-2 text-center">Add Paragraph</p>
                                <v-textarea
                                    dense
                                    label="Paragraph"
                                    outlined
                                    color="light-green"
                                    rows="6"
                                    class="caption"
                                    v-model="newOpeningParag"
                                ></v-textarea>
                                
                                <v-btn block color="light-green white--text" @click="addOpeningParag()">Add</v-btn>
                              </div>
                            </div>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="primary " text @click="openingParagDialog = false">Close</v-btn>
                              <v-btn color="primary " text @click.prevent="updateOpeningParag()">Save</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>

                    <!-- Opening ParagView -->
                    <div v-for="(openingParag,index) in getCompanyInfo.overviewOpeningParag" :key="index"
                    >
                      <blockquote class="mb-8 text-justify">
                        {{openingParag}}
                      </blockquote>
                    </div>







                    
                    <div style="position:relative;">
                      <p class="body-1 font-weight-medium">
                        Why join us?
                        <!-- Why Join Us Dialog -->
                        <v-dialog v-model="whyJoinUsDialog" max-width="600px" style="position:relative;">
                          <template v-slot:activator="{ on }">
                            <v-icon color="primary" class="ml-2" v-on="on" style="position:absolute; right:0px; top:0px;">mdi-border-color</v-icon>
                          </template>
                          <v-card>  
                            <v-card-title>
                              <span class="headline">Why join us?</span>
                            </v-card-title>

                            <!-- Why Join Us, Form -->
                            <div class="pa-2">
                              <div class="pa-4 my-2" style="border:1px #424242 solid;"
                              >
                                <p class="primary--text text-center caption">Paragraph</p>
                                <div v-for="(whyJoinUs,index) in getCompanyInfo.whyJoinUs" :key="index">
                                  <v-textarea
                                      class="caption"
                                      dense
                                      :label="'Paragraph ' + (index+1)"
                                      outlined
                                      rows="6"
                                      color="primary"
                                      v-model="getCompanyInfo.whyJoinUs[index]"
                                  ></v-textarea>
                                </div>
                              </div>
                              
                              <v-divider class="light-green mt-6"></v-divider>
                              <v-divider class="light-green"></v-divider>
                              <v-divider class="light-green mb-6"></v-divider>

                              <!-- ADD Opening Paragraph -->
                              <div class="pa-4" style="border:1px solid #8BC34A;">
                                <p class=" body-2 font-weight-bold ma-2 text-center">Add Paragraph</p>
                                <v-textarea
                                    class="caption"
                                    dense
                                    label="Paragraph"
                                    outlined
                                    color="light-green"
                                    rows="6"
                                    v-model="newWhyJoinUs"
                                ></v-textarea>
                                
                                <v-btn block color="light-green white--text" @click="addWhyJoinUs()">Add</v-btn>
                              </div>
                            </div>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="primary " text @click="whyJoinUsDialog = false">Close</v-btn>
                              <v-btn color="primary " text @click.prevent="updateWhyJoinUs()">Save</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                        
                      </p>
                    </div>
                    
                    <div v-for="whyJoinUs in getCompanyInfo.whyJoinUs" :key="whyJoinUs">
                      <blockquote class="mb-8 text-justify">
                        {{whyJoinUs}}
                      </blockquote>
                    </div>







                    
                    <div style="position:relative;">
                      <p class="body-1 font-weight-medium pr-8">
                        What else makes us a great employer?
                      </p>
                      <!-- <v-icon color="primary" class="ml-2" style="position:absolute; right:0; top:0px;">mdi-border-color</v-icon> -->
                      <!-- Opening Paragraph Dialog -->
                        <v-dialog v-model="whatElseDialog" max-width="600px" style="position:relative;">
                          <template v-slot:activator="{ on }">
                            <v-icon color="primary" class="ml-2" v-on="on" style="position:absolute; right:0px; top:0px;">mdi-border-color</v-icon>
                          </template>
                          <v-card>  
                            <v-card-title>
                              <span class="headline">What else makes us a great employer?</span>
                            </v-card-title>

                            <!-- Opening Paragraph, Form -->
                            <div class="pa-2">
                              <div class="pa-4 my-2" style="border:1px #424242 solid;"
                              >
                                <p class="primary--text text-center caption">Paragraph</p>
                                <div v-for="(whatElse,index) in getCompanyInfo.whatElse" :key="index">
                                  <v-textarea
                                      class="caption"
                                      dense
                                      :label="'Item ' + (index+1)"
                                      outlined
                                      rows="5"
                                      color="primary"
                                      v-model="getCompanyInfo.whatElse[index]"
                                  ></v-textarea>
                                </div>
                              </div>
                              
                              <v-divider class="light-green mt-6"></v-divider>
                              <v-divider class="light-green"></v-divider>
                              <v-divider class="light-green mb-6"></v-divider>

                              <!-- ADD Opening Paragraph -->
                              <div class="pa-4" style="border:1px solid #8BC34A;">
                                <p class=" body-2 font-weight-bold ma-2 text-center">Add Paragraph</p>
                                <v-textarea
                                    class="caption"
                                    dense
                                    label="Paragraph"
                                    outlined
                                    color="light-green"
                                    rows="5"
                                    v-model="newWhatElse"
                                ></v-textarea>
                                
                                <v-btn block color="light-green white--text" @click="addWhatElse()">Add</v-btn>
                              </div>
                            </div>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="primary " text @click="whatElseDialog = false">Close</v-btn>
                              <v-btn color="primary " text @click.prevent="updateWhatElse()">Save</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      
                    </div>
                    <ul class="body-2" v-for="whatElse in getCompanyInfo.whatElse" :key="whatElse">
                      <li>{{whatElse}}</li>
                    </ul>
                  </v-card>
                </v-col>  
              </v-tab-item>


              <!-- JOBS VIEW -->

              <v-tab-item
                value="tab-2"
                style="background:#fafafa;"
              >
                <v-col cols="12" class="px-0 py-2">
                  <v-card tile elevation="1" class="pa-2">
                    <v-container class="pa-0">
                      <v-row>
                        <v-col cols="12" class="py-0" md="4" lg="3" sm="6" 
                          v-for="(getCompanyJob,index) in getCompanyJobs" :key="index"
                        >
                          <company-jobs :companyjobs="getCompanyJob"></company-jobs>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
                
              </v-tab-item>



              <!-- FEEDBACK -->

              <v-tab-item
                value="tab-3"
                style="background:#fafafa;"
              >
                <v-col cols="12" class="px-0 py-2">
                  <v-card height="500" tile elevation="1">
                    <p class="display-1 text-center pt-12">Feedback</p>
                  </v-card>
                </v-col>
              </v-tab-item>
            </v-tabs-items>

          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import {dbFirestore,db} from '../firebasedb'
import CompanyJobs from '../components/CompanyJobs'


export default {
    components:{
      'company-jobs':CompanyJobs
    },
    data:()=>({
        openingParagDialog:false,
        whyJoinUsDialog:false,
        whatElseDialog:false,
        newOpeningParag:'',
        newWhyJoinUs:'',
        newWhatElse:'',
        tab:null,
    }),
    computed: {
      getCompanyInfo(){
        return this.$store.getters.getCompanyInfo;
      },
      getCompanyJobs(){
        return this.$store.getters.getCompanyJobs;
      }
    },
    methods:{
      addOpeningParag(){
        if(this.newOpeningParag != ''){
          this.getCompanyInfo.overviewOpeningParag.push(this.newOpeningParag);
          this.newOpeningParag = '';
        }
      },
      addWhyJoinUs(){
        if(this.newWhyJoinUs != ''){
          this.getCompanyInfo.whyJoinUs.push(this.newWhyJoinUs);
          this.newWhyJoinUs = '';
        }
      },
      addWhatElse(){
        if(this.newWhatElse != ''){
          this.getCompanyInfo.whatElse.push(this.newWhatElse);
          this.newWhatElse = '';
        }
      },
      updateOpeningParag(){
        var companyRef = dbFirestore.collection("company").doc(db.auth().currentUser.uid);

        return companyRef.update({
            overviewOpeningParag: this.getCompanyInfo.overviewOpeningParag
        }).then(()=>{
            window.console.log("Overview successfully updated!");
            this.openingParagDialog = false;
        }).catch((error)=>{
            window.console.error("Error updating document: ", error);
        });
      },
      updateWhyJoinUs(){
        var companyRef = dbFirestore.collection("company").doc(db.auth().currentUser.uid);

        return companyRef.update({
            whyJoinUs: this.getCompanyInfo.whyJoinUs
        }).then(()=>{
            window.console.log("Why Join Us successfully updated!");
            this.whyJoinUsDialog = false;
        }).catch((error)=>{
            window.console.error("Error updating document: ", error);
        });
      },
      updateWhatElse(){
        var companyRef = dbFirestore.collection("company").doc(db.auth().currentUser.uid);

        return companyRef.update({
            whatElse: this.getCompanyInfo.whatElse
        }).then(()=>{
            window.console.log("What Else successfully updated!");
            this.whatElseDialog = false;
        }).catch((error)=>{
            window.console.error("Error updating document: ", error);
        });
      },
    }
}
</script>

<style>

</style>