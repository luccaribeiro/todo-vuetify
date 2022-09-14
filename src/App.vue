<template>
<div>
  <navbar></navbar>
  <v-app>
      <router-view/>
  </v-app>
</div>
</template>

<script>
import navbar from './components/navBar.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {navbar},
};
</script>
