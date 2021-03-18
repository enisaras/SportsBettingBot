const { prefix } = require('../config.json');
const dbInit = require('../database/dbInit.js'); 
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database/bettingbot.db');

module.exports = {
  name: 'userdata',
  description: 'Get the current user data.',
  usage: `\`${prefix}userdata [firstname]\``,
  execute(message, args) {
    const firstname = args[0];
    if(firstname.length === 0) {
      message.reply("Invalid Firstname!")
    }
    else {
      db.serialize(() => {
        db.each(`SELECT * FROM players WHERE name = ${firstname}`, (err, row) => {
          if (err) {
            console.error(err.message);
          }
          console.log('User:', row.name);
          message.reply(`Your user data = name: ${row.name}, current balance: ${row.balance}.`); 
        });
      });
    }
  }
}

db.close(); 

/*
dbInit.players.findOne({name : firstname}, function(err, doc){
        console.log('Found User:', doc);
        message.reply(`Your user data = name: ${doc.name}, current amount: ${doc.amount}.`);
        //need to work on error handling for if name is not in database.
*/