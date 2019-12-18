import Vue from 'vue';
import Vuex from 'vuex';
import {dbFirestore,db} from '../firebasedb'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        isApplicant:false,
        isCompany:false,
        companyInfo:{},
        applicantInfo:{},
        jobPosts:[],
        companyJobs:[],
    },
    getters:{
        getIsApplicant: state => {
            return state.isApplicant;
        },
        getIsCompany: state => {
            return state.isCompany;
        },
        getCompanyInfo: state => {
            return state.companyInfo;
        },
        getApplicantInfo: state => {
            return state.applicantInfo;
        },
        getJobPosts: state => {
            return state.jobPosts;
        },
        getCompanyJobs: state => {
            return state.companyJobs;
        }
    },
    mutations:{
        setIsApplicant(state,data){
            state.isApplicant = data;
        },
        setIsCompany(state,data){
            state.isCompany = data;
        },
        setCompanyInfo(state,data){
            state.companyInfo = data; 
        },
        setApplicantInfo(state,data){
            state.applicantInfo = data;
        },
        setJobPosts(state,data){
            state.jobPosts = data;
        },
        setCompanyJobs(state,data){
            state.companyJobs = data;
        }
    },
    actions:{
        setIsApplicant: (context,payload) => {
            context.commit('setIsApplicant', payload);
        },
        setIsCompany: (context,payload) => {
            context.commit('setIsCompany', payload);
        },
        setCompanyInfo: (context,payload) => {
            context.commit('setCompanyInfo', payload);
        },
        setApplicantInfo: (context,payload) => {
            context.commit('setApplicantInfo', payload);
        },
        setJobPosts: (context) => {
            var jobPostDocs = dbFirestore.collection("JobPosts");

            var docArr = [];

            jobPostDocs.get()
            .then((querySnapshot) => {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    docArr.push(doc.data());
                });

                context.commit('setJobPosts',docArr);
            })
            .catch(function(error) {
                window.console.log("Error getting documents: ", error);
            });
        },
        setCompanyJobs: (context) => {
            var jobPostDocs = dbFirestore.collection("JobPosts").where("uid", "==", db.auth().currentUser.uid);

            var docArr = [];

            jobPostDocs.get()
            .then((querySnapshot) => {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    docArr.push(doc.data());
                });

                context.commit('setCompanyJobs',docArr);
            })
            .catch(function(error) {
                window.console.log("Error getting documents: ", error);
            });
        },
        setCompanyJobsClear: (context,payload) => {
            context.commit('setCompanyJobs', payload);
        }
    }
})

