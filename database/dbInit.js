var Datastore = require('nedb');

/*
var players = new Datastore({filename : 'users.db', autoload: true});
var moneylines = new Datastore({filename : 'moneylines.db', autoload : true});
var totals = new Datastore({filename : 'totals.db', autoload : true}); 
*/

var players = new Datastore();
var moneylines = new Datastore();
var totals = new Datastore();

module.exports = {players, moneylines, totals}; 
