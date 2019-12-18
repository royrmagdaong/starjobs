<template>
  <v-card tile elevation="0" style="border: 1px solid #B2FF59" class="my-2" router-link to="/view-job">
    <p class="title text-center mt-4 mb-0">{{companyjobs.positionTitle}}</p>
    <p class="body-2 text-center font-weight-">{{companyjobs.companyName}}</p>
    <v-divider></v-divider>
    <div class="pa-2">
        <p class="caption ma-0"><span class="font-weight-medium">Location: </span>{{companyjobs.location}}</p>
        <p class="caption mb-1"><span class="font-weight-medium">Salary: </span><span class="font-weight-light">{{companyjobs.expectedSalary}}</span></p>
        <p class="caption font-weight-medium mb-1">Job Description:</p>
        <blockquote class="caption text-justify">
            {{companyjobs.qualifications}}
        </blockquote>
    </div>
    
    
  </v-card>
</template>

<script>
export default {
    props:['companyjobs']
}
</script>

<style>

</style>