import React, { Component } from 'react';
import d3 from "d3";

import { Meteor } from "meteor/meteor";



export default class Overlay extends Component {
	constructor(props) {
		super(props);
		this.canvas = null;
	}

	getCanvas() {
		return this.canvas;
	}

	componentWillUpdate(newProps){
		//tweets.coordinates.coordinates
		let ctx = this.canvas.getContext("2d");
		ctx.fillStyle="#FF0000";
		ctx.font="8px Verdana";
		if(this.props.getFlow()){
					ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
					this.props.setFlow(false);
		}
		if(newProps.tweets.length > 0){
					let index = newProps.tweets.length - 1;
					let last_tweet = newProps.tweets[index];
          coordinates = this.props.getProjection()(last_tweet.coordinates.coordinates);
					console.log(coordinates);
					ctx.fillRect(coordinates[0],coordinates[1],5,5);
					ctx.fillText(last_tweet.user.screen_name,coordinates[0],coordinates[1]);
					this.props.increaseCount();

		}
	}

	render() {
		return (

				<canvas className="overlay_canvas" width="600" height="600"
					ref={(canvas) => {this.canvas = canvas; }}>
				</canvas>
			);
	}
}
