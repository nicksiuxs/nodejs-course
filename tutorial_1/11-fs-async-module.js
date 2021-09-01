const { readFile, writeFile } = require("fs");

// If the encoding is not sending the will return the buffer
readFile("./content/first.txt", "utf8", (error, result) => {
	if (error) {
		console.log(error);
		return;
	}
	const first = result;
	readFile("./content/second.txt", "utf8", (error, result) => {
		if (error) {
			console.log(error);
			return;
		}
		const second = result;
		writeFile(
			"./content/result-async.txt",
			`Here is the result async: \n${first} \n${second}`,
			(error, result) => {
				if (error) {
					console.log(error);
					return;
				}
				console.log(result);
			}
		);
	});
});
