/*File for the view command.
This command will show the user what bets they can make and take an optional parameter
"team name" to show a bet from a specific team.
*/
let teams = ['Los Angeles Rams', 'Green Bay Packers', 'Baltimore Ravens', 'Buffalo Bills'];
let matchups = [`${teams[0]} v. ${teams[1]}`, `${teams[2]} v. ${teams[3]}`];
let odds = {
	'money line' : +255,
	'point spread' : -313,
}
const {prefix} = require('../config.json');
module.exports = {
	name: 'view',
	description: 'View all the bets available this week',
	arguments: 'Add a team name to view bets available for a specific team.',
	usage:`\`${prefix}view [team name]\``,
	execute(message) {
		message.author.send('Command coming soon!');
	},
};
