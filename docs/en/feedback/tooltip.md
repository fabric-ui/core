## Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, Tooltip, Button} from 'fabric-ui';

function App() {

  return (
    <Fabric>
      <Button>
        <Tooltip content={'Or here as string'}>
          Your message here
        </Tooltip>
        Hover me to show tooltip
      </Button>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

## Props
- ***justify***: Horizontal placement relative to parent node `one of string`.
  - ***end***.
  - ***middle***.
  - ***start***.
- ***align***: Vertical placement relative to parent node `one of string`.
  - ***end***.
  - ***middle***.
  - ***start***.
- ***content***: Any text content `string`.
- ***children***: Any child node `node`.
