import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  getProjects: (callback) => {
    axios
      .get("/projects")
      .then((response) => {
        let lista = []
        for(let item of response.data){
            lista.push(item.project)
        }
        callback(lista);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
};