### Installation
The fabric-ui-core package provides you with the ability to produce more while writing less, it includes components ranging from basic like a text-field to more complex like a chart.

To set up the package you can run the command below using your package installer of choice:


```shell
// with npm
npm install react-input-mask prop-types fabric-ui-core
// with yarn
yarn add react-input-mask prop-types fabric-ui-core
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
import {Fabric, Button} from 'fabric-ui-core';

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
