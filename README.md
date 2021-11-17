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
import {MfcWrapper, Button} from 'mfc-core';

function App() {
  return (
    <MfcWrapper language={'en'}>
      <Button variant="filled" color="primary">
        Hello World
      </Button>
    </MfcWrapper>
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

## News

### Locales

<b>English</b> and <b>Portuguese</b> are now being supported

### Bug fixes

Many bug fixes to various components, including:

- DateField
- FeedCard
- Feed

and more.

### New components

- NavigationRail
- RailActionButton
- RailActionWrapper
- Dropdown
- SelectField (old DropDownField)

## Documentation and examples

### https://mfc-documentation-vercel.vercel.app/en

<b>Note: </b>The package documentation is currently <b>under development</b>, any questions can be made through <b>
github</b>.

## Available components and hooks

### Hooks

- <b>useCopyToClipboard</b>: Copy any text to the clipboard.<br>
- <b>useFile</b>: Easy way to read the content from a local file.<br>

### Feedback

- <b>Alert</b>: Alert wrapper, ideal for showing any notification.<br>
- <b>ToolTip</b>: Tooltip that doesn't modify the parent layout and super easy to set up inside your system<br>

### Inputs

[comment]: <> (<b>Selector</b>: List with selection intended usage with listing api<br>)

- <b>Form</b>: Form with default layout, data validation and integration with all inputs from the package<br>
- <b>FormRow</b>: Process block for the Form component, facilitates the navigation inside a big complex form.<br>
- <b>DateField</b>: Date field with ability to parse data formats and many input patterns<br>
- <b>SelectField</b>: Basic DropDown component<br>
- <b>MultiSelectField</b>: Multi-select field, supports array or string divided with pattern.<br>
- <b>TextField</b>: A basic text input, customizable with masks (Thanks
  to <a href='https://github.com/sanniassin/react-input-mask'>react-input-mask</a>), Adornments and more.<br>
- <b>Button</b>: Basic button with many beautiful and clean design variants.<br>
- <b>Checkbox</b>: Basic checkbox<br>
- <b>CheckboxGroup</b>: Group your checkboxes in a wrapper with a clean layout with CheckboxGroup. <br>
- <b>FileField</b>: File upload input, clean, beautiful and easy to use and setup. Manage your uploaded files with
  FileField component<br>

### Navigation

- <b>Tab</b>: Wrapper for your components that will be rendered inside the Tabs or VerticalTabs component.<br>
- <b>Tabs</b>: Beautiful tab system with enter and exit animations.<br>
- <b>VerticalTabs</b>: Vertical tabs system with enter and exit animations.<br>
- <b>Modal</b>: Animated modal window<br>
- <b>RailActionButton</b>: Minimal dynamic button.<br>

[comment]: <> (<b>RailContext</b>: Context for the current state of the NavigationBar &#40;extended or &#41; .<br>)

- <b>NavigationRail</b>: Main vertical bar.<br>
- <b>Dropdown</b>: More options, less occupied space.<br>
- <b>RailActionWrapper</b>.<br>
- <b>Breadcrumbs</b>.<br>
- <b>Switcher</b>: Animate enter and exit of content from the visible dom elements.<br>

### Data display and visualization

[comment]: <> (<b>List</b>: List with infinite scroll intended for listing things from external data source &#40;e.g. an api&#41;<br>)

- <b>HorizontalChart</b>: Horizontal bars chart (under development, some things may change)<br>
- <b>LineChart</b>: Line chart (under development, some things may change)<br>
- <b>PieChart</b>: Pie chart (under development, some things may change)<br>
- <b>VerticalChart</b>: Vertical bars chart (under development, some things may change)<br>
- <b>useInfiniteScroll</b>: Hook for infinite scroll. <br>
- <b>useQuery</b>: Hook for utilization with List and Selector. <br>
- <b>Article</b>: Write articles with a default layout. <br>
- <b>CodeBlock</b>: Display your javascript or json code with syntax highlight. <br>
-

### Misc

- <b>MfcWrapper</b>: Necessary to load correctly the icons, language and color.<br>
- <b>Ripple</b>: Ripple effect activated with a mouse down event. <br>

#### More components are on the way and quality of life improvements are always being made to improve the experience.

## Roadmap

Coming soon.
