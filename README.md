# Backoffice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

What things you need to install the software and how to install them:

1. [Node.js](https://nodejs.org)
2. [Git](https://git-scm.com)
3. Package Manager - [npm](https://www.npmjs.com/package/npm) or [yarn](https://yarnpkg.com)
4. AngularCLI - You could follow the instructions [here](https://angular.io/guide/setup-local)

If you're using `VSCode` as your editor, you could install these **extensions** to improve the development process:

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain our code quality with ease.
2. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Automatically format our code so we don't have to worry about the code style.

### Installing and Starting Development Server

After cloning the repo, to install all dependencies, run the command below:

```bash
npm install
```

After installing all the dependencies is complete, to start the development server run the command below:

```bash
# If you're using npm
npm run start

# If you're using yarn
yarn start
```

## Scripts

### Start

To start development server. The app will automatically reload if you change any of the source files.

### Serve

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Credentials

If you wondering where to find the initial credentials to log in to the application. You could find the initial credentials at `/src/app/shared/constants/credentials.ts`. Or if you didn't wanna search and open the file, here's the demo account:

```
username: demo
password: demo
```

## Built With

- [Angular](https://angular.io) - The web framework used for this project.
- [TypeScript](https://www.typescriptlang.org) - a strict syntactical superset of JavaScript and adds optional static typing to the language.
- [ESLint](https://eslint.org) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.
- [Prettier](https://prettier.io) - An opinionated code formatter.
- [Lint-staged](https://github.com/okonet/lint-staged) - To run linters against staged git files.
- [Husky](https://typicode.github.io/husky) - To run checking scripts (ESLint) when adding new commit.
- [Faker](https://github.com/Marak/Faker.js) - The dependency used to generate Employees data.

## Authors

- Aris Rinardi
