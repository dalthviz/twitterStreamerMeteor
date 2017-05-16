import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer} from "meteor/react-meteor-data"

import ColombiaMap from "./ColombiaMap.jsx";

import Overlay from "./Overlay.jsx";
import TweetsResults from "./TweetsResults.jsx";
import {Tweets} from "../api/Tweets.js";


//SetProjection como props a colombiamap
//Get projectinon
export class App extends Component {
  constructor(props) {
    super(props);
    this.projection = null;
    this.input = null;
    this.flow = false;
    this.count = 0;
    this.startTime = null;
    this.endTime = null;
    this.timeDiffS = "";
    this.perTweet = "";
  }

  setProjection(projection){

    this.projection = projection;

  }

  getProjection(){
    return this.projection;
  }

  getFlow(){
    return this.flow;
  }

  setFlow(flow){
    this.flow = flow;
  }

  startStream(e){
    e.preventDefault();
    if(this.input){
      console.log(this.input);
    query = this.input;
    Meteor.call("twitter.stream", query);
    this.flow = true;
    this.count = 0;
    this.start();
    }
  }

  stopStream(e){
    e.preventDefault();
    Meteor.call("twitter.stream", "", true);
    this.flow = false;
    this.end();
  }

  increaseCount(){
    this.count++;
  }

  start() {
    this.timeDiffS = "";
    this.perTweet = "";
    this.startTime = new Date();
  };

  end() {
  //based on http://stackoverflow.com/a/41633001
  this.endTime = new Date();
  let timeDiff = this.endTime - this.startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
  console.log(timeDiff);
  let seconds = Math.round(timeDiff % 60);
  this.timeDiffS = seconds + " sec";
  let secondsT = Math.round(seconds/this.count % 60);
  this.perTweet = secondsT + " sec";
}

  changeQuery(evt) {

    if (evt.key !== "Enter") {
      return;
    }
    // "this" will change in the method call, so I need to save it
    let component = this;
    this.count = 0;
    this.flow = true;
    console.log(evt.target.value);
    this.start()
    Meteor.call("twitter.stream", evt.target.value);

  }


  render() {
    console.log("render!");
    return (
      <div >
        <div >
          <div>

          <h2>Tweets in Colombia</h2>
          </div>
          <ColombiaMap setProjection={this.setProjection.bind(this)}
            width="600"
            height="600"
            data={{"SANTAFE DE BOGOTA D.C":10}}
          ></ColombiaMap>
          <Overlay
            increaseCount={this.increaseCount.bind(this)}
            getFlow={this.getFlow.bind(this)}
            setFlow={this.setFlow.bind(this)}
            getProjection= {this.getProjection.bind(this)}
            tweets={this.props.tweets}/>
        </div>
        <div  className="search">
          <input onChange={(input) => {this.input = input.target.value; }} type="text" onKeyPress={this.changeQuery.bind(this)} placeholder=""/>
         { this.props && this.props.err ?
           <div>Error: {this.props.err}</div> :
           <span></span>
         }
         <button onClick={this.startStream.bind(this)} >Start Stream</button>
         <button onClick={this.stopStream.bind(this)} >Stop Stream</button>

         <div className="stats">
           <strong>Some stats:</strong><br/>
           <label>Count: {this.count}</label><br/>
           {this.timeDiffS ?
             <div>
               <label>Elapsed time: {this.timeDiffS}</label><br/>
               <label>Time per publish tweet: {this.perTweet}</label>
             </div>
             : <span></span>

           }
         </div>

           {/* <h2>Results:</h2>
          {this.props && this.props.tweets ?
            <TweetsResults tweets={this.props.tweets}/> :
            <p>Enter a query</p>
          } */}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  tweets : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {
  Meteor.subscribe("tweets");


  return {
    tweets: Tweets.find({}).fetch()
  };
}, App);
