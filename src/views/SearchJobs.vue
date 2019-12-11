<template>
  <v-container fluid>
      <v-row >

          <v-col cols="0" lg="2" class="hidden-md-and-down pr-0 pt-0" >
              <v-card tile class="pa-4 mb-2" style="position:fixed" width="16%" height="46.7%">
                  <p class="title">Search Criteria</p>
                  <v-text-field
                    label="Keywords"
                    outlined
                   ></v-text-field>
                   <v-combobox
                    :items="items"
                    label="Location"
                    outlined
                   ></v-combobox>
                   <v-btn block large class="primary">Search</v-btn>
              </v-card>

              <v-card tile class="pa-4" style="position:fixed; top:57%;" width="16%" height="41.7%">
                  <p class="title ma-0">Browse Job</p>
                  <div v-for="(job,index) in browseJobs" :key="index" class="my-1">
                      <a class="black--text" router-link to="">{{job}}</a>
                  </div>
              </v-card>
          </v-col>


          <v-col cols="12" lg="8" class="pt-0 px-2">
            <div v-for="(getJobPost,index) in getJobPosts" :key="index" class="mb-2">
                <job-post :jobPost="getJobPost"></job-post>
            </div>
             <!-- <v-pagination
                v-model="page"  
                :length="12"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
                total-visible="7"
                class="mb-1"
             ></v-pagination> -->
          </v-col>


          <v-col cols="0" lg="2" class="pl-0 hidden-md-and-down pt-0" >
              <v-img
                src="https://tpc.googlesyndication.com/simgad/15033756620896927571"
                class="mb-2"
              >
              </v-img>
              <v-img
                src="https://tpc.googlesyndication.com/simgad/2292322216361054760"
                class="mb-2"
              >
              </v-img>
          </v-col>

      </v-row>
  </v-container>
</template>

<script>
import JobPost from '../components/JobPost'

export default {
    components:{
        'job-post':JobPost,
        
    },
    created(){
        this.$store.dispatch('setJobPosts','');
    },
    data:()=>({
        page: 1,
        items: ['Pasig City','Makati City','Taguig City','Marikina City','All'],
        browseJobs:['All Jobs','Specialization','Location','Company Names','Fresh Grad Jobs','Call Center Jobs','Government Jobs'],
        
    }),
    computed:{
        getJobPosts(){
            return this.$store.getters.getJobPosts;
        }
    },
}
</script>

<style>

</style>