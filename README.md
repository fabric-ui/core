## Installation

```sh
// with npm
npm i @f-ui/core

// with yarn
yarn add @f-ui/core
```

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, Button} from '@f-ui/core';

function App() {
  return (
    <ThemeProvider language={'en'} theme={'dark'}>
      <Button variant="filled" color="primary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

## Additional Dependencies

| Package    | Version | NPM                      | Github                                 |
|------------|---------|--------------------------|----------------------------------------|
| react-imask      | ^6.4.2 | npm i react-imask  | https://github.com/uNmAnNeR/imaskjs |
| prop-types | ^15.7.2  | npm i prop-types   | https://github.com/facebook/prop-types |

