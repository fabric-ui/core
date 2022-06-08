## *Switcher* - navigation

The _Switcher_ component animates the change between elements.

### Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, Switcher} from '@f-ui/core';

function App() {

  return (
    <ThemeProvider>
      <Switcher openChild={2}>
        <button>First child</button>
        <div>Second child</div>
        <article>Third child (on render)</article>
      </Switcher>
    </ThemeProvider>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***className***: Wrapper className `string`.
- ***openChild***: Child to be rendered (index) `number`.
- ***styles***: Jsx style object `object`.
- ***children***: `node`.
