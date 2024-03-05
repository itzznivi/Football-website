const mysql = require('mysql');

 
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'nivi',
  database: 'football'
});
 
function query(sql, args) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query(sql, args, (err, rows) => {
        connection.release();  
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  });
}

module.exports = {
  query
};
