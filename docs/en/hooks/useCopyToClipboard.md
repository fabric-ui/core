## Usage

```jsx
import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, Button, useCopyToClipboard} from 'fabric-ui';

function App() {
  const ref = useRef()
  const copy = useCopyToClipboard()
  const copyWithRef = useCopyToClipboard(ref.current)

  return (
    <Fabric>
      <div ref={ref}>
        Sample text
      </div>
      <Button onClick={() => copy('Some text to be copied')}>
        Copy text
      </Button>
      <Button onClick={() => copyWithRef()}>
        Copy inner text from ref
      </Button>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

## Params
- Element reference (Lower priority) `element`.

## Copy method params

- String value to be copied (Higher priority) `string`.

