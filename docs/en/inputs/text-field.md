## *DateField* - inputs

Flexible date input with interactive calendar and multiple date masks. Supports timezone offsets.

### Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, TextArea} from '@f-ui/core';

function App() {
  const [state, setState] = useState('My current state')
  return (
    <ThemeProvider>
      <TextArea value={state} handleChange={s => setState(s)} required={true} width={'100%'}/>
    </ThemeProvider>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props

- ***helperText***: Helper text to be rendered below the input `string`.
- ***value***: Date string formatted on the _pattern_ prop, supports initial date parsing (any date format). `string`.
- ***label***: Input label `string`.
- ***placeholder***: Input placeholder `string`.
- ***required***: Renders alert below input if true `boolean`.
- ***handleChange***: Input onChange event object as param `function`.
- ***disabled***: `boolean`.
- ***size***: Input height `one of string`.
  - ***default***.
  - ***small***.
- ***width***: Fieldset css width. `string`.
- ***variant***:  Input variant `one of string`.
  - ***area***.
  - ***default***.
- ***mask***: Input mask (thanks to [react-imask](https://github.com/uNmAnNeR/imaskjs)) `string`.
- ***maxLength***: Input max value length `number`.
- ***noNumberIndicator***: Hides number icon/tooltip indicator `boolean`.
- ***maskStart***: Fixed mask to be rendered before input content `string`.
- ***maskEnd***: Fixed mask to be rendered after input content `string`.
- ***floatFilter***: Parses number input to float (adds comma for the two first digits) `boolean`.
- ***noMarin***: Reduces input margin `boolean`.
- ***colorVariant***: Input color variant `one of string`.
  - ***primary***.
  - ***secondary***.
