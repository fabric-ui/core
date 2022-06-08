## *useFile* - hooks
The _useFile_ hook provides fast access to your local file content.

### Usage

```jsx
import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, useFile} from '@f-ui/core';

function App() {
  const file = useFile('./my-file.extension', false)

  if (file !== null)
    return (
      <div>
        File was read
      </div>
    )
  else
    return (
      <div>
        Some error occurred during reading
      </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Params

- File path `string`.
- as JSON `boolean`.
