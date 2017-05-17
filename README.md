# TwitterStreamerMeteor - Map

An application, base on the [simple boilerplate](https://github.com/john-guerra/twitterStreamerMeteor) for a Meteor 1.4 Twitter streamer application with React, that use the geo-location of the tweets to put them into a map, specifically a [map of Colombia](https://github.com/john-guerra/ColombiaVisualizationReact), and some other things that you can see in detail in the features list above.

Here a demo of the [application](https://tweetstreammap.herokuapp.com/)

## Setting up environment variables

Uses the twitter [npm](https://www.npmjs.com/package/twitter) module for connecting to twitter. It requires you to setup your credentials on the server using environment variables

For Linux users:

```
export TWITTER_CONSUMER_KEY="yourCredentialsHere"
export TWITTER_CONSUMER_SECRET="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_KEY="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_SECRET="yourCredentialsHere"
```

For Windows users:

```
setx TWITTER_CONSUMER_KEY "yourCredentialsHere"
setx TWITTER_CONSUMER_SECRET "yourCredentialsHere"
setx TWITTER_ACCESS_TOKEN_KEY "yourCredentialsHere"
setx TWITTER_ACCESS_TOKEN_SECRET "yourCredentialsHere"
```
You can get the credentials with your twitter account in this [link](https://apps.twitter.com/) . You will need to have a phone number associated with your account.

**NOTE:** Keep safe your credentials.

## Running the application

After setting up the environment variables in your system you just need to run the following commands:

```
meteor npm install
meteor
```

The application will run in `localhost:3000`, just put some search term in the input box and press `Enter` or the button `Start Stream`.

## Features

* Draws points where tweets are being publish in a real-time way with a label with the visible name of the user.
* Lets you start or stop the streaming of the data (start also means erase the information acquire previously).
* Shows some stats of the data being streamed as count of tweets, elapsed time and seconds per tweet (the last two only after the stream has been stopped).
* Lets you save a screenshot (`.png` image) of the results of the streaming: map with the location of the tweets, stats and the last 7 tweets (because that was the number that I find fit better for the screen shot, no more than that...). In order to make the `.png` image, the application uses [html2canvas](https://github.com/niklasvh/html2canvas)

## Sources

* [Colombia Map Visualization Using React](https://github.com/john-guerra/ColombiaVisualizationReact)
* [TwitterStreamerMeteor](https://github.com/john-guerra/twitterStreamerMeteor)
* [html2canvas](https://github.com/niklasvh/html2canvas)
