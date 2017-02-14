
const API_URL = 'http://localhost:3000/v1/'
const STORY_URL = API_URL + 'stories/'

import auth from '../auth'

export default {

  // Gets a user story
  // takes: context, story_id
  // returns: story content
  getStory(context, story_id) {
    context.$http.get(STORY_URL + story_id, (data) => {

        context.story = data.story;
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  },

  // Gets all stories for user
  // takes: context
  // returns: all user story content
  getStories(context) {
    context.$http.get(STORY_URL, (data) => {
      
        context.stories = data.stories;
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  },

  // Posts new story for the user
  // takes: input
  // returns: success or failure
  postStory(context, story) {
    context.$http.post(STORY_URL, story, (data) => {

        context.success = "New story posted!!"
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  }
}