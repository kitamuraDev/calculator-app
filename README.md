<br />

<h3 align="center">Calculator App</h3>

<br />

# Tech Stack

### Language

![Node.js](https://img.shields.io/badge/Node-v16.10.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-v4.6.4-blue)

### Package Manager

![Yarn](https://img.shields.io/badge/Yarn-v1.22.5-blue)

### Library

![React](https://img.shields.io/badge/React-v18.2.0-blue)

### Build Tool

![Vite](https://img.shields.io/badge/Vite-v3.0.0-blue)

### Linter / Formatter

![ESLint](https://img.shields.io/badge/ESLint-v8.18.0-blue)
![Prettier](https://img.shields.io/badge/Prettier-v2.7.1-blue)

# Project setup

1. Clone repository

```bash
$ git clone https://github.com/kitamuraDev/vite-react-ts-starter.git
```

2. Move to repository

```bash
$ cd vite-react-ts-starter
```

3. Rewrite git information

```bash
$ rm -rf .git
$ git init
$ git add .
$ git commit -m "Initial commit"
$ git remote add origin https://github.com/user/repo.git
$ git push -u origin main
```

4. Install dependencies

```bash
$ yarn

or

$ yarn install
```

5. Launch application

```bash
$ yarn dev
```

6. Build application

```bash
$ yarn build
```

7. Preview build results

```bash
$ yarn preview
```

# About Git-Hooks

##### Basically, when you do `yarn install`, `yarn prepare` is also executed, but if it is not executed, please execute it explicitly.

```bash
$ yarn prepare
```

##### If successful, the following settings will be written to `.git/hooks/pre-commit`.

```
#!/bin/sh
npx lint-staged
```

# Editor Config

- Don't forget to install the VScode extension
- The location of the configuration file is `Users> Username> Library> Application Support> Code> User> settings.json`

### Run ESLint on save

```json
{
  "eslint.packageManager": "yarn",
  "editor.formatOnSave": false, // To avoid conflict with Prettier
  "editor.codeActionsOnSave": ["source.addMissingImports", "source.fixAll.eslint"]
}
```

### Run Prettier on save

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.formatOnSave": true
  }
}
```

# Contact

[Twitter: @kitamuraDev](https://twitter.com/kitamuraDev)

# License

[MIT](https://choosealicense.com/licenses/mit/)
