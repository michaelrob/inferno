var InfernoDispatcher = require('../dispatcher/InfernoDispatcher.js');
var InfernoConstants = require('../constants/InfernoConstants.js');

var ActionTypes = InfernoConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    InfernoDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

  receiveStories: function(json) {
    InfernoDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_STORIES,
      json: json
    });
  },

  receiveStory: function(json) {
    InfernoDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_STORY,
      json: json
    });
  },

  receiveCreatedStory: function(json, errors) {
    InfernoDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_STORY,
      json: json,
      errors: errors
    });
  }

};
