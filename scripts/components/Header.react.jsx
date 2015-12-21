var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;
var SessionActionCreators = require('../actions/SessionActionCreators.react.jsx');

var Header = React.createClass({

  propTypes: {
    isLoggedIn: ReactPropTypes.bool,
    email: ReactPropTypes.string
  },
  logout: function(e) {
    e.preventDefault();
    SessionActionCreators.logout();
  },
  render: function() {
    var rightNav = this.props.isLoggedIn ? (
      <ul className="nav navbar-nav navbar-right">
        <li><a href='#' onClick={this.logout}>Logout</a></li>
      </ul>
    ) : (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="login">Login</Link></li>
        <li><Link to="signup">Sign up</Link></li>
      </ul>
    );

    var leftNav = this.props.isLoggedIn ? (
      <ul className="nav navbar-nav">
        <li><a href="stories">New story</a></li>
      </ul>
    ) : (
      <div></div>
    );

    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Kookaburra</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            {leftNav}
            {rightNav}
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
