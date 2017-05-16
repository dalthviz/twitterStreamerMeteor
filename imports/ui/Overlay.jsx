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
		if(newProps.tweets){
			if(this.props.getProjection){
          this.props.getProjection()(newProps.tweets.coordinates.coordinates);
			}
		}
	}
	componentDidMount(){

	}

	paint(){

	}

	render() {
		return (
			<div className="canvas" width="600" height="600">
				<canvas
					ref={(canvas) => {this.canvas = canvas; }}>
				</canvas>
			</div>);
	}
}
