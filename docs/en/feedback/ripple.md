## *Ripple* - feedback
_Ripple_ components gives you an easy way to give the user a nice visual feedback for a click interaction.
### Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, Ripple} from '@f-ui/core';

function App() {
  return (
    <ThemeProvider>
      <button>
        <Ripple/>
        My button with ripple effect
      </button>
    </ThemeProvider>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***disabled***: Prevents trigger on parent click `boolean`.
- ***accentColor***: `string`.
- ***opacity***: Ripple opacity `number`.
