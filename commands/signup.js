const { prefix } = require('../config.json');
const db = require('../models/Users.js');
const discord = require('discord.js');
//const Client = require("@replit/database");
//const client = new Client(); 
// creates a new user and writes their data into the database.

async function create(firstname, user_id, amount) {
  await db.users.setAll({
    "user_id":user_id, 
    "firstname":firstname, 
    "amount": amount
  });
  value = await db.users.getAll();
  return value;
} 

// random number generator for the player's ID. 
const user_id = Math.floor((Math.random() * 10000) + 1);
const amount = 1000; 

module.exports = {
  name: 'signup',
  description: 'sign up to create a profile to partake in the bets.',
  arguments: 'First Name and Last Name',
  usage: `\`${prefix} [firstname]\``, 
  execute(message, args) {
    let startingBalance = 1000;
    let firstname = args[0];
    if(firstname.length === 0){
      message.reply("Firstname you entered is invalid.");
    }
    if(firstname.length > 0){
      
      (async () =>{
        await db.users.set("firstname", firstname);
        await db.users.set("user_id", user_id);
        await db.users.set("balance", startingBalance);
      })
    }
    message.reply(`Thank you ${firtsname} for signing up! You have been given a starting balance of ${startingBalance}. Your player ID has been sent to your DM.`);
    message.author.send(`Hello, ${firstname}, your player ID is ${user_id}. If you wish to delete your account or access information about it, then you must use your player ID.`);  
  },
};

