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

#### propTypesを使った型チェック
旧バージョンからやり方が変更になっているの注意
```
import PropTypes from 'prop-types';
Hello.propTypes = {
  name: PropTypes.string
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

## React-Bootstrapの導入

Bootstrapの導入はcreate-react-app導入の際にできるReadmeを読めば手順が書かれています。

Bootstrapの追加手順

1. npmを使う方法  
npmからReact BootstrapとBootstrapをインストールします。
```
npm install --save react-bootstrap bootstrap@3
```
2. yarnを使う方法  
```
yarn add react-bootstrap bootstrap@3
```

src/index.jsファイルの先頭に下記をインポートする。
```
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
```
src/App.jsファイルに下記をインポートする：
```
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
```
これでBootstrapが使えるようになります。
なお、ReactでのBootstrapの使い方ドキュメントは以下を参考にします。なかなかGoodなものです。

[React-Bootstrap ドキュメント](https://react-bootstrap.github.io/getting-started/introduction)

### ボタンの追加

import文に以下を追加
```
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
```
ボタンを追加したい場所に以下挿入
```
<Button bsStyle="primary">Primary</Button>
<Button bsStyle="danger">Danger</Button>
```

### コンポーネントを別ファイルに用意してそれをimport

Form.jsファイルを用意してフォームを作成。
[React-Bootstrap](https://react-bootstrap.github.io/components/alerts/)のComponentsのFormsを参考にして記述。（以下コード）
import文に`import { FormGroup, FormControl, ControlLabel,HelpBlock } from 'react-bootstrap';`を記述しないとエラーになるので注意。 
import文に必要なものは React-Bootstrapのドキュメントでそれぞれのパーツの見出し部分にグレーの色で記述されているのでそれを使う。  
![import文に必要な記述](images/rb1.png)

また、最後の`render(<FormExample />);`はApp.jsで使用するのでこのファイルでは不要。  
その代わりにexportのために`export default FormExample;`を付け加える。

```
import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel,HelpBlock } from 'react-bootstrap';


class FormExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}



export default FormExample;
```