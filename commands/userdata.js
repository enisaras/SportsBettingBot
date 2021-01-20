const { prefix } = require('../config.json');
const { Users } = require('../dbObjects.js');
const sqlite3 = require('sqlite3').verbose();


function retrieve_data(fname, lname) {
  let db = new sqlite3.Database(Users.js); // Users.js is the database we are looking at. 
  
  let sql = `SELECT first_name and last_name FROM Users WHERE first_name = fname and last_name = lname`;
  
  db.get(sql, [Users], (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    return row 
      ? console.log(row.id, row.nme)
      : console.log(`No playlist found with the name ${fname} ${lname}.`);
  }); 
  
  db.close(); 
}


module.exports = {
  name: 'userdata',
  description: 'Get the current user data.',
  usage: `\`${prefix}userdata [firstname] [lastname]\``,
  execute(message, args) {
    const fname = args[0];
    const lname = args[1];
    if(fname = " ") { message.reply('You missed to enter your first name.') }
    else if(lname = " ") { message.reply('You missed to enter your last name.') }
    else {
      message.author.send(retrieve_data(fname, lname)); 
    }
  }
}
