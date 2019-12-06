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
                        <p class="title ma-0">John Doe</p>
                        <p class="caption ma-0">SOFTWARE ENGINEER</p>
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
                    <p class="title">Education <v-icon color="primary" class="ml-2" @click.prevent="">mdi-border-color</v-icon></p>
                    <v-divider></v-divider>
                    <v-row no-gutters class="pt-2">
                      <v-col cols="4"><p>Primary:</p></v-col>
                      <v-col cols="6"><p>---</p></v-col>
                      <v-col cols="2"><p>---</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Secondary:</p></v-col>
                      <v-col cols="6"><p>---</p></v-col>
                      <v-col cols="2"><p>---</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Tersiary:</p></v-col>
                      <v-col cols="6"><p>---</p></v-col>
                      <v-col cols="2"><p>---</p></v-col>
                    </v-row>
                  </v-col>
                </v-row>

                <!-- EXPERIENCE -->
                <v-row v-if="items[model].text=='Experience'">
                  <v-col cols="12">
                    <p class="title">Experience <v-icon color="primary" class="ml-2" @click.prevent="">mdi-border-color</v-icon></p>
                    <v-divider></v-divider>
                    <v-row no-gutters class="pt-2">
                      <v-col cols="4"><p>2011-2015:</p></v-col>
                      <v-col cols="8">
                        <p class="title mb-1">Accenture Inc.</p>
                        <p class="caption mb-1 font-italic">Web Designer</p>
                        <ul>
                          <li><p class="caption mb-1 font-italic">Created custom graphics sets for client, with excellent client's satisfactory scores</p></li>
                          <li><p class="caption mb-1 font-italic">Handled all composition, color, illustration, typography, and branding for client projects.</p></li>
                          <li><p class="caption mb-1 font-italic">Commonly spearheaded 4+ projects at one time</p></li>
                          <li><p class="caption mb-1 font-italic">Improved UX for websites</p></li>
                        </ul>
                        
                      </v-col>
                    </v-row>
                    <v-row no-gutters class="pt-2">
                      <v-col cols="4"><p>2011-2015:</p></v-col>
                      <v-col cols="8">
                        <p class="title mb-1">Accenture Inc.</p>
                        <p class="caption mb-1 font-italic">Web Designer</p>
                        <ul>
                          <li><p class="caption mb-1 font-italic">Created custom graphics sets for client, with excellent client's satisfactory scores</p></li>
                          <li><p class="caption mb-1 font-italic">Handled all composition, color, illustration, typography, and branding for client projects.</p></li>
                          <li><p class="caption mb-1 font-italic">Commonly spearheaded 4+ projects at one time</p></li>
                          <li><p class="caption mb-1 font-italic">Improved UX for websites</p></li>
                        </ul>
                        
                      </v-col>
                    </v-row>
                    <v-row no-gutters class="pt-2">
                      <v-col cols="4"><p>2011-2015:</p></v-col>
                      <v-col cols="8">
                        <p class="title mb-1">Accenture Inc.</p>
                        <p class="caption mb-1 font-italic">Web Designer</p>
                        <ul>
                          <li><p class="caption mb-1 font-italic">Created custom graphics sets for client, with excellent client's satisfactory scores</p></li>
                          <li><p class="caption mb-1 font-italic">Handled all composition, color, illustration, typography, and branding for client projects.</p></li>
                          <li><p class="caption mb-1 font-italic">Commonly spearheaded 4+ projects at one time</p></li>
                          <li><p class="caption mb-1 font-italic">Improved UX for websites</p></li>
                        </ul>
                        
                      </v-col>
                    </v-row>
                    <v-row no-gutters class="pt-2">
                      <v-col cols="4"><p>2011-2015:</p></v-col>
                      <v-col cols="8">
                        <p class="title mb-1">Accenture Inc.</p>
                        <p class="caption mb-1 font-italic">Web Designer</p>
                        <ul>
                          <li><p class="caption mb-1 font-italic">Created custom graphics sets for client, with excellent client's satisfactory scores</p></li>
                          <li><p class="caption mb-1 font-italic">Handled all composition, color, illustration, typography, and branding for client projects.</p></li>
                          <li><p class="caption mb-1 font-italic">Commonly spearheaded 4+ projects at one time</p></li>
                          <li><p class="caption mb-1 font-italic">Improved UX for websites</p></li>
                        </ul>
                        
                      </v-col>
                    </v-row>  
                  </v-col>
                </v-row>
                
                <!-- SKILLS -->
                <v-row v-if="items[model].text=='Skills'">
                  <v-col cols="12">
                    <p class="title">Skills <v-icon color="primary" class="ml-2" @click.prevent="">mdi-border-color</v-icon></p>
                    <v-divider></v-divider>
                    <ul class="pt-2">
                      <li>Javascript</li>
                      <li>Vuejs</li>
                      <li>Angular</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>Materialize</li>
                      <li>Vuetify</li>
                      <li>CS6 Adobe Photoshop</li>
                      <li>Git</li>
                    </ul>
                  </v-col>
                </v-row>

                <!-- ABOUT ME -->
                <v-row v-if="items[model].text=='About Me'">
                  <v-col cols="12">
                    <p class="title">About Me <v-icon color="primary" class="ml-2" @click.prevent="">mdi-border-color</v-icon></p>
                    <v-divider></v-divider>
                    <v-row no-gutters class="pt-2">
                      <v-col cols="4"><p>Name:</p></v-col>
                      <v-col cols="8"><p>---</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Gender:</p></v-col>
                      <v-col cols="8"><p>---</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Contact No.</p></v-col>
                      <v-col cols="8"><p>---</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Email</p></v-col>
                      <v-col cols="8"><p>---</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Date of Birth</p></v-col>
                      <v-col cols="8"><p>---</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Address</p></v-col>
                      <v-col cols="8"><p>---</p></v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="4" ><p>Nationality</p></v-col>
                      <v-col cols="8"><p>---</p></v-col>
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






      <!-- Company Profile -->
      <v-row no-gutters v-if="getIsCompany">
          <v-col cols="12">
            <v-card tile>
              <div style="position:relative;">
                <v-img
                  :src="require('../assets/no_banner_img.png')"
                  height="150"
                >
                </v-img>
                <v-img style="position:absolute; top:45px; left:50px; z-index:2; border:solid 1px #eee;"
                  :src="require('../assets/no_company_profile_img.png')"
                  height="130"
                  width="130"
                >
                </v-img>
              </div>
              <v-card tile elevation="0" class="white" height="50">
              </v-card>
            </v-card>


            <v-col cols="12" class="px-0 py-2">
              <v-card class="white" tile height="300">

              </v-card>
          </v-col>


          </v-col>
      </v-row>
  </v-container>
</template>

<script>
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
    }),
    computed: {
      getIsApplicant(){
        return this.$store.getters.getIsApplicant;
      },
      getIsCompany(){
        return this.$store.getters.getIsCompany;
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
          return this.getAboutMe;
        }else if(val==4){
          return 'Resume';
        }
      }
    }
}
</script>

<style>

</style>