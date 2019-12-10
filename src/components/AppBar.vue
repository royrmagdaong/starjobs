<template>
  <div>
      <v-app-bar
      dark
      elevation="1"
      fixed
      app
      dense
    >
  
      <v-btn text class="primary--text title" router-link to="/">STARJOBS</v-btn>
      
      <v-divider
        class="mx-4 hidden-sm-and-down"
        inset
        vertical
      ></v-divider>
      

      <v-spacer></v-spacer>
      
      <v-toolbar-items>
        <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                v-on="on"
                text
                color="primary"
                class="hidden-sm-and-down caption font-weight-bold"
                
                >
                Browse Jobs
                <i class="fas fa-caret-down ml-1"></i>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                v-for="(job,index) in browseJobs"
                :key="index"
                @click.prevent="findJobByCategory('search-jobs')"
                >
                <v-list-item-title class="caption">{{job}}</v-list-item-title>
                </v-list-item>
                
            </v-list>
            </v-menu>
        <v-btn text router-link to="/login" color="primary" class="hidden-sm-and-down caption font-weight-bold" v-if="!isLogin">LOG IN</v-btn>
        <v-btn text router-link to="/sign-up" color="primary" class="hidden-sm-and-down caption font-weight-bold" v-if="!isLogin">SIGN UP</v-btn>
      
        
        <v-menu offset-y v-if="isLogin">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon class="hidden-sm-and-down caption font-weight-bold">
              <v-avatar size="35" class="grey"></v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              router-link
              to="/home"
            >
              <v-list-item-title class="caption">Home</v-list-item-title>
            </v-list-item>

            <v-list-item
              router-link
              to="/search-jobs"
              v-if="getIsApplicant"
            >
              <v-list-item-title class="caption" >Search Jobs</v-list-item-title>
            </v-list-item>

            <v-list-item
              router-link
              to="/post-job"
              v-if="getIsCompany"
            >
              <v-list-item-title class="caption" >Post a Job</v-list-item-title>
            </v-list-item>

            <v-list-item
              router-link
              to="/profile"
              v-if="getIsApplicant"
            >
              <v-list-item-title class="caption" >Profile</v-list-item-title>
            </v-list-item>

            <v-list-item
              router-link
              to="/profile"
              v-if="getIsCompany"
            >
              <v-list-item-title class="caption" >Company Profile</v-list-item-title>
            </v-list-item>

            <v-list-item
              @click.prevent="logout"
            >
              <v-list-item-title class="caption">Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-toolbar-items>
       <v-app-bar-nav-icon  class="hidden-md-and-up primary--text" @click.prevent="drawer=!drawer"></v-app-bar-nav-icon>

    </v-app-bar>
    

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      dark
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title >John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>

        <v-list-item
          router-link
          to="/home"
        >
          <v-list-item-content>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          router-link
          to="/profile"
          v-if="isLogin && getIsApplicant"
        >
          <v-list-item-content>
            <v-list-item-title >Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          router-link
          to="/profile"
          v-if="isLogin && getIsCompany"
        >
          <v-list-item-content>
            <v-list-item-title >Company Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          router-link
          to="/post-job"
          v-if="isLogin && getIsCompany"
        >
          <v-list-item-content>
            <v-list-item-title >Post A Job</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          router-link
          to="/search-jobs"
          v-if="isLogin && getIsApplicant"
        >
          <v-list-item-content>
            <v-list-item-title >Search Job</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        

        <v-list-item
          router-link
          to="/login"
          v-if="!isLogin"
        >
          <v-list-item-content>
            <v-list-item-title >Log in</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          router-link
          to="/sign-up"
          v-if="!isLogin"
        >
          <v-list-item-content>
            <v-list-item-title >Sign Up</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="isLogin"
          @click.prevent="logout"
        >
          <v-list-item-content>
            <v-list-item-title >Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {db} from '../firebasedb'

export default {
  data:()=>({
    browseJobs:['All Jobs','Specialization','Location','Company Names','Fresh Grad Jobs','Call Center Jobs','Government Jobs'],
    drawer:false,
    isLogin:false
  }),
  created(){
    db.auth().onAuthStateChanged(()=>{
      if(db.auth().currentUser!=null){
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    });
  },
  methods:{
    findJobByCategory(cat){
      this.$router.push(cat);
    },
    logout(){
      db.auth().signOut();
      this.$router.push('/');
    }
  },
    computed: {
      getIsApplicant(){
        return this.$store.getters.getIsApplicant;
      },
      getIsCompany(){
        return this.$store.getters.getIsCompany;
      }
    }
}
</script>

<style>

</style>