# Node.js and Express course

This repository has all the information about the freecodecamp's course
link: https://www.youtube.com/watch?v=Oe421EPjeBE

## Diferences between browser js and Node.js

- First node doesn't have access to the browser apis (DOM, geolocation, fetch, etc).
- With node we build server side apps (pure logic, no GUI).
- Access to the filesystem.
- Node apps depends only on node.js version it was built.
- Acces to modules by default.

## Global variables in Node (some variables)

- \_\_dirname : path to current directory.
- \_\_filename : file name.
- require : funtion to use modules (CommonJs).
- module : info about current module (file).
- process : info about env where the program is beign excuted.

## Modules

- With Node you excute one file but you can split your code in modules.
- Essentially modules are encapsulated code (only sharing what we want).
- Every file in Node is a module.

### Export modules

```javascript
module.exports.variable = [1, 2, 3, 4];
const person = { name: "John" };
module.exports.singlePerson = person;
```

### Mind grenade

If we import a file with that doesn't have exports, it will be appended to our app

## Built-in modules in Node

Node has differents built-in modules that we can use freely in our apps.
We don't need to install built in modules.

- OS
- PATH
- FS
- HTTP

### OS Module

This module can provides many useful properties and methods for interacting with
operating system as well as the server. To see the differents methods look the documentation.
[documentation](https://nodejs.org/api/os.html)

### PATH Module

Module that provides utilities for working with file and directory paths.
See more in [documentation](https://nodejs.org/api/path.html)

### FS Module

This module provides interaction with the file system. See more in [documentation](https://nodejs.org/api/fs.html)

### Differences between async y sync

async allow to continue with the excution, the sync wait to the end the task to continue with others task

### HTTP Module

This module can provides a set up a web server
See more information in [documentation](https://nodejs.org/api/http.html)

## NPM (Node Packages Manager)

The world's biggest code store. A package is essentially is a folder that contains a javascript code, can be called
modules or dependecies. Tip: is a package has a high number of weekly downloads may be is a good package.

### How to use it in a project

- Check the versio of npm

```
npm --version
```

- Install local dependency

```
npm i <packageName>
```

- Install global dependency

```
npm install -g <packageName>
```
