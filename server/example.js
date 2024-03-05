const db = require('./db');

 
async function getUsers() {
  try {
    const users = await db.query('SELECT * FROM users');
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

getUsers();
