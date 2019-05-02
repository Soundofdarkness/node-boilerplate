# Node ES6/ES7 Boilerplate

Yet another boilerplate for NodeJS projects.
We use Babel for transpiling and Mocha/Chai for testing and prettier/eslint for linting and fixing code style.
Everything else is up to you to choose :)

## Quick Start

You will need to have NodeJS and yarn installed in order for this to work. NodeJS with only npm probably works, but isn't tested.

```
git clone https://github.com/Soundofdarkness/node-boilerplate <your-project-name>
cd <your-project-name>
yarn
yarn watch
```

The few commands above should get you up and running,
but you should remember to change the information in `project.json` to fit your needs.

## Project Structure

`src` - This folder contains your entire application. `index.js` is your entry point in this case.

`test` - This folder is holding all your test files for your application.

`build` - Contains all additional build scripts you might want to add.

`dist` will contain the transpiled sources for the whole application after you ran `yarn build`.

## Commands & Features

`yarn test` - Runs all your tests using Mocha and Babel.

`yarn watch` - Starts your application and restarts it on changes.

`yarn clean` - Cleans the whole `dist` folder.

`yarn build` - Builds your application and outputs it to the `dist` folder.

`yarn start` - Starts your application from dist. NOTE: This only works after you ran `yarn dist`

`yarn prettier` - Runs prettier to fix style issues.

`yarn lint` - Runs eslint.

`yarn lint:fix` - Runs eslint and tries to fix eslint errors.

## Thanks

Thanks to the whole JS community for providing all these great build tools ❤️
