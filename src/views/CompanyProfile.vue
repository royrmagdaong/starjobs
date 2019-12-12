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
                <v-img style="position:absolute; top:45px; left:50px; z-index:2; border:solid 1px #eee;"
                  :src="require('../assets/no_company_profile_img.png')"
                  height="130"
                  width="130"
                >
                </v-img>

                <div style="position:absolute; top:95px; left:200px; z-index:2;">
                  <p class="white--text title">{{getCompanyInfo.companyName}}</p>
                </div>
              </div>
              <v-card tile elevation="0" class="white" height="50">
              </v-card>
            </v-card>

            <v-col cols="12" class="px-0 py-2">
                <v-card class="white pa-12" tile>
                  <p class="headline">Overview</p>
                  <blockquote class="mb-8 text-justify">
                    At (Company Name), we work with some of the biggest companies in the Philippines and around the world.
                      We solve our clients’ toughest challenges by providing unmatched services in strategy, consulting, digital, technology and operations.  Today, more than ever, we are adopting innovation to deliver transformational outcomes for a demanding new digital world.
                        How do we do it? We apply the new every day, through new thinking, technology, innovation and delivery platforms that revolutionize our clients’ businesses.
                        We invest in the future by empowering our people to lead in the new through next horizon business and leadership skills.
                      With our 49,000-strong community in the Philippines and as one of the biggest and most diversified IT-BPM company in the country today, Accenture works to make a difference in the way the world works and lives.
                  </blockquote>
                  <p class="body-1 font-weight-medium">Why join us?</p>
                  <blockquote class="my-4 text-justify">
                    Build a career that engages your whole self to become the best you. At Accenture, you’ll have the opportunity to explore your passions to solve challenges that are relevant to you. Future proof your career as you continuously learn and grow. New labs, innovations centers, liquid studios and learning facilities allow us to collaborate like never before. You’ll work with supportive colleagues, get access to training opportunities so you can perform at your best and have the freedom to drive your career in the direction that you want. 
                  </blockquote>

                  <blockquote class="my-4 text-justify">
                    By joining Accenture, you’ll also get the chance to apply the new every day – new thinking, new technology, innovation and delivery platforms to revolutionize the way the world works and lives. Whatever career path you choose, you’ll be in the position to experiment, innovate and deliver breakthrough solutions that make a difference in people’s lives.
                  </blockquote>

                  <p class="body-1 font-weight-medium">What else makes us a great employer?</p>
                  <ul class="body-2">
                    <li>In fiscal 2016, we invested US$941M in learning and development for our people.</li>
                    <li>We strive to build a diverse and inclusive workplace where everyone feels a sense of belonging. We have more than 150,000 women globally, and we target to grow our percentage of women by 50 percent in 2025. </li>
                    <li>We value the contribution of our working mothers, providing them an array of benefits including 120 days of maternity leave.</li>
                    <li>With our corporate citizenship initiatives, you’ll have the opportunity to support meaningful causes and make a bigger impact. In fiscal 2016, our people contributed more than 700,000 hours to volunteering activities, from teaching young students how to code to helping nonprofits build houses for the poor.</li>
                  </ul>

                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="4" xs="6" class="py-0">
                        <v-container>
                          <v-row>
                            <v-col cols="3" class=" text-right">
                              <v-avatar size="60" color="grey"></v-avatar>
                            </v-col>
                            <v-col cols="9" class="">
                              <p class="body-2 mb-2 font-weight-medium">Company size</p>
                              <p class="caption">More than 1,000 employees</p>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-col>

                      <v-col cols="12" sm="4" xs="6" class="py-0">
                        <v-container>
                          <v-row>
                            <v-col cols="3" class=" text-right">
                              <v-avatar size="60" color="grey"></v-avatar>
                            </v-col>
                            <v-col cols="9" class="">
                              <p class="body-2 mb-2 font-weight-medium">Benefits</p>
                              <p class="caption">Medical, Miscellaneous allowance, Dental, Employee Stock Purchase, Plan, Expanded Maternity Leave, Retirement Plan</p>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-col>

                      <v-col cols="12" sm="4" xs="6" class="py-0">
                        <v-container>
                          <v-row>
                            <v-col cols="3" class=" text-right">
                              <v-avatar size="60" color="grey"></v-avatar>
                            </v-col>
                            <v-col cols="9" class="">
                              <p class="body-2 mb-2 font-weight-medium">WORK HOURS</p>
                              <p class="caption">Shifting Schedule</p>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-col>
                      
                      <v-col cols="12" sm="4" xs="6" class="py-0">
                        <v-container>
                          <v-row>
                            <v-col cols="3" class=" text-right">
                              <v-avatar size="60" color="grey"></v-avatar>
                            </v-col>
                            <v-col cols="9" class="">
                              <p class="body-2 mb-2 font-weight-medium">DRESS CODE</p>
                              <p class="caption">Business Casual</p>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-col>

                      <v-col cols="12" sm="4" xs="6" class="py-0">
                        <v-container>
                          <v-row>
                            <v-col cols="3" class=" text-right">
                              <v-avatar size="60" color="grey"></v-avatar>
                            </v-col>
                            <v-col cols="9" class="">
                              <p class="body-2 mb-2 font-weight-medium">SPOKEN LANGUAGE</p>
                              <p class="caption">English</p>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-col>

                      <v-col cols="12" sm="4" xs="6" class="py-0">
                        <v-container>
                          <v-row>
                            <v-col cols="3" class=" text-right">
                              <v-avatar size="60" color="grey"></v-avatar>
                            </v-col>
                            <v-col cols="9" class="">
                              <p class="body-2 mb-2 font-weight-medium">AVERAGE PROCESSING TIME</p>
                              <p class="caption">4 days</p>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
            </v-col>

          </v-col>
      </v-row>
  </v-container>
</template>

<script>

export default {
    data:()=>({
        
    }),
    computed: {
      getCompanyInfo(){
        return this.$store.getters.getCompanyInfo;
      }
    },
    methods:{
      
    }
}
</script>

<style>

</style>