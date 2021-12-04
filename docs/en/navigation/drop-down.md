## *Dropdown* - navigation

The _Dropdown_ component allows you to show more options without changing your app layout.

### Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {Fabric, Dropdown} from 'fabric-ui';

function App() {

  return (
    <Fabric>
        <Dropdown options={[{label: 'My first option', onClick: (e) => alert(e)}]}>
          Children
        </Dropdown>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***disabled***: Disables button `boolean`.
- ***highlight***: Highlight makes button fixed at _active_ state `boolean`.
- ***onClick***: `function`.
- ***variant***: `one of string`
  - ***minimal***.
  - ***filled***.
  - ***outlined***.
  - ***minimal-horizontal***.
- ***color***: Color variant `one of string`
  - ***primary***.
  - ***secondary***.
- ***reference***: Element reference `ref object`.
- ***className***: CSS class name `string`.
- ***styles***: JSX inline style object `object`.
- ***children***: `node`
- ***options***: `array of object`
  - ***label***: `node`.
  - ***icon***: `node`.
  - ***onClick***: `function`.
  - ***disabled***: `boolean`.
  - ***onClickEvent***: Props to be sent to the clicked option `any`.
- ***align***: Vertical alignment relative to parent button `one of string`
  - ***top***.
  - ***middle***.
  - ***bottom***.
- ***justify***: Horizontal justification relative to parent button `one of string`
  - ***start***.
  - ***middle***.
  - ***end***.

