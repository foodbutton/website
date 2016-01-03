# foodbutton.io
This example application demonstrates Serverless AWS Architecture

Frontend Inspired by [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter) & [Angular 1 Webpack demo](https://github.com/angular-tips/webpack-demo).


* Uses [Webpack](http://webpack.github.io/) for building our files and assisting with boilerplate. We're also using Protractor for our end-to-end story and Karma for our unit tests.
* Best practices in file and application organization for [Angular 2](https://angular.io/).
* Ready to go build system using [Webpack](https://webpack.github.io/docs/) for working with [TypeScript](http://www.typescriptlang.org/).
* Easily add new components using [Angular 2 cli](http://ngcli.github.io/).
* Testing Angular 2 code with [Jasmine](http://jasmine.github.io/) and [Karma](http://karma-runner.github.io/).
* Coverage with [Istanbul](https://github.com/gotwarlost/istanbul)
* End-to-end Angular 2 code using [Protractor](https://angular.github.io/protractor/).
* Stylesheets with [SASS](http://sass-lang.com/) (not required, it supports regular css too).
* Error reported with [TSLint](http://palantir.github.io/tslint/).
* Documentation with [TypeDoc](http://typedoc.io/).


```coffeescript
Warning: Make sure you're using the latest version of Node.js and NPM
```

```bash
# clone our repo
git clone https://github.com/foodbutton/website.git

# change directory to our repo
cd website

# install the repo with npm
npm install

# start the server
npm start
```
go to [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Add new components with Angular 2 cli](#add-new-components-services-pipes-with-angular-2-cli)
    * [Testing](#testing)
    * [Documentation](#documentation)
* [TypeScript](#typescript)

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app
After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).


## Developing

### Add new components, services, pipes with Angular 2 cli
* `npm install -g angular-cli` to install Angular 2 cli
* Add a new component with: `ng generate component my-new-component`
* Add a new service with: `ng generate service my-new-service`
* Add a new pipe with: `ng generate pipe my-new-pipe`

### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

#### 2. End-to-End Tests (aka. e2e, integration)

* single run:
  * in a tab, *if not already running!*: `npm start`
  * in a new tab: `npm run webdriver-start`
  * in another new tab: `npm run e2e`
* interactive mode:
  * instead of the last command above, you can run: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out Protractor commands without starting up the entire test suite. You can do this with the element explorer.
  * you can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

## Documentation

You can generate api docs (using [TypeDoc](http://typedoc.io/)) for your code with the following:
```bash
npm run docs
```

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.7.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 11+](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)