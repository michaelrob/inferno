
const API_URL = 'http://localhost:3000/v1/'
const STORY_URL = API_URL + 'stories/'

export default {

  // Gets a user story
  // takes: context, story_id
  // returns: story content
  getStory(context, story_id) {
    context.$http
      .get(API_URL + STORY_URL + story_id, (data) => {
        this.story = data;
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  },

  // Gets all stories for user
  // takes: context
  // returns: all user story content
  getStories(context) {
    context.$http
      .get(API_URL + STORY_URL, (data) => {
        this.story = data;
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  }
}