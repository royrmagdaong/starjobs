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

        var docRef = dbFirestore.collection("users").doc(db.auth().currentUser.uid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                window.console.log("Document data:", doc.data().aboutMe);
                
                //store data in vuex
                this.$store.dispatch('setAboutMe',doc.data().aboutMe);
            } else {
                // doc.data() will be undefined in this case
                window.console.log("No such document!");
            }
        }).catch((error) => {
            window.console.log("Error getting document:", error);
            
        });

      }else{
        window.console.log('null'); 
        this.$store.dispatch('setAboutMe',null);
      }
    });
  },
};
</script>

<style scoped>
</style>
