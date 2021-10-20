console.log("first task");
console.time();
for (let i = 0; i < 10000; i++) {
  const h3 = document.querySelector("h3");
  h3.textContent = "Hey, everyone is waiting for me";
}
console.timeEnd();
console.log("Next task");

console.log("-----------------------");

console.log("firs task");
setTimeout(() => {
  console.log("second task");
}, 0);
console.log("next task");
