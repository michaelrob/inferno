var React = require('react');
var SessionActionCreators = require('../../actions/SessionActionCreators.react.jsx');
var SessionStore = require('../../stores/SessionStore.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');

var SignupPage = React.createClass({

  getInitialState: function() {
    return { errors: [] };
  },

  componentDidMount: function() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ errors: SessionStore.getErrors() });
  },

  _onSubmit: function(e) {
    e.preventDefault();
    this.setState({ errors: [] });
    var email = this.refs.email.getDOMNode().value;
    var username = this.refs.username.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    var passwordConfirmation = this.refs.passwordConfirmation.getDOMNode().value;
    if (password !== passwordConfirmation) {
      this.setState({ errors: ['Password and password confirmation should match']});
    } else {
      SessionActionCreators.signup(email, username, password, passwordConfirmation);
    }
  },

  render: function() {
    var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <div>
        {errors}
        <div className="row">
          <div className="login col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <form onSubmit={this._onSubmit}>

              <div className="form-group">
                <label name="email" htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" ref="email" id="email" />
              </div>

              <div className="form-group">
                <label name="username" htmlFor="username">Username</label>
                <input type="text" name="username" className="form-control" ref="username" id="username" />
              </div>

              <div className="form-group">
                <label name="password" htmlFor="password">Password</label>
                <input type="password" name="password" className="form-control" ref="password" id="password" />
              </div>

              <div className="form-group">
                <label name="password" htmlFor="password-confirmation">Password Confirmation</label>
                <input type="password" name="password-confirmation" className="form-control" ref="passwordConfirmation" id="passwordConfirmation" />
              </div>

              <button type="submit" className="btn btn-default card--login__submit">Signup</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SignupPage;
