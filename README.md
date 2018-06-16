# sample4

## create-react-app導入
```
yarn global add create-react-app
```

## test作成
```
create-react-app test
```
```
cd test
```
```
yarn start
```
サーバー停止はctrl+C

## SASS導入
```
yarn add node-sass-chokidar
```
```
yarn add npm-run-all
```
packege.json
```
{
  "name": "test",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "node-sass-chokidar": "^1.3.0",
    "npm-run-all": "^4.1.3",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive"
  }
}

```

## 解説
Classコンポーネントとfanctionコンポーネントの違いはstateを持てるかどうかということです。Classコンポーネントがstateを保持することができます。
functionコンポーネントはstateを持たないシンプルなコンポーネントを作成するときに使うと良いです。