## *DateField* - inputs

Flexible date input with interactive calendar and multiple date masks. Supports timezone offsets.

### Usage
```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, DateField} from 'fabric-ui-core';

function App() {
    const [state, setState] = useState('09/03/2021')
  return (
    <Fabric>
        <DateField hoursOffset={3} value={state} handleChange={s => setState(s)} required={true} pattern={'dd/mm/yyyy'} width={'100%'}/>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***hoursOffset***: Timezone hours offset for initial date parsing `number`.
- ***helperText***: Helper text to be rendered below the input `string`.
- ***value***: Date string formatted on the _pattern_ prop, supports initial date parsing (any date format). `string`.
- ***label***: Input label `string`.
- ***required***: Renders alert below input if true `boolean`.
- ***handleChange***: Date string as param is sent to the prop method (formatted on the _pattern_ prop pattern) `function`.
- ***disabled***: `boolean`.
- ***size***: Input height `one of string`.
  - ***default***.
  - ***small***.
- ***pattern***: Date pattern `one of string`
  - ***yyyy-mm-dd***.
  - ***yyyy/mm/dd***.
  - ***yyyy-dd-mm***.
  - ***yyyy/dd/mm***.
  - ***mm/dd/yyyy***.
  - ***mm-dd-yyyy***.
  - ***dd/mm/yyyy***.
  - ***dd-mm-yyyy***.
- ***width***: Fieldset css width. `string`.




