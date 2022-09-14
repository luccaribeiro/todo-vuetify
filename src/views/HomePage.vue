<template>
   <div>
  <v-list>

      <v-list-item-group>
        <v-list-item>
          <!-- <template> -->
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          <!-- </template> -->
        </v-list-item>
      </v-list-item-group>

    </v-list>
</div>
  
</template>
<script>

import metodosLista from "../tasksapi.js";


  export default {
    data: () => ({
      drawer: null,
      items: [
          { title: 'Tarefas', icon: 'mdi-view-dashboard', to:'/tarefas' },
          { title: 'Form', icon: 'mdi-help-box', to:'form' },
          { title: 'Login', icon: 'mdi-help-box', to:'login' },
        ],
      tasks: []
    }),
    methods: {
      obterTarefas() {
      metodosLista.getTasks((tasks) => {
        console.log("ai")
        this.tasks = tasks;
      });
    }, 
    atualizaCheck(id, concluido){
      metodosLista.updateTaskCheck(id, concluido)
      this.obterTarefas(id)
    
      },
      excluiTask(id){
        metodosLista.deleteTask(id)
        this.obterTarefas(id)
      }
    }, created(){
      this.obterTarefas()
    }


  }
</script>

<style>
.lista{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.item{
  border: 1px solid black;
  width: 900px;
  border-radius: 10px;
  margin-bottom: 50px;
}

.icons{
  display: flex;
}
.icone{
  margin-right: 20px;
}
</style>