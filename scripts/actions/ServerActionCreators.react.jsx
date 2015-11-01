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
};
