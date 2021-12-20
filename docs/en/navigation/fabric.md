## *Fabric* - navigation

_Fabric_ component provides support for localization, theme switching and material icons, it is the basis for every other component to work correctly.

### Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {Fabric, Button} from 'fabric-ui-core';

function App() {
  return (
    <Fabric>
        {/*Your fabric-ui-core components here*/}
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```
**Note**: The default localization is _portuguese_ and the default theme is the _light_ one.

### Props
The component receives four different props, being those:
- ***language***: Language variant `one of string`:
  - ***en***.
  - ***pt***.
- ***theme***: Theme variant `one of string`:
  - ***dark***.
  - ***light***.

This component places the children inside a _\<div\>_ element, in order to customize it you can pass the following props:
- ***className***: CSS class name `string`.
- ***styles***: JSX inline style object `object`.
