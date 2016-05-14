/**
 * Created by Manjesh on 14-05-2016.
 *
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var config = require('./../../config')
var sqldb = require('./sqldb');

var Thing = sqldb.Thing;
var OAuthAccessToken = sqldb.OAuthAccessToken
var OAuthAuthorizationCode = sqldb.OAuthAuthorizationCode
var OAuthClient = sqldb.OAuthClient
var OAuthRefreshToken = sqldb.OAuthRefreshToken
var OAuthScope = sqldb.OAuthScope
var User = sqldb.User
//
//User.sync({force:config.seedDBForce}).then(function() {
//    return User.destroy({ where: {} });
//  })
//  .then(function() {
//    User.bulkCreate([{username:'admin',password:'admin'}])
//  })
//

OAuthClient.sync({force:config.seedDBForce}).then(function() {
    return OAuthClient.destroy({ where: {} });
  })
  .then(function() {
    OAuthClient.bulkCreate([{
      client_id:'democlient',
      client_secret:'democlientsecret',
      redirect_uri:'http://localhost/cb'
    }])
  })
OAuthAccessToken.sync({force:config.seedDBForce})
OAuthRefreshToken.sync({force:config.seedDBForce})
OAuthAuthorizationCode.sync({force:config.seedDBForce})


OAuthScope.sync({force:config.seedDBForce}).then(function() {
    return OAuthScope.destroy({ where: {} });
  })
  .then(function() {
    OAuthScope.bulkCreate([{scope:'profile'}])
  })

//Thing.sync({force:config.seedDBForce})
//  .then(function() {
//    return Thing.destroy({ where: {} });
//  })
//  .then(function() {
//    Thing.bulkCreate([{}])
//  })
//
//
//Thing.sync({force:config.seedDBForce})
//  .then(function() {
//  return Thing.destroy({ where: {} });
//})
//.then(function() {
//  Thing.bulkCreate([{
//  name: 'Development Tools',
//  info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
//  'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
//  'Stylus, Sass, and Less.'
//}, {
//  name: 'Server and Client integration',
//  info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
//  'AngularJS, and Node.'
//}, {
//  name: 'Smart Build System',
//  info: 'Build system ignores `spec` files, allowing you to keep ' +
//  'tests alongside code. Automatic injection of scripts and ' +
//  'styles into your index.html'
//}, {
//  name: 'Modular Structure',
//  info: 'Best practice client and server structures allow for more ' +
//  'code reusability and maximum scalability'
//}, {
//  name: 'Optimized Build',
//  info: 'Build process packs up your templates as a single JavaScript ' +
//  'payload, minifies your scripts/css/images, and rewrites asset ' +
//  'names for caching.'
//}, {
//  name: 'Deployment Ready',
//  info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
//  'and openshift subgenerators'
//}]);
//});
//
