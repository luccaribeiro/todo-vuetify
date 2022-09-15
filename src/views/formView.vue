<template>
<v-form v-if="existente" class="form"
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="titulo"
      label="Titulo"
      required
    ></v-text-field>

    <v-select
      v-model="projeto"
      :items="items"
      label="Projeto"
      required
    ></v-select>



    <p>{{ $route.params.id}}</p>


    <v-btn v-if="tipo == 'criar'"
      color="white"
      @click="adicionaTask()"
    >
      Enviar
    </v-btn>
        <v-btn v-else-if="tipo == 'editar'"
      color="white"
      @click="editTarefa($route.params.id, titulo, projeto)"
    >
      Editar
    </v-btn>
  </v-form>
</template>

<script>
import metodosLista from "../tasksapi.js";
import metodosproject from "../projetoapi.js";

  export default {
    data (){
        return{
            existente: true,
            tipo: 'criar',
            titulo: '',
            projeto: '',
            items: [],
            tasks: []
        }
    }, methods:{
        adicionaTask(){
            metodosLista.createTask(this.titulo, this.projeto)
            metodosLista.getTasks((tasks) => {
            this.tasks = tasks;
            this.resetData()
            this.$router.push({name: 'tarefas'});
      });
    }, resetData(){
            this.titulo = ''
            this.projeto = ''
    },
        pegaProjetos(){
            metodosproject.getProjects((items) => {
            this.items = items
                let id = this.$route.params.id
                if(id != 0){
                this.tipo = 'editar'
                metodosLista.getTask(id, (tarefaEspecifica) => {
                    this.titulo = tarefaEspecifica.title
                    this.projeto = tarefaEspecifica.project 
                })}
            })
        },
        editTarefa(id, titulo, projeto){
            metodosLista.updateTask(id, titulo, projeto)
            this.$router.push({name: 'tarefas'});
        },
    }, created(){
        this.pegaProjetos()
    }
    }
    
</script>

<style>
.form{
    display: flex;
    flex-direction: column;
    margin: 100px 400px;
}
</style>