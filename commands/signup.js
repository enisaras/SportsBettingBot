const { prefix } = require('../config.json');
//const dbInit = require('../database/dbInit.js'); 
//const dbSQL = require('../database/dbSQL.js');
const discord = require('discord.js');
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database/bettingbot.db');

// random number generator for the player's ID. 
const user_id = Math.floor((Math.random() * 10000) + 1); 

module.exports = {
  name: 'signup',
  description: 'sign up to create a profile to partake in the bets.',
  arguments: 'First Name',
  usage: `\`${prefix} [firstname]\``, 
  execute(message, args) {
    const init_amount = 1000;
    const firstname = args[0];
    if(firstname.length === 0){
      message.reply("Invalid Firstname!");
    }
    else{
      db.run(`INSERT INTO players(user_id, name, balance) VALUES(${user_id}, ${firstname}, ${init_amount})`, function(err){
        if(err){
          return console.log(err.message);
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
    }   
    message.reply(`Thank you ${firstname} for signing up! You have been given a starting balance of ${init_amount}. Your player ID has been sent to your DM.`);
    message.author.send(`Hello, ${firstname}, your player ID is ${user_id}. If you wish to delete your account or access information about it, then you must use your player ID.`);  
  }
}

db.close();

/* Code for NeDB (DONT DELETE YET)
var player = {
          name: firstname,
          player_id: user_id,
          amount: init_amount
        };
        dbInit.players.insert(player, function(err, doc){
          console.log('Inserted:', doc.name);
        });
*/




// Code below was inside the else-statement 
/*if(users.findOne({ firstname : firstname }, function(err, doc) {
      }); )
      {message.reply(`You already have an account, please use the help command if you need help.`)}*/
        /*var user = {
          name: firstname,
          player_id: user_id,
          amount: init_amount
        };*/