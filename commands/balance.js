const {prefix} = require('../config.json');
const Discord = require('discord.js');
const { Users } = require('../dbObjects.js');
//const { Op } = require('sequelize');
//const client = new Discord.Client();
const coins = new Discord.Collection();
Reflect.defineProperty(coins, 'add', {
	/* eslint-disable-next-line func-name-matching */
	value: async function add(id, amount) {
		const user = coins.get(id);
		if (user) {
			user.balance += Number(amount);
			return user.save();
		}
		try{
		const newUser = await Users.create({ user_id: id, balance: amount });
		coins.set(id, newUser);
		return newUser;
		}
		catch(err){
			console.error(err);
		}
	},
});
Reflect.defineProperty(coins, 'getBalance', {
/* eslint-disable-next-line func-name-matching */
	value: function getBalance(id) {
		const user = coins.get(id);
		return user ? user.balance : 0;
		},
});
module.exports = {
	name: 'balance',
	description: 'View your current balance.',
	usage:`\`${prefix}balance\``,
	execute(message, args) {
		const decision = args[0];
		coins.add(message.author.id, 1);
		const target = message.mentions.users.first() || message.author;
		if (decision === "public" || decision === "Public") {
			message.channel.send(`${target.tag} has ${coins.getBalance(target.id)}.\n`); 
		}
		else {
			message.author.send(`${target.tag} has ${coins.getBalance(target.id)}.\n`);
		}
	},
};
