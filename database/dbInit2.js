var Datastore = require('nedb');

var users = new Datastore();
var moneyline = new Datastore();
var totals = new Datastore();

var people = [];
var moneyline_bets = [];
var totals_bets = [];

var enis = {
  name: 'Enis',
  player_id: 1255,
  amount: 1000
};

var pavan = {
  name: 'Pavan',
  player_id: 1256,
  amount: 1000
};

var totals_Enis = {
  name: 'Enis',
  player_id : 1255,
  team : 'Giants',
  type : 'Totals',
  amount : 500,
  profit : 1000
};
var totals_Pavan = {
  name: 'Pavan',
  player_id : 1256,
  team : 'Giants',
  type : 'Totals',
  amount : 250,
  profit : 500
};

var moneyline_Enis = {
  name: 'Enis',
  player_id: 1255,
  team: 'Giants',
  type: 'Money Line',
  amount: 500,
  profit: 1000
};

var moneyline_Pavan = {
  name: 'Pavan',
  player_id: 1256,
  team: 'Jets',
  type: 'Money Line',
  amount: 500,
  profit: 250
};

// Pushes
people.push(enis, pavan);
moneyline_bets.push(moneyline_Enis, moneyline_Pavan);
totals_bets.push(totals_Enis, totals_Pavan);

// Inserts
users.insert(people, function(err, docs) {
  docs.forEach(function(d) {
    console.log('Saved user to user:', d.name);
  });
});

moneyline.insert(moneyline_bets, function(err, docs) {
  docs.forEach(function(d) {
    console.log('Saved user to moneyline:', d.name);
  });
});

totals.insert(totals_bets, function(err, docs) {
  docs.forEach(function(d) {
    console.log('Saved user to totals:', d.name);
  });
});

// Finds 
users.findOne({ player_id: 1255}, function(err, doc) {
  console.log('Found user:', doc.name); 
});

moneyline.findOne({ player_id: 1255 }, function(err, doc) {
  console.log('Found user:', doc.name);
}); 

totals.findOne({ player_id: 1256}, function(err, doc){
  console.log('Expected profit:', doc.profit);
  console.log('Maximum loss:', doc.amount);
});
module.exports.users = users;
module.exports.totals = totals;
module.exports.moneyline = moneyline;