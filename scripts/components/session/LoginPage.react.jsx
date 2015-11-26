var React = require('react');
var SessionActionCreators = require('../../actions/SessionActionCreators.react.jsx');
var SessionStore = require('../../stores/SessionStore.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');

var LoginPage = React.createClass({
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
    var password = this.refs.password.getDOMNode().value;
    SessionActionCreators.login(email, password);
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
                <input type="text" name="email" className="form-control" ref="email" id="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="email" name="password" className="form-control" id="password" placeholder="Email" />
              </div>

              <button type="submit" className="btn btn-default card--login__submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoginPage;
