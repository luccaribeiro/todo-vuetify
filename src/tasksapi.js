import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export default {
  getTasks: (callback) => {
    axios
      .get("/tasks")
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
  updateTaskCheck: (taskId, concluido) => {
    concluido = !concluido
    const taskData = {
      check: concluido,
    };
    axios
      .patch(`/tasks/${taskId}`, taskData)
      .then((response) => {
        console.log("Tarefa salva", response.data);
      })
      .catch((error) => {
        console.log("erro:", error);
      });
  },
  deleteTask(id){
    const metodo = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/tasks/${id}`, metodo);
},
}