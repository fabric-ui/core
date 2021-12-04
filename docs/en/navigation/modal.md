## *Modal* - navigation

_Modal_ provides an easy way to create dialogs, popups and more.

### Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, Modal} from 'fabric-ui';

function App() {
  const [open, setOpen] = useState(false)
  return (
    <Fabric>
      <Modal open={open} handleClose={() => setOpen(false)} variant={'success'}>
        Modal content
      </Modal>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***wrapperClassName***: Modal wrapper className `string`.
- ***variant***: Dimension variant `one of string`.
  - ***fill***: Fill the screen.
  - ***fit***: Fit the content.
- ***animationStyle***: Animation variant `one of string`.
  - ***fade***.
  - ***slide-bottom***.
  - ***slide-right***.
  - ***slide-left***.
- ***className***: Content className `string`.
- ***blurIntensity***: Wrapper blur opacity (not visible on the ***fit*** variant) `number`.
- ***styles***: Jsx style object `object`.
- ***open***: Open state `boolean`.
- ***handleClose***: Triggered on content blur. `function`.
- ***children***: `node`.
