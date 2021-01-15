/*The command for the main function of the bot, users can make a bet
following the format: !bet {team} {bet_type} {coins}
*/
const { prefix } = require('../config.json'); 

const team_names = ["Giants", "Jets", "Ravens", "Rams", "Packers"]; 

const bet_types = ["Totals", "Teasers", "Parlays", "Point Spreads"];

module.exports = {
    name: 'bet', 
    description: 'Make a bet', 
    arguments: 'Add a team, bet type, and coins to make a bet.',
    usage: `\`${prefix}bet [team name] [bet type] [coins]\``,
    execute(message, args) {
        const team_name = args[0];
        const bet_type = args[1];
        const coins = args[2];

        if(!team_names.includes(team_name)) {
            message.reply('Your team name is invalid. Please, submit a valid team name to !bet.');
        }
        if(!bet_type.includes(bet_type)) {
            message.reply('Your bet type is invalid. Please, submit a valid bet type to !bet.'); 
        }
        if(coins < 0) {
            message.reply('The amount of coins in your bet is invalid. Please, submit a coin amount > 0 to !bet.');
        }
        if(team_names.includes(team_name) && bet_types.includes(bet_type) && coins > 0){
            message.reply(`Your bet of ${coins} coins has been added to bet: ${bet_type}`); 
        }
    }, 
};

// This is just a partially completed code to see if the error handling works, and args are taken in correctly. 
