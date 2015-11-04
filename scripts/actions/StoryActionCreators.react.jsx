var InfernoDispatcher = require('../dispatcher/InfernoDispatcher.js');
var InfernoConstants = require('../constants/InfernoConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = InfernoConstants.ActionTypes;

module.exports = {

  loadStories: function() {
    InfernoDispatcher.handleViewAction({
      type: ActionTypes.LOAD_STORIES
    });
    WebAPIUtils.loadStories();
  },

  loadStory: function(storyId) {
    InfernoDispatcher.handleViewAction({
      type: ActionTypes.LOAD_STORY,
      storyId: storyId
    });
    WebAPIUtils.loadStory(storyId);
  },

  createStory: function(title, body) {
    InfernoDispatcher.handleViewAction({
      type: ActionTypes.CREATE_STORY,
      title: title,
      body: body
    });
    WebAPIUtils.createStory(title, body);
  }

};
