## *CheckBox* - inputs
### Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, CheckBox} from 'fabric-ui-core';

function App() {
  const [checked, setChecked] = useState(false)
  return (
    <Fabric>
      <CheckBox label={'Checkbox'} handleCheck={state => setChecked(!state)} checked={checked}/>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***checked***: Check state `boolean`.
- ***handleCheck***: Passes checked prop as param `function`.
- ***label***: Text placed right after the input `string`.
- ***disabled***: `boolean`.



## *CheckBoxGroup* - inputs
### Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, CheckBox, CheckboxGroup} from 'fabric-ui-core';

function App() {
  const [checked, setChecked] = useState(null)
  return (
    <Fabric>
      <CheckboxGroup label={'My checkbox group'} value={checked} helperText={'HELP'}>
        <CheckBox label={'Checkbox'} handleCheck={state => setChecked(state ? null : 0)} checked={checked === 0}/>
        <CheckBox label={'Checkbox 1'} handleCheck={state => setChecked(state ? null : 1)} checked={checked === 1}/>
        <CheckBox label={'Checkbox 2'} handleCheck={state => setChecked(state ? null : 2)} checked={checked === 2}/>
        <CheckBox label={'Checkbox 3'} handleCheck={state => setChecked(state ? null : 3)} checked={checked === 3}/>
      </CheckboxGroup>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***helperText***: Helper text to be rendered below the input `string`.
- ***value***: State of the current checked checkbox, used for the _required_ alert `any`.
- ***children***: Checkboxes `node`.
- ***label***: Group fieldset legend `string`.
- ***required***: Renders alert below input if true `boolean`.
- ***width***: Fieldset css width. `string`.

