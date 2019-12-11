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