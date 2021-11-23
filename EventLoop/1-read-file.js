const { readFile } = require('fs');

console.log('started first task');

//CHECK FILE PATH
readFile('./tutorial_1/content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(result);
    console.log("completed first task");
})

console.log('starting next task');