The _MfcWrapper_ component provides support for localization, theme switching and material icons, it is the basis for every other component to work

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {MfcWrapper, Button} from 'mfc-core';

function App() {
  return (
    <MfcWrapper>
        {/*Your mfc-core components here*/}
    </MfcWrapper>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```
**Note**: The default localization is _portuguese_ and the default theme is the _light_ one.

## Props
The component receives four different props, being those:
- ***language***: Support by now two languages, _portuguese_ and _english_, this prop receives one of the following:
  - ***en***: English
  - ***pt***: Portuguese
- ***onDark***: Receives a boolean:
  - ***true***: Dark theme.
  - ***false***: Light theme.

This component places the children inside a _\<div\>_ element, in order to customize it you can pass the following props:
- ***className***: CSS class name.
- ***styles***: JSX inline style object.
