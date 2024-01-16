<!-- markdownlint-disable MD030 -->

# Contributing to GreatBuilder

We appreciate any form of contributions.

## ⭐ Star

Star and share the [Github Repo](https://github.com/greatbuilderhq/greatbuilder).

## 🙋 Q&A

Search up for any questions in [Q&A section](https://github.com/greatbuilderhq/greatbuilder/discussions/categories/q-a), if you can't find one, don't hesitate to create one. It might helps others that have similar question.

## 🙌 Share build ideas

Yes! Sharing how you use GreatBuilder is a way of contribution. Export your build ideas as JSON, attach a screenshot and share it in [Show and Tell section](https://github.com/greatbuilderhq/greatbuilder/discussions/categories/show-and-tell).

## 💡 Ideas

Ideas are welcome such as new feature, apps integration, and blockchain networks. Submit in [Ideas section](https://github.com/greatbuilderhq/greatbuilder/discussions/categories/ideas).

## 🐞 Report Bugs

Found an issue? [Report it](https://github.com/greatbuilderhq/greatbuilder/issues/new/choose).

## 👨‍💻 Contribute to Code

Not sure what to contribute? Some ideas:

- Create new components from Langchain
- Update existing components such as extending functionality, fixing bugs
- Add new build ideas

### Developers

GreatBuilder has different modules in a single mono repository.

- `server`: Backend to serve API logics
  - `js-server`: Js Backend
  - `py-server`: Python Backend
- `llm-components`: LLM components
  - `huggingFace`: huggingFace components
  - `llama2`: llama components
- `langchain-components`: Langchain components
- `blockchain-components`: Blockchain components (coming soon)
- `web-ui`: NextJs frontend components
- `mobile-ui`: ReactNative frontend components (coming soon)
- `mr-ui`: Ar/Vr components (coming soon)
- `game-ui`: Game components (coming soon)

#### Prerequisite

    ```bash
    npm i -g npm
    ```

#### Step by step

1. Fork the official [GreatBuilder Github Repository](https://github.com/greatbuilderhq/greatbuilder).

2. Clone your forked repository.

3. Create a new branch, see [guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository). Naming conventions:

   - For feature branch: `feature/<Your New Feature>`
   - For bug fix branch: `bugfix/<Your New Bugfix>`.

4. Switch to the newly created branch.

5. Go into repository folder

   ```bash
   cd GreatBuilder
   ```

6. Install all dependencies of all modules:

   ```bash
   npm install
   ```

7. Build all the code:

   ```bash
   npm run build
   ```

8. Start the app on [http://localhost:3000](http://localhost:3000)

   ```bash
   npm start
   ```

9. For development:

   - Create `.env` file and specify the `PORT` (refer to `.env.example`) in `packages/ui`
   - Create `.env` file and specify the `PORT` (refer to `.env.example`) in `packages/server`
   - Run

   ```bash
   npm run dev
   ```

   For changes made in `packages`, run `npm run build` again to pickup the changes.

10. After making all the changes, run

    ```bash
    npm run build
    ```

    and

    ```bash
    npm run start
    ```

    to make sure everything works fine in production.

11. Commit code and submit Pull Request from forked branch pointing to [GreatBuilder master](https://github.com/greatbuilderhq/greatbuilder/tree/master).

## 🌱 Env Variables

GreatBuilder support different environment variables to configure your instance. You can specify the following variables in the `.env` file inside `packages/server` folder. Read [more](https://docs.GreatBuilder.xyz/environment-variables)

| Variable                         | Description                                                                  | Type                                             | Default                                  |
| -------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| PORT                             | The HTTP port GreatBuilder runs on                                           | Number                                           | 3000                                     |
| GreatBuilder_USERNAME            | Username to login                                                            | String                                           |                                          |
| GreatBuilder_PASSWORD            | Password to login                                                            | String                                           |                                          |
| DEBUG                            | Print logs from components                                                   | Boolean                                          |                                          |
| LOG_PATH                         | Location where log files are stored                                          | String                                           | `your-path/GreatBuilder/logs`            |
| LOG_LEVEL                        | Different levels of logs                                                     | Enum String: `error`, `info`, `verbose`, `debug` | `info`                                   |
| APIKEY_PATH                      | Location where api keys are saved                                            | String                                           | `your-path/GreatBuilder/packages/server` |
| TOOL_FUNCTION_BUILTIN_DEP        | NodeJS built-in modules to be used for Tool Function                         | String                                           |                                          |
| TOOL_FUNCTION_EXTERNAL_DEP       | External modules to be used for Tool Function                                | String                                           |                                          |
| DATABASE_TYPE                    | Type of database to store the GreatBuilder data                              | Enum String: `sqlite`, `mysql`, `postgres`       | `sqlite`                                 |
| DATABASE_PATH                    | Location where database is saved (When DATABASE_TYPE is sqlite)              | String                                           | `your-home-dir/.GreatBuilder`            |
| DATABASE_HOST                    | Host URL or IP address (When DATABASE_TYPE is not sqlite)                    | String                                           |                                          |
| DATABASE_PORT                    | Database port (When DATABASE_TYPE is not sqlite)                             | String                                           |                                          |
| DATABASE_USER                    | Database username (When DATABASE_TYPE is not sqlite)                         | String                                           |                                          |
| DATABASE_PASSWORD                | Database password (When DATABASE_TYPE is not sqlite)                         | String                                           |                                          |
| DATABASE_NAME                    | Database name (When DATABASE_TYPE is not sqlite)                             | String                                           |                                          |
| DATABASE_SSL                     | Database connection overssl (When DATABASE_TYPE is postgre)                  | Boolean                                          | false                                    |
| SECRETKEY_PATH                   | Location where encryption key (used to encrypt/decrypt credentials) is saved | String                                           | `your-path/GreatBuilder/packages/server` |
| GreatBuilder_SECRETKEY_OVERWRITE | Encryption key to be used instead of the key stored in SECRETKEY_PATH        | String                                           |

You can also specify the env variables when using `npx`. For example:

```
npx GreatBuilder start --PORT=3000 --DEBUG=true
```

## 📖 Contribute to Docs

[GreatBuilder Docs](https://github.com/greatbuilderhq/greatbuilderDocs)

## 🏷️ Pull Request process

A member of the GreatBuilder team will automatically be notified/assigned when you open a pull request. You can also reach out to us on [Discord](https://discord.gg/RMKWBGrX).

## 📜 Code of Conduct

This project and everyone participating in it are governed by the Code of Conduct which can be found in the [file](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to hello@greatbuilder.xyz.
