# PC application

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `eslint .`

To check eslint rules for all directory.

More about eslint you can read [here](https://eslint.org/docs/user-guide/command-line-interface)

### `environment variables`

Before you run project locally you should create in the root app folder `.env.development` file.
This file should contain the same variables as file `.env.production`.

## Translations

File with `Russian` translations - `arlekino/public/locales/ru/translations.json`<br />
File with `English` translations - `arlekino/public/locales/en/translations.json`

Now `Russian` translations look like this:

```
...
{
    "mainMenu": {
        "viewSettings": "Настройки просмотра",
        "DNSManagement": "Управление DNS",
        "workLog": "Лог работы",
        "referrals": "Мои рефералы",
        "support": "Поддержка",
        "onlinePlayer": "Онлайн плеер"
    }
},
...
```

To add `English` transations you need to change them in the `/en/translations.json` like this:

```
...
{
    "mainMenu": {
        "viewSettings": "View settings",
        "DNSManagement": "DNS management",
        "workLog": "`Work log",
        "referrals": "My referrals",
        "support": "Support",
        "onlinePlayer": "Online player"
    }
},
...
```

To apply the changes, you just need to save the file and reload the application in the browser.

### ASCII url structure

```json
index (Home page)
news (News page)
  /[id] (Article)
profile
  refs
  log
  devices
    add
      ?set_name
      ?set_server
      ?set_channels
      ?set_subscription
    [device_id]
      edit_server
      edit_channels
      player
        index - Страница плеера
        edit - редактировать
      playlist
```
