var React = require('react');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var StoryStore = require('../../stores/StoryStore.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');
var StoryActionCreators = require('../../actions/StoryActionCreators.react.jsx');
var Router = require('react-router');
var Link = Router.Link;
var moment = require('moment');

var StoriesPage = React.createClass({

  getInitialState: function() {
    return {
      stories: StoryStore.getAllStories(),
      errors: []
    };
  },

  componentDidMount: function() {
    StoryStore.addChangeListener(this._onChange);
    StoryActionCreators.loadStories();
  },

  componentWillUnmount: function() {
    StoryStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      stories: StoryStore.getAllStories(),
      errors: StoryStore.getErrors()
    });
  },

  render: function() {
    var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <div>
        {errors}
        <div className="row">
          <StoriesList stories={this.state.stories} />
        </div>
      </div>
    );
  }
});

var StoryItem = React.createClass({
  render: function() {
    return (
      <div className="story">
        <div className="story-title">
          <Link to="story" params={ {storyId: this.props.story.id} }>
            {this.props.story.title}
          </Link>
        </div>
        <div className="story-body">{this.props.story['abstract']}...</div>
        <span className="story-user">{this.props.story.user.username}</span>
        <span className="story-date"> - {moment(this.props.story.created_at).fromNow()}</span>
      </div>
      );
  }
});

var StoriesList = React.createClass({
  render: function() {
    return (
      <div className="col-lg-8 col-md-10 col-sm-12">
        <div className="story-column">
          {this.props.stories.map(function(story, index){
            return <StoryItem story={story} key={"story-" + index}/>
          })}
        </div>
      </div>
    );
  }
});

module.exports = StoriesPage;
