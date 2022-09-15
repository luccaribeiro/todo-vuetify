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
  getTask: (taskId, callback) => {
    axios
      .get(`/tasks/${taskId}`)
      .then((response) => {
        callback(response.data);
      })
      .catch(() => {
        callback(false);
      });
  },
  updateTask: (taskId, title, project, callback) => {
    const taskData = {
      title: title,
      project: project,
      dueTo: new Date(),
    };
    axios
      .put(`/tasks/${taskId}`, taskData)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("erro:", error);
      });
  },
  createTask: (title, project, callback) => {
    console.log(`${title}, ${project}`);
    const taskData = {
      title: title,
      project: project,
      dueTo: new Date(),
      check: false,
    };
    axios
      .post(`/tasks`, taskData)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("erro:", error);
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