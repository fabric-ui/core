## Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, Ripple} from 'fabric-ui';

function App() {
  return (
    <Fabric>
      <button>
        <Ripple/>
        My button with ripple effect
      </button>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

## Props
- ***disabled***: Prevents trigger on parent click `boolean`.
- ***accentColor***: `string`.
- ***opacity***: Ripple opacity `number`.
