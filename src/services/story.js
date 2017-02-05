

export default {

  // Gets a user story
  // takes: context, story_id
  // returns: story content
  getStory(context, story_id) {
    this.$http
      .get('http://localhost:3001/v1/stories/' + story_id, (data) => {
        this.story = data;
      }, {
        headers: auth.getAuthHeader()
      })
      .error((err) => console.log(err))
  }
}