let's install vue cli

```bash
🔥 ➜ npm install -g @vue/cli
```

after install vue command will be available in your terminal

```bash
🔥 ➜ npm list -g
C:\Program Files\nodejs -> .\
├── @vue/cli@5.0.4
├── corepack@0.10.0
├── nodemon@2.0.16
├── npm@8.5.0
└── yarn@1.22.18
```

from the above command we can see that vue cli is installed

let's check the version of vue cli this command.

```bash
🔥 ➜ vue --version
@vue/cli 5.0.4
```

let run the vue command

```bash
🔥 ➜ vue
Usage: vue <command> [options]

Options:
  -V, --version                              output the version number
  -h, --help                                 display help for command

Commands:
  create [options] <app-name>                create a new project powered by vue-cli-service
  add [options] <plugin> [pluginOptions]     install a plugin and invoke its generator in an already created project
  invoke [options] <plugin> [pluginOptions]  invoke the generator of a plugin in an already created project
  inspect [options] [paths...]               inspect the webpack config in a project with vue-cli-service
  serve                                      alias of "npm run serve" in the current project
  build                                      alias of "npm run build" in the current project
  ui [options]                               start and open the vue-cli ui
  init [options] <template> <app-name>       generate a project from a remote template (legacy API, requires @vue/cli-init)
  config [options] [value]                   inspect and modify the config
  outdated [options]                         (experimental) check for outdated vue cli service / plugins
  upgrade [options] [plugin-name]            (experimental) upgrade vue cli service / plugins
  migrate [options] [plugin-name]            (experimental) run migrator for an already-installed cli plugin
  info                                       print debugging information about your environment
  help [command]                             display help for command

  Run vue <command> --help for detailed usage of given command.
```

[vue cli documentation](https://cli.vuejs.org/)

let's create a vue app

```bash
🔥 ➜ vue create job-search
```

answer the prompts and create a new project

1. create a new project
2. select manual mode
3. select unit testing
4. select prettier and eslint

### let's run the app

go the app directory

```bash
🔥 ➜ cd job-search
```

run the npm command

```bash
🔥 ➜ npm run serve
```

then you can see the app on the browser

### Hot reloading

app will auto reload after we save a file.

### vs code setup

let's install these extensions

1. prettier
2. eslint
3. vuter

### let's create a vs code configuration

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "eslint.validate": ["javascript", "vue"],
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### let's create a jest config file

```js
module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: [
    "**/__tests__/**/*.{j,t}s?(x)",
    "**/?(*.)+(spec|test).[j,t]s?(x)",
  ],
};
```

### let's change the eslint config

```js
module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],

  parserOptions: {
    parser: "@babel/eslint-parser",
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },

  overrides: [
    {
      files: [
        "**/__tests__/**/*.{j,t}s?(x)",
        "**/?(*.)+(spec|test).[j,t]s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
```
