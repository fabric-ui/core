## *Alert* - feedback

The _Alert_ component provides a fast and visually intuitive way to inform your user of something.
### Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, Alert} from 'fabric-ui';

function App() {
  const [open, setOpen] = useState(false)
  return (
    <Fabric>
      <Alert open={open} handleClose={() => setOpen(false)} variant={'success'}>
        Your message
      </Alert>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***variant***: Visual variant `one of string`.
  - ***success***.
  - ***alert***.
  - ***error***.
  - ***info***.
- ***open***: Boolean to start the delay countdown `boolean`.
- ***onClick***: Function triggered on click of the content inside the alert modal `function`.
- ***handleClose***: Function triggered at `delay` timestamp end or on click of the close button `function`.
- ***delay***: Timestamp for the alert modal to close `number in milliseconds`.
- ***children***: Any child node `node`.
