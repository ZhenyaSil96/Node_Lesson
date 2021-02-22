function User(name, age) {
    this.name = name
    this.age = age
    this.displayInform = function () {
        console.log(`Имя: ${this.name} и возраст ${this.age}`)
    }
}
User.prototype.sayHi = function () {
    console.log('I have method sayHi')
}


module.exports = User 