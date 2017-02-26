# angular2-mean-starter - rc 4
Make also sure to check the [**showcase of the app developed with this starter kit.**](#showcase) If you want to submit one, just do open a Pull Request headed to the showcase branch.

This is a very neat and simple starter kit for an angular2 MEAN SPA applications. Obviously this won't be perfect for every situation, but I found this really necessary to overcome the fear of the scary blank project and to discover some best practices on how to structure a project.
Anyway it shouldn't be too hard to expand it to fit your needs.

#### What? No Bower? No gulp? No grunt or whatever the hell the people use out there?
No. Npm is fine for all the tasks that a lot of other **additional** tools can do.
JavaScript and CSS dependencies are both installed by npm. The first ones are served by express and the second ones imported from node_modules in the styles.less file. **TypeScript** is set to compile in es5 and typings are installed properly in the public folder.
<br />
Here you won't find any testing packages (TDD, DDD etc.) as much as any other "necessary" tool, I thought that giving just the bare structure with this package, I'd make it more useful, so that you can compose it on your needs.

## Installation
1. Clone this repo: `git clone https://github.com/giacomocerquone/angular2-mean-starter.git`
2. `cd` into the folder of the repo you just cloned
3. Install npm dependencies `npm install`
4. You're ready to go, give `npm run start` to test the application

## Built-in scripts (npm as Build Tool)
+ `npm start` - Launch concurrently watchers and server.js through nodemon for live restart
+ `npm run build` - Build all the things that must be compiled
+ `build:less` - Build less files
+ `watch:less` - Watch for changes of less files
+ `build:ts` - Build TypeScript files
+ `watch:ts` - Watch for changes on TypeScript files
+ `browsersync` - Live reload the web page when changes are made on the scripts

## What's in here (the stack)
+ Node.js (you don't say)
+ Angular 2
+ TypeScript
+ Express 4
+ Mongoose to handle MongoDB connections
+ Less as CSS preprocessor
+ Bootstrap

#### Development modules
+ Nodemon for live server restart
+ Concurrently for running and handling multiple npm scripts
+ Less-watch-compiler to automatically watch changes to less files and compile them
+ Morgan as logging library
+ Browser-sync to live reload the browser page

## Contributions
I'm really not a genius, probably I'm not even a good programmer yet, but I'm strongly convinced of "learning while doing" so I truly hope for some contributions, advices or anything else you can bring in to improve this starter and to make me a better programmer.

## Showcase
Add down here your own project developed with this starter!
