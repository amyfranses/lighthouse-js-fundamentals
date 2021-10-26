const sayHello = function(name) {
  console.log("Hello, " + (name));
}
sayHello();

const sayHelloToConsole = function(name){
  console.log("Hello, " + name);
}
sayHelloToConsole('John');

const returnSayHello = function(name) {
  return "hello, " + name;
}
const greeting = returnSayHello("John");
console.log(greeting);