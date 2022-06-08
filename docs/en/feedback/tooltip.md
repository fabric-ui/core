## *Tooltip* - feedback

_Tooltip_ component doesn't change your app layout and can be used to provide more information.

### Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, Tooltip, Button} from '@f-ui/core';

function App() {

  return (
    <ThemeProvider>
      <Button>
        <Tooltip content={'Or here as string'}>
          Your message here
        </Tooltip>
        Hover me to show tooltip
      </Button>
    </ThemeProvider>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
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
