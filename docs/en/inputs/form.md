## *Button* - inputs
One of the most useful components, the _Button_ provides a single tap action.

### Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {Fabric, Button} from 'fabric-ui-core';

function App() {
  return (
    <Fabric>
        <Button>
          Children
        </Button>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***disabled***: Disables button `boolean`.
- ***highlight***: Highlight makes button fixed at _active_ state `boolean`.
- ***onClick***: Function for the _onclick_ event `function`.
- ***variant***: `one of string`:
  - ***minimal***.
  - ***filled***.
  - ***outlined***.
  - ***minimal-horizontal***.
- ***color***: Color variant `one of string`:
  - ***primary***.
  - ***secondary***.
- ***reference***: Element reference `ref object`.
- ***className***: CSS class name `string`.
- ***styles***: JSX inline style object `object`.
- ***children***: `node`
