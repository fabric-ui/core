### Installation
The fabric-ui package provides you with the ability to produce more while writing less, it includes components ranging from basic like a text-field to more complex like a chart.

To set up the package you can run the command below using your package installer of choice:


```shell
// with npm
npm install axios react-input-mask prop-types fabric-ui
// with yarn
yarn add axios react-input-mask prop-types fabric-ui
```

### Additional Dependencies

| Package            | Version | NPM                      | Github                                         |
|--------------------|---------|--------------------------|------------------------------------------------|
| react-input-mask   | ^2.0.4  | npm i react-input-mask   | https://github.com/sanniassin/react-input-mask |
| prop-types   | ^15.7.2  | npm i prop-types   | https://github.com/facebook/prop-types |

### Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {Fabric, Button} from 'fabric-ui';

function App() {
  return (
    <Fabric language={'en'}>
      <Button variant="filled" color="primary">
        Hello World
      </Button>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```
#### Why the _Fabric_ ?
> This component provides support for dark mode, other languages and icons, it is required for the full experience and intended functioning.
