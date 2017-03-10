const API_URL = 'http://localhost:3000/v1/'
const PROJECT_URL = API_URL + 'projects/'

import auth from '../auth'

export default {

  getProject(context, project_id) {
    context.$http.get(PROJECT_URL + project_id, (data) => {

        context.project = data.project;
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  },

  getProjects(context) {
    context.$http.get(PROJECT_URL, (data) => {

        context.projects = data.projects;
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  },

  postProject(context, project) {
    context.$http.post(PROJECT_URL, project, (data) => {

        context.success = "New project posted!!"
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  }
}