## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {MfcWrapper, Button} from 'mfc-core';

function App() {
  return (
    <MfcWrapper>
        <Button>
          Child
        </Button>
    </MfcWrapper>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

## Props
- ***disabled***: Disables button (boolean).
- ***highlight***: Highlight makes button fixed at _active_ state (boolean).
- ***onClick***: Function for the _onclick_ event (function).
- ***variant***: One of (string; Default variant receives undefined):
  - ***minimal***: Translucent with a horizontal indicator.
  - ***filled***: Solid color.
  - ***outlined***: Visible border around the button.
  - ***minimal-horizontal***: Just like minimal but with a vertical indicator.
- ***color***: Color variant, one of (string; Default is primary):
  - ***primary***: Primary color.
  - ***secondary***: Secondary color.
- ***reference***: Element reference (any).
- ***className***: CSS class name.
- ***styles***: JSX inline style object.
