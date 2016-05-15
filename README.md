# Node OAuth2 Server Implementation

Supports `    "oauth2-server": "^3.0.0-b2",`

## Installation

```
git clone https://github.com/manjeshpv/node-oauth2-server-implementation
npm install
npm start or node ./bin/www
```

## Quick Start

The module provides two middlewares, one for authorization and routing, another for error handling, use them as you would any other middleware:

```js
var express = require('express');
var oauthServer = require('oauth2-server');
var Request = oauthServer.Request;
var Response = oauthServer.Response;
var authenticate = require('./components/oauth/authenticate')

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// https://github.com/manjeshpv/node-oauth2-server-implementation/blob/master/components/oauth/models.js
var oauth = new oauthServer({
  model: require('./models.js')
});

app.all('/oauth/token', function(req,res,next){
    var request = new Request(req);
    var response = new Response(res);

    oauth
      .token(request,response)
      .then(function(token) {
        // Todo: remove unnecessary values in response
        return res.json(token)
      }).catch(function(err){
        return res.status( 500).json(err)
      })
  });

  app.post('/authorise', function(req, res){
    var request = new Request(req);
    var response = new Response(res);

    return oauth.authorize(request, response).then(function(success) {
        res.json(success)
    }).catch(function(err){
      res.status(err.code || 500).json(err)
    })
  });

app.get('/secure', authenticate(), function(req,res){
  res.json({message: 'Secure data'})
});

app.get('/me', authenticate(), function(req,res){
  res.json({
    me: req.user,
    messsage: 'Authorization success, Without Scopes, Try accessing /profile with `profile` scope',
    description: 'Try postman https://www.getpostman.com/collections/37afd82600127fbeef28',
    more: 'pass `profile` scope while Authorize'
  })
});

app.get('/profile', authenticate({scope:'profile'}), function(req,res){
  res.json({
    profile: req.user
  })
});

app.listen(3000);
```

After running with node, visting http://127.0.0.1:3000 should present you with a json response saying your access token could not be found.

To simulate, Use Postman: https://www.getpostman.com/collections/37afd82600127fbeef28

## Features

- Supports authorization_code, password, refresh_token, client_credentials and extension (custom) grant types
- Implicitly supports any form of storage e.g. PostgreSQL, MySQL, Mongo, Redis...
- Full test suite

## Model Specification

See SQL file in `/sql` folder

The module requires a model object through which some aspects or storage, retrieval and custom validation are abstracted.
The last parameter of all methods is a callback of which the first parameter is always used to indicate an error.

Note: see https://github.com/manjeshpv/node-oauth2-server-implementation/blob/master/components/oauth/models.js for a full model example using MySQL.

References:
https://github.com/dsquier/oauth2-server-php-mysql
