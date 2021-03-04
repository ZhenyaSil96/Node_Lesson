// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/users')
// .then(() => {
//     console.log('MongoDB the start ...')
// })
// .catch( e => console.log(e))
/////////////////////////////////////////

// const MongoClient = require('mongodb').MongoClient

// const url = 'mongodb://localhost:27017'
// const mongoClient = new MongoClient(url, { useUnifiedTopology: true })

// mongoClient.connect(function(err, client){
      
//     const db = client.db("usersdb")
//     const collection = db.collection("users");
//     let user = {name: "Sam", age: 13}
//     collection.insertOne(user, function(err, result){
          
//         if(err){ 
//             return console.log(err)
//         }
//         console.log(result.ops)
//         client.close()
//     })
// })
//////////////////////////////////////////////////////////////

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'
const mongoClient = new MongoClient(url, { useUnifiedTopology: true })

let users = [{name: 'Bob', age:20}, {name: 'Kate', age:15}, {name: 'Sara', age: 31}]

mongoClient.connect((err, client) =>{
  const db = client.db('userdb')
  const collection = db.collection('users')
  
  collection.insertMany(users, (err, results) => {
     console.log(results)
     client.close()

  })
})