var InfernoDispatcher = require('../dispatcher/InfernoDispatcher.js');
var InfernoConstants = require('../constants/InfernoConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = InfernoConstants.ActionTypes;

module.exports = {

  signup: function(email, username, password, passwordConfirmation) {
    InfernoDispatcher.handleViewAction({
      type: ActionTypes.SIGNUP_REQUEST,
      email: email,
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation
    });
    WebAPIUtils.signup(email, username, password, passwordConfirmation);
  },

  login: function(email, password) {
    InfernoDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });
    WebAPIUtils.login(email, password);
  },

  logout: function() {
    InfernoDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
  }
};
