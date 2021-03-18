//Add required modules etc.
const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
//Discord objects
const currency = new Discord.Collection();
const client = new Discord.Client();
client.commands = new Discord.Collection();
//Add all the command files dynamically
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', async () => {
<<<<<<< HEAD
	const storedBalances = await Users.findAll();
	storedBalances.forEach(b => currency.set(b.user_id, b));
	console.log(`Logged in as ${client.user.id}!`);
=======
	console.log(`Logged in as ${client.user.id}`);
>>>>>>> 29eb04afbce72621b897522564edbd2b8cb77d78
});
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);
	if(!client.commands.has(commandName)) return;
	try {
		command.execute(message, args);
		}
	catch (error){
		console.error(error);
		message.reply('Something went wrong, please try again!')
	}
	});
client.login(token);
