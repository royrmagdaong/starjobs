import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        aboutMe:{},
    },
    getters:{
        getAboutMe: state => {
            return state.aboutMe;
        },
    },
    mutations:{
        setAboutMe(state,data){
            if(data!=null){
                state.aboutMe = data;
            }
        },
        
    },
    actions:{
        setAboutMe: (context,payload) => {
            context.commit('setAboutMe', payload);
        }
    }
})


