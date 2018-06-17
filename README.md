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
## 独自boilerplate作成
### Classコンポーネントとfanctionalコンポーネント 
Classコンポーネントとfanctionalコンポーネントの違いはstateを持てるかどうかということです。Classコンポーネントがstateを保持することができます。
functionalコンポーネントはstateを持たないシンプルなコンポーネントを作成するときに使うと良いです。

#### functionalコンポーネントの例
```
import React from 'react';

const Hello = () => {
  return(
    <div>
      <h1>Hello!</h1>
      <p>functionalコンポーネントを作成した</p>
    </div>
  )
}
```

#### Classコンポーネントの例
```
import React, { Component } from 'react';

class App extends Component {
  render() {   
      <h1>Hello!</h1>
      <p>Classコンポーネントを作成した</p>
  }
}
```

#### props
```
import React from 'react';

const Hello = (props) => {
  return(
    <div>
      <h1>Hello!{props.name}</h1>
      <p>functionalコンポーネントを作成した</p>
    </div>
  )
}
```
#### state
```
import React, { Component } from 'react';

class App extends Component {
    constructor(props){
		super(props)
		this.state = {name:"Haidoro"}
	}
  render() {   
      <h1>Hello!{this.state.name}</h1>
      <p>functionalコンポーネントを作成した</p>
  }
}
```