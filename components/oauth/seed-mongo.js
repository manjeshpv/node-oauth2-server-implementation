/**
 * Created by Manjesh on 14-05-2016.
 *
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var config = require('./../../config')
var mongodb = require('./mongodb');

var Thing = mongodb.Thing;
var OAuthAccessToken = mongodb.OAuthAccessToken
var OAuthAuthorizationCode = mongodb.OAuthAuthorizationCode
var OAuthClient = mongodb.OAuthClient
var OAuthRefreshToken = mongodb.OAuthRefreshToken
var OAuthScope = mongodb.OAuthScope
var User = mongodb.User


//OAuthAccessToken.sync({force:config.seedDBForce})
//OAuthRefreshToken.sync({force:config.seedDBForce})
//OAuthAuthorizationCode.sync({force:config.seedDBForce})


OAuthScope.find({}).remove()
  .then(function() {
    OAuthScope.create({
        scope: 'profile',
        is_default: false
      },{
        scope: 'defaultscope',
        is_default: true
      })
      .then(function() {
        console.log('finished populating OAuthScope');
      });
  });
User.find({}).remove()
  .then(function() {
    User.create({
        username: 'admin',
        password: 'admin'
      })
      .then(function(user) {
        console.log('finished populating users',user);
        return OAuthClient.find({}).remove()
          .then(function() {
            OAuthClient.create({
                client_id:'democlient',
                client_secret:'democlientsecret',
                redirect_uri:'http://localhost/cb',
                User:user._id
              })
              .then(function(client) {
                console.log('finished populating OAuthClient',client);
              }).catch(console.log);
          });

      });
  });


Thing.find({}).remove()
  .then(function(){
  Thing.create({
  name: 'Development Tools',
  info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
  'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
  'Stylus, Sass, and Less.'
}, {
  name: 'Server and Client integration',
  info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
  'AngularJS, and Node.'
}, {
  name: 'Smart Build System',
  info: 'Build system ignores `spec` files, allowing you to keep ' +
  'tests alongside code. Automatic injection of scripts and ' +
  'styles into your index.html'
}, {
  name: 'Modular Structure',
  info: 'Best practice client and server structures allow for more ' +
  'code reusability and maximum scalability'
}, {
  name: 'Optimized Build',
  info: 'Build process packs up your templates as a single JavaScript ' +
  'payload, minifies your scripts/css/images, and rewrites asset ' +
  'names for caching.'
}, {
  name: 'Deployment Ready',
  info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
  'and openshift subgenerators'
});
});
