
const API_URL = 'http://localhost:3000/v1/'
const STORY_URL = API_URL + 'stories/'

import auth from '../auth'

export default {

  getStory(context, story_id) {
    context.$http.get(STORY_URL + story_id, (data) => {

        context.story = data.story;
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  },

  getStories(context) {
    context.$http.get(STORY_URL, (data) => {

        context.stories = data.stories;
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  },

  postStory(context, story) {
    context.$http.post(STORY_URL, story, (data) => {

        context.success = "New story posted!!"
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  }
}