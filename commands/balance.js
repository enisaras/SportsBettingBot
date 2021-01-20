const {prefix} = require('../config.json');
const Discord = require('discord.js');
//const { Users } = require('../dbObjects.js');
const client = new Discord.Client();
const coins = new Discord.Collection();
module.exports = {
	name: 'balance',
	description: 'View your current balance.',
	usage:`\`${prefix}balance\``,
	execute(message, args) {
		const decision = args[0];
		if (decision === "public" || decision === "Public") {
			message.channel.send(`test`); 
		}
		else {
			message.author.send(`test`);
		}
	},
};
