## *Breadcrumbs* - navigation
_Breadcrumbs_ gives the user an easy way to see the current step.

### Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, Breadcrumbs, Button} from '@f-ui/core';

function App() {

  return (
    <Fabric>
      <Breadcrumbs divider={'-'} justify={'start'}>
        <Button>A1</Button>
        <Button>A2</Button>
        <Button>A3</Button>
        <Button>A4</Button>
        <Button>A5</Button>
      </Breadcrumbs>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***justify***: Content justification `one of string`.
  - ***end***.
  - ***middle***.
  - ***start***.
- ***divider***: Custom divider to be rendered between the elements `string`.
- ***children***: `node`.
