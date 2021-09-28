// 寄生式组合继承
function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    console.log('My name is ' + this.name + ' .')
}
function Student (name, age) {
    Person.call(this, name)
    this.age = age
}
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student
Student.prototype.sayAge = function () {
    console.log(`my age is ${this.age} .`)
}
