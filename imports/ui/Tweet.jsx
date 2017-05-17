import React, {Component} from "react";
import { Meteor } from "meteor/meteor";



export default class Tweet extends Component {
  render() {
    return (<div className="tweet">
      <img className="imagen_p" src={this.props.tweet.user.profile_image_url} alt={this.props.tweet.user.screen_name + "profile image"}/>
      <div className="info">
        <span>{this.props.tweet.created_at} </span><br/>
        <span>{this.props.tweet.user.screen_name} </span>
      </div>
      <br/>
      <div>
        <span>{this.props.tweet.text} </span> <br/>
      </div>
      {/*<span>{JSON.stringify(this.props.tweet)}</span>*/}
    </div>);
  }
}
