// Modules

const { john, peter, susan } = require("./4-name");
const { sayHi } = require("./5-utils");
// const { items, singlePerson } = require("./6-alternative-flavors");
const data = require("./6-alternative-flavors");
console.log(data);
sayHi(susan);
sayHi(john);
sayHi(peter);
// sayHi(singlePerson.name);
// sayHi(items[0]);
