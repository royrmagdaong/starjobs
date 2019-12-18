<template>
    <v-card class="mx-auto" max-width="100%" outlined elevation="2" router-link to="/view-job">
        <v-list-item three-line >
            <v-row>
                <v-col cols="12" md="2" class="pb-0">
                    <v-list-item-avatar tile size="120" style="background:#424242;" class="ma-0">
                        <v-img :src="require('../assets/no_company_profile_img.png')"></v-img>
                    </v-list-item-avatar>
                </v-col>
                <v-col cols="12" md="10" class="pt-0">
                    <v-list-item-content>
                        <div class="title primary--text text--darken-3" >
                            {{jobPost.positionTitle}}
                        </div>
                        <v-list-item-subtitle>{{jobPost.companyName}}</v-list-item-subtitle>
                        <v-list-item-title class="overline">{{jobPost.location}}</v-list-item-title>
                        <v-list-item-title class="overline">Php: {{jobPost.expectedSalary}}</v-list-item-title>
                    </v-list-item-content>
                </v-col>
            </v-row>
        </v-list-item>

        <v-divider class="mx-2"></v-divider>

        <v-card-actions>
            <p class="text-justify body-2 mx-1">{{jobPost.jobDescriptions}}</p>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props:['jobPost']
}
</script>

<style>

</style>