import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        isApplicant:false,
        isCompany:false,
    },
    getters:{
        getIsApplicant: state => {
            return state.isApplicant;
        },
        getIsCompany: state => {
            return state.isCompany;
        }
    },
    mutations:{
        setIsApplicant(state,data){
            if(data!=null){
                state.isApplicant = data;
            } 
        },
        setIsCompany(state,data){
            if(data!=null){
                state.isCompany = data;
            } 
        }
    },
    actions:{
        setIsApplicant: (context,payload) => {
            context.commit('setIsApplicant', payload);
        },
        setIsCompany: (context,payload) => {
            context.commit('setIsCompany', payload);
        }
    }
})


