import Vue from 'vue'
import Router from 'vue-router'
import {db} from './firebasedb'
import Home from './views/Home'
import Login from './views/Login'
import SignUp from './views/SignUp'
import SearchJobs from './views/SearchJobs'
import Profile from './views/Profile'

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
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
    var requiresAuth = to.matched.some( record => record.meta.requiresAuth );
    var isLogin = to.matched.some( record => record.meta.isLogin);
    var currentUser = db.auth().currentUser;
    // when route requires auth and there's no current user, reidrect to '/login'
    if(requiresAuth && currentUser==null) {
      next('login')
      window.console.log('1');
    }else if(!requiresAuth && currentUser && isLogin){
      next('search-jobs')
      window.console.log('2');
    }else{
      next();
      window.console.log('3');
    } 
  });

export default router;