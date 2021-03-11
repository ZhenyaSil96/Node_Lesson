// const mysql = require('mysql')
// const connection = mysql.createConnection({
//     host:'localhost',
//     user: 'root',
//     database: 'usersdb',
//     password: 'root'
// })
// connection.connect(function(err){
//     if(err){
//         return console.error('Error'+ err.message)
//     }
//      else{
//          console.log("Подключение к серверу MySQL успешно установлено")
//      }
// })
// connection.end(function(err) {
//     if (err) {
//         return console.log("Ошибка: " + err.message);
//       }
//       console.log("Подключение закрыто");
// })


/////////выполнение запоса////////////////////////

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'usersdb',
    password: 'root'
})
connection.query("SELECT * FROM users", function(err, results, fields){
    console.log(err)
    console.log(results)
    console.log(fields)
})
connection.end()