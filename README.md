# Node-GreyPanel
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is Nodejs SDK of CDN GreyPanel. Below is now support functional :
  - Login : Fetch API access token.
  - CleanOneSiteCache : Clean one site by uid.
  - CleanMultipleSiteCache : Clean multiple site by uid list.


### [GreyPanel](https://www.greypanel.com/en/)

* Headquartered in Singapore, Greypanel is an innovative company dedicated to provide network security services and Internet solutions.
* The company has strong IDC network bandwidth resources, covering all major operators. We focus on Internet Acceleration (CDN), website defense, and provide uninterrupted network support.
* Full range of value-added services and solutions.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.
```sh
$ npm install node-greypanel --save
```

### How to use

Follow below code :

First Step: require node-greypanel
```sh
var GreyPanel = require( 'node-greypanel' );
```
Second Step: Input your GP's account & password
```sh
var GreyPanel = require( 'node-greypanel' );
var options = {
    username:'fill your greypanel account',
    password: 'fill your greypanel password'
};
```

Third Step: create GreyPanel instance and to do login
```sh
var GreyPanel = require( 'node-greypanel' );
var options = {
    username:'fill your greypanel account',
    password: 'fill your greypanel password'
};
const UID_LIST = [
    '234lk2j4-dfsd-c9d3-0021-kdjs324jl12k' // just for example
];

var GP = new GreyPanel(options);
var CleanAllCache = async function () {
    // login first
    var GPInstance = await GP.Login();	
    // call API
    var result = await GPInstance.CleanMultipleSiteCache(UID_LIST);	

    return result;
};

CleanAllCache().then(function (result) {
    console.log( 'count of cached site successfully clean：' + result.success.length );
    console.log( 'count of cached site fail clean：' + result.error.length );
}).catch(function (error) {
    console.log( error );
});
```

You can run test case in this repository:
```sh
$ node test.js
```

### Todos

 - Implement more GP's API 

License
----
MIT
