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

// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// const mongoClient = new MongoClient(url, { useUnifiedTopology: true })

// let users = [{name: 'Bob', age:20}, {name: 'Kate', age:15}, {name: 'Sara', age: 31}]
// let userBoy = {name: 'Pavel', age: 45}

// mongoClient.connect((err, client) =>{
//   const db = client.db('userdb')
//   const collection = db.collection('users')
  
//   collection.insertMany(users, (err, results) => {
//      console.log(results)
//      client.close()

//   })

//   db.collection('users').deleteMany({name:'Bob'}, (err, result) => {
//       if (err) console.log(err)
//       console.log(result)
//       client.close()
//   })

//   collection.insertOne(userBoy, (err ,result) => {
//       if(err) console.log(err)
//       console.log(result)
//       client.close()
//   })
// })
/////////////////////////////////////////////////////////////////////////////

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Установка схемы 

const userSchema = new Schema({
    name: String,
    age: Number
})

//Подключение 

mongoose.connect("mongodb://localhost:27017/usersdb", {useUnifiedTopology: true, useNewUrlParser: true})

const User = mongoose.model('User', userSchema)
const user = new User(
    {
      name: 'Tomass',
      age: 45
    })
const user1 = new User(
    {
        name: 'Ilya',
        age: 25
    }
)

user.save(function (err){
    mongoose.disconnect() //Отключение от базы даных 

    if(err) return console.log(err)
    console.log('Сохранен объект', user)
})

user1.save((err) => {
    mongoose.disconnect()
    if (err) return console.log(err)
    console.log("Save user1", user1)
})