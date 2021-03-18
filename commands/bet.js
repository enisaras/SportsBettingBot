/*The command for the main function of the bot, users can make a bet
following the format: !bet {team} {bet_type} {coins}
*/

//const dbInit = require('../database/dbInit.js'); 
// Imports 
const { prefix } = require('../config.json'); 
const data = require('../odds/example-odds.json');
const functions = require('../odds/odd-functions.js');

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./database/bettingbot.db');
// Arrays
const team_names = ["Giants", "Jets", "Ravens", "Rams", "Packers"]; 
const bet_types = ["Totals", "MoneyLine", "Spread"];

<<<<<<< HEAD
const bet_types = ["Totals", "MoneyLine", "Spread"];
const calculateMoneyLine = (stake, odds) => {
    //moneyline payout for positive and negative odds
    if(odds > 0){
        profit = stake * (odds/100);}
    else if(odds < 0){
        profit = stake / (odds/100);
    }
    return profit;
}
=======

// Meat of the code
>>>>>>> 29eb04afbce72621b897522564edbd2b8cb77d78
module.exports = {
    name: 'bet', 
    description: 'Make a bet', 
    arguments: 'Add a team, bet type, and coins to make a bet.',
    usage: `\`${prefix}bet [team name] [bet type] [coins] [name]\``,
    execute(message, args) {
        var profit = -1;
        var id = 0; 
        var new_balance = 0; 
        const team_name = args[0];
        const bet_type = args[1];
        const coins = args[2];
        const firstname = args[3];
        if(!team_names.includes(team_name)) {
            message.reply('Invalid Team Name!');
        }
        if(!bet_types.includes(bet_type)) {
            message.reply('Invalid Bet Type!'); 
        }
        if(coins < 0) {
            message.reply('Invalid coin amount! Coin amount must be > 0.');
        }
        if(team_names.includes(team_name) && bet_types.includes(bet_type) && coins > 0){
<<<<<<< HEAD
            if(bet_type === bet_types[1]){
                profit= calculateMoneyLine(coins,200);
                message.reply(`Your bet of ${coins} coins has been added to bet: ${bet_type}`);
                message.reply(`Expected profit: ${profit}`);
            }
            else{
                //TODO: Add more code for the 2 other bet types
                message.reply(`Your bet of ${coins} coins has been added to bet: ${bet_type}`);
=======
            if(bet_type === 'MoneyLine') {
              db.run(`INSERT INTO moneylines(name, team, coins) VALUES(${firstname}, ${team_name}, ${coins})`, function(err){
                if(err){
                  return console.log(err.message);
                }
                console.log(`A row has been inserted with rowname ${this.lastNAME}`);
              });
            }
            else if(bet_type === 'Totals'){
              db.run(`INSERT INTO totals(name, team, coins) VALUES(${firstname}, ${team_name}, ${coins})`, function(err){
                if(err){
                  return console.log(err.message);
                }
                console.log(`A row has been inserted with rowname ${this.lastNAME}`);
              })
            }
            message.reply(`Your bet of ${coins} coins has been added to bet: ${bet_type}`);
            if(bet_type === bet_types[0]){
              profit = functions.calculateTotals(coins, -110, 52, 53);
              message.reply(`Expected profit: ${profit}`);
              db.serialize(() => {
                db.each(`SELECT * FROM players WHERE name = ${firstname}`, (err, row) => {
                  if (err) {
                    console.error(err.message);
                  }
                  new_balance = row.balance + proft;  
                  console.log('Player Name:', row.name);
                  console.log('Player Balance:', row.balance);
                  console.log('Player New Balance:', new_balance);
                });
              });
              db.run(`UPDATE players SET balance = ${new_balance} where name = ${firstname}`, function(err){
                if(err){
                  console.log(err.message);
                }
                console.log("entry updated");
              });
            }
            else if(bet_type === bet_types[1]){
              profit = functions.calculateMoneyLine(coins, -200);
              message.reply(`Expected profit: ${profit}`);
              new_amount
            }
            else if(bet_type === bet_types[2]){
              profit = functions.calculateSpreads(coins, -150, -3, 4);
              message.reply(`Expected profit: ${profit}`);
>>>>>>> 29eb04afbce72621b897522564edbd2b8cb77d78
            }
        }
    }
}
<<<<<<< HEAD
=======

db.close(); 




// DO NOT DELETE YET
// BELONGS IN if(team_names.includes(team_name) && bet_types.includes(bet_type) && coins > 0)
/*var bet = {
              team: team_name,
              type: bet_type,
              amount: coins
            }*/

// DO NOT DELETE YET
// BELONGS IN if(bet_type === 'MoneyLine')
/*dbInit.moneylines.insert(bet, function(err, doc){
   console.log('Inserted', doc.type); 
});*/




// DO NOT DELETE YET
// BELONGS IN else if(bet_type === 'Totals')
/*dbInit.totals.insert(bet, function(err, doc){
                console.log('Inserted', doc.type);*
              });*/



//(DO NOT DELETE YET)
//(BELONGS IN if(bet_type === bet_types[0]))
 /*dbInit.players.findOne({name : firstname}, function(err, doc){
                  new_amount = doc.amount + profit; 
                  id = doc._id; 
                  console.log('Player Name:', doc.name);
                  console.log('Player Amount:', doc.amount)
                  console.log('Player New Amount:', new_amount); 
                  console.log('Player ID:', doc._id); 
                }); 
                dbInit.players.update({_id : id}, {$set: {amount : new_amount}}, {},function (err, numReplaced){}); 
                dbInit.players.findOne({name : firstname}, function(err, doc){
                  console.log('Player Name:', doc.name);
                  console.log('Amount after update:', doc.amount);
                  console.log('Player ID:', doc._id);
                });*/
>>>>>>> 29eb04afbce72621b897522564edbd2b8cb77d78
