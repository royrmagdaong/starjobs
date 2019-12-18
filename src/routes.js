import Vue from 'vue'
import Router from 'vue-router'

import {db} from './firebasedb'
import Home from './views/Home'
import Login from './views/Login'
import SignUp from './views/SignUp'
import SearchJobs from './views/SearchJobs'
import Profile from './views/Profile'
import PostJob from './views/PostJob'
import CompanyProfile from './views/CompanyProfile'
import SearchCompany from './views/SearchCompany'
import ViewCompanyProfile from './views/ViewCompanyProfile'
import ViewJobPost from './views/ViewJobPost'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search-company',
      name: 'search-company',
      component: SearchCompany
    },
    {
      path: '/view-company',
      name: 'view-company',
      component: ViewCompanyProfile
    },
    {
      path: '/view-job',
      name: 'view-job',
      component: ViewJobPost
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        isLogin:true
      }
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
      meta:{
        isLogin:true
      }
    },
    {
      path: '/search-jobs',
      name: 'search-jobs',
      component: SearchJobs
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta:{
        requiresAuth: true,
        applicantProfile: true,
      }
    },
    {
      path: '/company-profile',
      name: 'CompanyProfile',
      component: CompanyProfile,
      meta:{
        requiresAuth: true,
        companyProfile:true,
      }
    },
    {
      path: '/post-job',
      name: 'PostJob',
      component: PostJob,
      meta:{
        requiresAuth:true,
        postJob:true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
    var requiresAuth = to.matched.some( record => record.meta.requiresAuth );
    var isLogin = to.matched.some( record => record.meta.isLogin);
    var postJob = to.matched.some( record => record.meta.postJob);
    var applicantProfile = to.matched.some( record => record.meta.applicantProfile);
    var companyProfile = to.matched.some( record => record.meta.companyProfile);
    var currentUser = db.auth().currentUser;
    var currentDisplayName = false;

    if(currentUser == null){
      currentDisplayName = false;
    }else{
      currentDisplayName = currentUser.displayName;
    }

    
    if(requiresAuth && currentUser==null) {
      next('login');
      window.console.log('1');
    }else if(!requiresAuth && currentUser && isLogin){
      next('search-jobs');
      window.console.log('2');
    }else if(currentDisplayName == 'true' && postJob && requiresAuth){
      next('search-jobs');
      window.console.log('applicant trying to access postjob view, RETURN to Search Job');
    }else if(currentDisplayName == 'false' && applicantProfile && requiresAuth){
      next('company-profile');
      window.console.log('company trying to access applicant profile view, RETURN to Company Profile');
    }else if(currentDisplayName == 'true' && companyProfile && requiresAuth){
      next('profile');
      window.console.log('applicant trying to access company profile view, RETURN to Applicant Profile');
    }else{
      next();
      window.console.log('normal route');
    } 
  });

export default router;