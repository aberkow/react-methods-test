var React = require('react');

var SoundCloudEmbed = function(props){
  var playerUrl = 'https://w.soundcloud.com/player/';
  var trackUrl = 'https://api.soundcloud.com/tracks/' + props.trackId;
    var options = 'auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true';
    var src = playerUrl + '?url=' + trackUrl + '&' + options;
    return <iframe width="100%" height="450" scrolling="no" frameborder="no" src={src}></iframe>;
};

module.exports = SoundCloudEmbed;
