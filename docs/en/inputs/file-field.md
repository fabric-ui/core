[comment]: <> (## *Button* - inputs)

[comment]: <> (One of the most useful components, the _Button_ provides a single tap action.)

[comment]: <> (### Usage)

[comment]: <> (```jsx)

[comment]: <> (import React from 'react';)

[comment]: <> (import ReactDOM from 'react-dom';)

[comment]: <> (import {Fabric, Button} from '@f-ui/core';)

[comment]: <> (function App&#40;&#41; {)

[comment]: <> (  return &#40;)

[comment]: <> (    <Fabric>)

[comment]: <> (        <Button>)

[comment]: <> (          Children)

[comment]: <> (        </Button>)

[comment]: <> (    </Fabric>)

[comment]: <> (  &#41;;)

[comment]: <> (})

[comment]: <> (ReactDOM.render&#40;<App/>, document.querySelector&#40;'#app'&#41;&#41;;)

[comment]: <> (```)

[comment]: <> (### Props)

[comment]: <> (- ***disabled***: Disables button `boolean`.)

[comment]: <> (- ***highlight***: Highlight makes button fixed at _active_ state `boolean`.)

[comment]: <> (- ***onClick***: Function for the _onclick_ event `function`.)

[comment]: <> (- ***variant***: `one of string`:)

[comment]: <> (  - ***minimal***.)

[comment]: <> (  - ***filled***.)

[comment]: <> (  - ***outlined***.)

[comment]: <> (  - ***minimal-horizontal***.)

[comment]: <> (- ***color***: Color variant `one of string`:)

[comment]: <> (  - ***primary***.)

[comment]: <> (  - ***secondary***.)

[comment]: <> (- ***reference***: Element reference `ref object`.)

[comment]: <> (- ***className***: CSS class name `string`.)

[comment]: <> (- ***styles***: JSX inline style object `object`.)

[comment]: <> (- ***children***: `node`)
