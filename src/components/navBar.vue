<template>
    <div id="inspire">
    <v-app-bar
      app
      color="deep-blue"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>CRUD</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Todo-List
          </v-list-item-title>
          <v-list-item-subtitle>
            Vuetify
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
          { title: 'Tarefas', icon: 'mdi-view-dashboard', to:'/tarefas' },
          { title: 'Form', icon: 'mdi-help-box', to:'/form/0' },
          { title: 'Login', icon: 'mdi-help-box', to:'login' },
        ],
    }), 
    props: ['titulo']

  }
</script>

<style>

</style>