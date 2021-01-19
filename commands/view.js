/*File for the view command.
This command will show the user what bets they can make and take an optional parameter
"team name" to show a bet from a specific team.
*/
const {prefix} = require('../config.json');
const odds = require('../example-odds.json');
module.exports = {
	name: 'view',
	description: 'View all the bets available this week',
	arguments: 'Add a team name to view bets available for a specific team.',
	usage:`\`${prefix}view [team name]\``,
	execute(message) {
		message.author.send('Command is coming soon!');
	},
};
