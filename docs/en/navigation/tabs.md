## *VerticalTabs* - navigation
### Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, VerticalTabs, Tab} from '@f-ui/core';

function App() {
  const [open, setOpen] = useState(0)
  return (
    <Fabric>
      <VerticalTabs open={open} setOpen={(currentTab) => setOpen(currentTab)}>
        <Tab label={'My first tab'}>
          Im on render
        </Tab>

        <Tab label={'My first tab in a group'} group={'First group'}>
          Some thing here
        </Tab>
        <Tab label={'My second tab in a group'} group={'First group'}>
          Hello
        </Tab>

        <Tab label={'My first tab in the second group'} group={'Second group'}>
          Also something
        </Tab>
      </VerticalTabs>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***open***: `number`.
- ***setOpen***: `function`.
- ***className***: `string`.
- ***styles***: Jsx style object `object`.
- ***children***: Instances of the Tab component (anything else will be ignored) `node`.



## *Tabs* - navigation
### Usage

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, Tabs, Tab} from '@f-ui/core';

function App() {
  const [open, setOpen] = useState(false)
  return (
    <Fabric>
      <Tabs open={open} setOpen={(currentTab) => setOpen(currentTab)}>
        <Tab label={'My first tab'}>
          Im on render
        </Tab>
        <Tab label={'My first tab'}>
          My second tab
        </Tab>
        <Tab label={'My first tab'} disabled={true}>
          Im disabled
        </Tab>
      </Tabs>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Props
- ***open***: `number`.
- ***setOpen***: `function`.
- ***className***: `string`.
- ***styles***: Jsx style object `object`.
- ***children***: Instances of the Tab component (anything else will be ignored) `node`.


## *Tab* - navigation
### Usage


```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Fabric, VerticalTabs, Tab} from '@f-ui/core';

function App() {
  const [open, setOpen] = useState(0)
  return (
    <Fabric>
      <VerticalTabs open={open} setOpen={(currentTab) => setOpen(currentTab)}>
        <Tab label={'My first tab in a group'} group={'First group'}>
          Some thing here
        </Tab>
      </VerticalTabs>
    </Fabric>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```


### Props
- ***disabled***: `boolean`.
- ***group***: Only available when used with the *VerticalTabs* component `string`.
- ***className***: Content wrapper className `string`.
- ***styles***: Jsx style object `object`.
- ***children***: `node`.
- ***label***: Option label `string`.
