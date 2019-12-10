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

    db.auth().onAuthStateChanged(()=>{
      var currentUser = db.auth().currentUser;
      if(currentUser!=null){

        if(currentUser.displayName == 'true'){
          var userDoc = dbFirestore.collection("applicant").doc(db.auth().currentUser.uid);

          userDoc.get().then((doc) => {
              if (doc.exists) {
                  
                  //store data in vuex
                  this.$store.dispatch('setIsApplicant',doc.data().isApplicant);
                  this.$store.dispatch('setApplicantInfo',doc.data());
              } else {
                  // doc.data() will be undefined in this case
                  window.console.log("No such document!");
              }
          }).catch((error) => {
              window.console.log("Error getting document:", error);
              
          });
        }else{
          var companyDoc = dbFirestore.collection("company").doc(db.auth().currentUser.uid);

          companyDoc.get().then((doc) => {
              if (doc.exists) {
                  
                  //store data in vuex
                  this.$store.dispatch('setIsCompany',doc.data().isCompany);
                  this.$store.dispatch('setCompanyInfo',doc.data());
              } else {
                  // doc.data() will be undefined in this case
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
      }
    });
  },
};
</script>

<style scoped>
</style>
