# Node.js and Express course

This repository have all the information about the freecodecamp's course
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
