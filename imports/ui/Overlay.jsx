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
		if(this.props.getFlow()){
					ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
					this.props.setFlow(false);
		}
		if(newProps.tweets.length > 0){
          coordinates = this.props.getProjection()(newProps.tweets[0].coordinates.coordinates);
					console.log(coordinates);
					ctx.fillRect(coordinates[0],coordinates[1],5,5);
					this.props.increaseCount();

		}
	}
	componentDidMount(){

	}

	paint(){

	}

	render() {
		return (

				<canvas className="overlay_canvas" width="600" height="600"
					ref={(canvas) => {this.canvas = canvas; }}>
				</canvas>
			);
	}
}
