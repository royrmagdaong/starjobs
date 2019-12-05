<template>
<div>
    <app-banner></app-banner>
    <job-category></job-category>
    <trusted-by></trusted-by>
    <hiring-scope></hiring-scope>
    <how-it-works></how-it-works>
    <choose-offers></choose-offers>
    <top-skills></top-skills>
    <trending-skills></trending-skills>

    <app-footer></app-footer>
</div>
</template>

<script>
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import JobCategory from '../components/JobCategory'
import TrustedBy from '../components/TrustedBy'
import HiringScope from '../components/HiringScope'
import HowItWorks from '../components/HowItWorks'
import ChooseOffers from '../components/ChooseOffers'
import TopSkills from '../components/TopSkills'
import TrendingSkills from '../components/TrendingSkills'


export default {
    components:{
        'app-banner':Banner,
        'app-footer':Footer,
        'job-category':JobCategory,
        'trusted-by':TrustedBy,
        'hiring-scope':HiringScope,
        'how-it-works':HowItWorks,
        'choose-offers':ChooseOffers,
        'top-skills':TopSkills,
        'trending-skills':TrendingSkills
    },
    data:()=>({
    }),
    methods:{

    },
}
</script>

<style>

</style>