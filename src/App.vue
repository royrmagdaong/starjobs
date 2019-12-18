<template>
  <v-app>
    <app-bar></app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import {db, dbFirestore} from './firebasedb'

export default {

  components: {
    'app-bar':AppBar,
  },

  data: () => ({
    //
  }),
  methods:{
  },
  created(){
    this.$store.dispatch('setJobPosts','');

    db.auth().onAuthStateChanged(()=>{
      var currentUser = db.auth().currentUser;
      if(currentUser!=null){

        if(currentUser.displayName == 'true'){
          var userDoc = dbFirestore.collection("applicant").doc(db.auth().currentUser.uid);

          userDoc.get().then((doc) => {
              if (doc.exists) {
                  //store data in vuex
                  this.$store.dispatch('setIsApplicant',doc.data().isApplicant);
                  this.$store.dispatch('setIsCompany',false);
                  this.$store.dispatch('setApplicantInfo',doc.data());
              } else {
                  window.console.log("No such document!");
              }
          }).catch((error) => {
              window.console.log("Error getting document:", error);
          });
        }else{
          var companyDoc = dbFirestore.collection("company").doc(db.auth().currentUser.uid);

          // populate company jobs
          this.$store.dispatch('setCompanyJobs','');

          companyDoc.get().then((doc) => {
              if (doc.exists) {
                  //store data in vuex
                  this.$store.dispatch('setIsCompany',doc.data().isCompany);
                  this.$store.dispatch('setIsApplicant',false);
                  this.$store.dispatch('setCompanyInfo',doc.data());
              } else {
                  window.console.log("No such document!");
              }
          }).catch((error) => {
              window.console.log("Error getting document:", error);
          });
        }

      }else{
        window.console.log('null');
        this.$store.dispatch('setIsApplicant',false);
        this.$store.dispatch('setIsCompany',false);

        //clear user info
        this.$store.dispatch('setCompanyInfo',null);
        this.$store.dispatch('setApplicantInfo',null);
        this.$store.dispatch('setCompanyJobsClear',null);
      }
    });
  },
};
</script>

<style scoped>
</style>
