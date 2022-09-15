<template>

  <v-app>
    <navbar v-if="LoginPage"></navbar>
    <router-view/>
  </v-app>


</template>

<script>
import navbar from './components/navBar.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {navbar},
  computed:{
    LoginPage(){
      return this.$route.name !== 'login';
    }
  }
};
</script>
