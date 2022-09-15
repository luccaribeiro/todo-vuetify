<template>
<v-list>
  <p @click="editForm(0)" class="adicionar">+</p>
<v-list-item-group class="lista">
        <v-list-item class="item" v-for="task in tasks" :key="task.id">
          <!-- <template> -->
            <v-list-item-action>
              <v-checkbox @click="atualizaCheck(task.id, task.check)" :input-value="task.check"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{task.check}}</v-list-item-title>
              <v-list-item-title>{{task.title}}</v-list-item-title>
              <v-list-item-subtitle>{{task.project}}</v-list-item-subtitle>
              <v-list-item-subtitle>Adicionado em: <b>{{(task.dueTo).slice(0,10)}}</b></v-list-item-subtitle>
            </v-list-item-content>
            <div class="icons">
              <v-list-item @click="excluiTask(task.id)" class="icone">Delete</v-list-item>
              <v-list-item @click="editForm(task.id)" class="icone">Editar</v-list-item>
            </div>
          <!-- </template> -->
        </v-list-item>
      </v-list-item-group>
    </v-list>
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
        this.tasks = tasks;
      });
    }, 
    editForm(id){
      this.$router.push({name: `form`, params:{id: id}});
    },
      async atualizaCheck (id, concluido) {
        await metodosLista.updateTaskCheck(id, concluido)
        await this.obterTarefas()
      },
      async excluiTask(id){
        metodosLista.deleteTask(id)
        await this.obterTarefas()
      }
    }, created(){
      this.obterTarefas()
    }


  }
</script>

<style>
.adicionar{
  cursor: pointer;
  margin-top: 100px;
  margin: 100px 450px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 50px;
}
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