var InfernoDispatcher = require('../dispatcher/InfernoDispatcher.js');
var InfernoConstants = require('../constants/InfernoConstants.js');

var ActionTypes = InfernoConstants.ActionTypes;

module.exports = {

  redirect: function(route) {
    InfernoDispatcher.handleViewAction({
      type: ActionTypes.REDIRECT,
      route: route
    });
  }
};
