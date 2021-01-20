/*The command for the main function of the bot, users can make a bet
following the format: !bet {team} {bet_type} {coins}
*/
const { prefix } = require('../config.json'); 
const data = require('../example-odds.json');
var profit = -1;
const team_names = ["Giants", "Jets", "Ravens", "Rams", "Packers"]; 
const bet_types = ["Totals", "MoneyLine", "Spread"];
const calculateMoneyLine = (stake, odds) => {
    //moneyline payout for positive and negative odds
    if(odds > 0){
        profit = stake * (odds/100);
        return profit;}
    else if(odds < 0){
        profit = stake / (odds/100);
        return 0 - profit;}
}
const functions = require('../functions/odd-functions.js')
const team_names = ["Giants", "Jets", "Ravens", "Rams", "Packers"];
const bet_types = ["Totals", "Money Line", "Spread"];
module.exports = {
    name: 'bet', 
    description: 'Make a bet', 
    arguments: 'Add a team, bet type, and coins to make a bet.',
    usage: `\`${prefix}bet [team name] [bet type] [coins]\``,
    execute(message, args) {
        var profit = -1;
        const team_name = args[0];
        const bet_type = args[1];
        const coins = args[2];

        if(!team_names.includes(team_name)) {
            message.reply('Your team name is invalid. Please, submit a valid team name to bet.');
        }
        if(!bet_types.includes(bet_type)) {
            message.reply('Your bet type is invalid. Please, submit a valid bet type to bet.'); 
        }
        if(coins < 0) {
            message.reply('The amount of coins in your bet is invalid. Please, submit a coin amount over 0 to bet.');
        }
        if(team_names.includes(team_name) && bet_types.includes(bet_type) && coins > 0){
            if(bet_type === bet_types[1]){
                profit= calculateMoneyLine(coins,-200);
                message.reply(`Your bet of ${coins} coins has been added to bet: ${bet_type}`);
                message.reply(`Expected profit: ${profit}`);
            }
            else{
                //TODO: Add more code for the 2 other bet types
                message.reply(`Your bet of ${coins} coins has been added to bet: ${bet_type}`);
            }
            message.reply(`Your bet of ${coins} coins has been added to bet: ${bet_type}`)
            if(args[1] === bet_types[0]){
              profit = functions.calculateTotals(coins, -110, 52, 53)
              message.reply(`Expected profit: ${profit}`);
            }  
            else if(args[1] === bet_types[1]){
              profit = functions.calculateMoneyLine(coins, -200);
              message.reply(`Expected profit: ${profit}`);
            }
            else if(args[1] === bet_types[2]){
              profit = functions.calculateSpreads(coins, -150, 3, 4);
              message.reply(`Expected profit: ${profit}`);
            }
        }
    }
}
