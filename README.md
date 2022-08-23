<p align="center">
  <img alt="Cypress Real World App Logo" src="./src/svgs/rwa-logo.svg" />
</p>

<p align="center">
  <a href="https://cypress.io">
    <img width="140" alt="Cypress Logo" src="./src/svgs/built-by-cypress.svg" />
    </a>
</p>

<p align="center">
   <a href="https://dashboard.cypress.io/projects/7s5okt/runs">
    <img src="https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/7s5okt/develop&style=flat&logo=cypress" />
  </a>

  <a href="https://codecov.io/gh/cypress-io/cypress-realworld-app">
    <img src="https://codecov.io/gh/cypress-io/cypress-realworld-app/branch/develop/graph/badge.svg" />
  </a>

  <a href="https://percy.io/cypress-io/cypress-realworld-app">
    <img src="https://percy.io/static/images/percy-badge.svg" />
  </a>
  
   <a href="#contributors-">
    <img src="https://img.shields.io/badge/all_contributors-6-green.svg?style=flat" />
  </a>
</p>

<p align="center">
A payment application to demonstrate <strong>real-world</strong> usage of <a href="https://cypress.io">Cypress</a> testing methods, patterns, and workflows.
</p>

<p align="center">
  <img style='width: 70%' alt="Cypress Real World App" src="./public/img/rwa-readme-screenshot.png" />
</p>

> 💬 **Note from maintainers**
>
> This application is purely for demonstration and educational purposes. Its setup and configuration resemble typical real-world applications, but it's not a full-fledged production system. Use this app to learn, experiment, tinker, and practice application testing with Cypress.
>
> Happy Testing!

---

## Features

🛠 Built with [React][reactjs], [XState][xstate], [Express][express], [lowdb][lowdb], [Material-UI][material-ui] and [TypeScript][typescript]  
⚡️ Zero database dependencies  
🚀 Full-stack [Express][express]/[React][reactjs] application with real-world features and tests  
👮‍♂️ Local Authentication  
🔥 Database Seeding with End-to-end Tests  
💻 CI/CD + [Cypress Dashboard][cypressdashboard]

## Getting Started

The Cypress Real-World App (RWA) is a full-stack Express/React application backed by a local JSON database ([lowdb]).

The app is bundled with [example data](./data/database.json) (`data/database.json`) that contains everything you need to start using the app and run tests out-of-the-box.

> 🚩 **Note**
>
> You can login to the app with any of the [example app users](./data/database.json#L2). The default password for all users is `s3cret`.  
> Example users can be seen by running `yarn list:dev:users`.

### Prerequisites

The only requirement for this project is to have [Node.js](https://nodejs.org/en/) **version 14** installed on your machine. Refer to the [.node-version](./.node-version) file for the exact version.

TypeScript will be added as a local dependency to the project, so no need to install it.

### Installation

```shell
yarn install
```

#### Mac M1 chip users will need to prepend `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true`.

```shell
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
```

### Run the app

```shell
yarn dev
```

> 🚩 **Note**
>
> The app will run on port `3000` (frontend) and `3001` (API backend) by default. Please make sure there are no other applications or services running on both ports.
> If you want to change the default ports, you can do so by modifying `PORT` and `REACT_APP_BACKEND_PORT` variables in `.env` file.
> However, make sure the modified port numbers in `.env` are not commited into Git since the CI environments still expect the application to run on the default ports.

### Start Cypress

```shell
yarn cypress:open
```

> 🚩 **Note**
>
> If you have changed the default ports, then you need to update Cypress configuration file (`cypress.json`) locally.
> There are three properties that you need to update in `cypress.json`: `baseUrl`, `apiUrl`, and `url`.
> The port number in `baseUrl` corresponds to `PORT` variable in `.env` file. Similarly, the port number in `apiUrl` and `url` correspond to `REACT_APP_BACKEND_PORT`.
> For example, if you have changed `PORT` to `13000` and `REACT_APP_BACKEND_PORT` to `13001` in `.env` file, then your `cypress.json` should look similar to the following snippet:
>
> ```json
> {
>   "baseUrl": "http://localhost:13000",
>   /* Omitted for brevity */
>   "env": {
>     "apiUrl": "http://localhost:13001",
>     /* Omitted for brevity */
>     "codeCoverage": {
>       "url": "http://localhost:13001/__coverage__"
>     }
>   },
>   "experimentalStudio": true
> }
> ```
>
> Avoid committing the modified `cypress.json` into Git since the CI environments still expect the application to be run on default ports.

## Tests

The design pattern used in this project was Page Object Model (POM). So, in this project you will see a folder with all pages and another folder with the tests.

In this spreadsheet you will find all test cases that were automated:

https://docs.google.com/spreadsheets/d/1eO4H1epJDxURIeGLnNybcIpuA_mSgB6hQZbZA9JztH8/edit?usp=sharing

In the following folder you will find the test files:
- login.spec.ts
- main-dashboard.spec.ts
- signup.spec.ts

| Type | Location                                                                     |
| ---- | ---------------------------------------------------------------------------- |
| ui   | [cypress/tests/learning-path-gap/ui](./cypress/tests/learning-path-gap/ui)   |

In the following folder you will find the pages files:
- login.ts
- main-dashboard.ts
- my-account.ts
- notifications.ts
- signup.ts
- transactions.ts

| Type | Location                           |
| ---- | ---------------------------------- |
| ui   | [cypress/pages](./cypress/pages)   |

In order to run this project you will need to add a `cypress.env.json` file with this data user mock:
`{
    "user": "Katharina_Bernier",
    "pass": "s3cret"
}`

In the `global.d.ts` file was add a new declaration of signIn method that was used to create a new custom command:
`    
     //Logs-in user by using UI (Jorge Carmona)
     signIn(username: string, password: string): void;
`

## Database

- The local JSON database is located in [data/database.json](./data/database.json) and is managed with [lowdb].

- The database is [reseeded](./data/database-seed.json) each time the application is started (via `yarn dev`). Database seeding is done in between each [Cypress End-to-End test](./cypress/tests).

- Updates via the React frontend are sent to the [Express][express] server and handled by a set of [database utilities](backend/database.ts)

- Generate a new database using `yarn db:seed`.

- An [empty database seed](./data/empty-seed.json) is provided along with a script (`yarn start:empty`) to view the application without data.


## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

[reactjs]: https://reactjs.org
[xstate]: https://xstate.js.org
[express]: https://expressjs.com
[lowdb]: https://github.com/typicode/lowdb
[typescript]: https://typescriptlang.org
[cypressdashboard]: https://dashboard.cypress.io/projects/7s5okt/runs
[material-ui]: https://material-ui.com
[okta]: https://okta.com
[auth0]: https://auth0.com
[oktacreateapp]: https://developer.okta.com/docs/guides/sign-into-spa/react/create-okta-application/
[cognito]: https://aws.amazon.com/cognito
[awsamplify]: https://amplify.aws
[google]: https://google.com

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.kevinold.com"><img src="https://avatars0.githubusercontent.com/u/21967?v=4" width="100px;" alt=""/><br /><sub><b>Kevin Old</b></sub></a></td>
    <td align="center"><a href="https://twitter.com/amirrustam"><img src="https://avatars0.githubusercontent.com/u/334337?v=4" width="100px;" alt=""/><br /><sub><b>Amir Rustamzadeh</b></sub></a></td>
    <td align="center"><a href="https://twitter.com/be_mann"><img src="https://avatars2.githubusercontent.com/u/1268976?v=4" width="100px;" alt=""/><br /><sub><b>Brian Mann</b></sub></a></td>
    <td align="center"><a href="https://glebbahmutov.com/"><img src="https://avatars1.githubusercontent.com/u/2212006?v=4" width="100px;" alt=""/><br /><sub><b>Gleb Bahmutov</b></sub></a></td>
    <td align="center"><a href="http://www.bencodezen.io"><img src="https://avatars0.githubusercontent.com/u/4836334?v=4" width="100px;" alt=""/><br /><sub><b>Ben Hong</b></sub></a></td>
    <td align="center"><a href="https://github.com/davidkpiano"><img src="https://avatars2.githubusercontent.com/u/1093738?v=4" width="100px;" alt=""/><br /><sub><b>David Khourshid</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!!
