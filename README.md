## Installation

```sh
// with npm
npm i mfc-core

// with yarn
yarn add mfc-core
```

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'mfc-core';

function App() {
  return (
    <Button variant="filled" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

## Additional Dependencies

| Package            | Version | NPM                      | Github                                         |
|--------------------|---------|--------------------------|------------------------------------------------|
| axios              | ^0.24.0 | npm i axios              | https://github.com/axios/axios                 |
| react-input-mask   | ^2.0.4  | npm i react-input-mask   | https://github.com/sanniassin/react-input-mask |
| prop-types   | ^15.7.2  | npm i prop-types   | https://github.com/facebook/prop-types |

## Documentation and examples

#### https://mfc-documentation-vercel.vercel.app/en

The package documentation is currently <b>under development</b>, any questions can be made through <b>github</b>.

## Available components

### Feedback

<b>Alert</b>: Alert wrapper, ideal for showing any notification.<br>
<b>ToolTip</b>: Tooltip that doesn't modify the parent layout and super easy to set up inside your system<br>

### Inputs

<b>Selector</b>: List with selection intended usage with listing api<br>
<b>Form</b>: Form with default layout, data validation and integration with all inputs from the package<br>
<b>FormRow</b>: Process block for the Form component, facilitates the navigation inside a big complex form.<br>
<b>DateField</b>: Date field with ability to parse data formats and many input patterns<br>
<b>DropDownField</b>: Basic DropDown component<br>
<b>MultiSelectField</b>: Multi-select field, supports array or string divided with pattern.<br>
<b>TextField</b>: A basic text input, customizable with masks (Thanks to <a href='https://github.com/sanniassin/react-input-mask'>react-input-mask</a>), Adornments and more.<br>
<b>Button</b>: Basic button with many beautiful and clean design variants.<br>
<b>Checkbox</b>: Basic checkbox<br>
<b>CheckboxGroup</b>: Group your checkboxes in a wrapper with a clean layout with CheckboxGroup. <br>
<b>FileField</b>: File upload input, clean, beautiful and easy to use and setup. Manage your uploaded files with FileField component<br>

### Navigation

<b>Tab</b>: Wrapper for your components that will be rendered inside the Tabs or VerticalTabs component.<br>
<b>Tabs</b>: Beautiful tab system with enter and exit animations.<br>
<b>VerticalTabs</b>: Vertical tabs system with enter and exit animations.<br>
<b>Modal</b>: Animated modal window<br>
<b>Bar</b>: Navigation bar.<br>
<b>Breadcrumbs</b>: Breadcrumbs, yeah<br>
<b>Switcher</b>: Animate enter and exit of content from the visible dom elements.<br>
<b>BarAction</b>: Content wrapper for the Bar component<br>

### Data display and visualization

<b>List</b>: List with infinite scroll intended for listing things from external data source (e.g. an api)<br>
<b>HorizontalChart</b>: Horizontal bars chart (under development, some things may change)<br>
<b>LineChart</b>: Line chart (under development, some things may change)<br>
<b>PieChart</b>: Pie chart (under development, some things may change)<br>
<b>VerticalChart</b>: Vertical bars chart (under development, some things may change)<br>
<b>useInfiniteScroll</b>: Hook for infinite scroll. <br>
<b>useQuery</b>: Hook for utilization with List and Selector. <br>
<b>Article</b>: Write articles with a default layout. <br>
<b>CodeBlock</b>: Display your javascript or json code with syntax highlight. <br>

#### More components are on the way and quality of life improvements are always being made to improve the experience.

### Misc

<b>ThemeProvider</b>: Wrapper intended to set up a default color pallet across all components from this package. <br>
<b>Ripple</b>: Ripple effect activated with a mouse down event. <br>

## Changelog

Coming soon.

## Roadmap

Coming soon.
