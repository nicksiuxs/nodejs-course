const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "text", "file.txt");
console.log(filePath);

const basePath = path.basename(filePath);
console.log(basePath);

const absolutePath = path.resolve(__dirname, "content", "text", "file.txt");
console.log(absolutePath);
