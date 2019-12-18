<template>
    <v-card elevation="1" class="pa-4 my-2 mx-4">
        <v-text-field
            label="Search Company"
            hint="Please type the name of the company"
            outlined
            color="primary"
            prepend-inner-icon="search"
        ></v-text-field>

        <v-container>
            <v-row>
                <v-col cols="12" md="4" lg="3" sm="6" class="pa-0" 
                    v-for="i in 6" :key="i"
                >
                    <v-card elevation="1" class="py-2 ma-2" router-link to="/view-company">
                        <v-img width="150" height="150" :src="require('../assets/no_company_profile_img.png')" class="grey mx-auto mt-8 my-4"></v-img>
                        <p class="body-1 font-weight-medium text-center">Company Name</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>