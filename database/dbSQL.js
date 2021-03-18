const sqlite3 = require('sqlite3').verbose();

// connecting to database 
let db = new sqlite3.Database('./bettingbot.db', (err) => {
  if(err){
    console.error(err.message);
  }
  console.log('connected to bettingbot.db');
}); 

// creating users table 
db.new('CREATE TABLE players(user_id INT primary key, name STRING, balance INT);', function(err){
  if(err){
    console.log(err.message);
  }
  console.log('Users Table created.');
}); 

// creating moneylines table
db.new(`CREATE TABLE moneylines(name STRING primary key, team STRING, coins INT);`, function(err){
  if(err){
    console.log(err.message);
  }
  console.log('Moneylines Table created.');
})

// creating totals table
db.new(`CREATE TABLE totals(name STRING primary key, team STRING, coins INT`, function(err){
  if(err){
    console.log(err.message);
  }
  console.log('Totals Table created.');
})

db.close(); 