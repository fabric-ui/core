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

### Documentation

- Some ui tweaks.
- Dropdown documentation.

### Bug fixes

Many bug fixes to various components, including:

- Dropdown fixed the styles prop and added the color prop.
- CodeBlock fixed Javascript code display issue.
- VerticalTabs fixed scrolling issue.

### New components

- ScrollStepper
- StepperWrapper

## Documentation and examples

### https://mfc-documentation-vercel.vercel.app/en

<b>Note: </b>The package documentation is currently <b>under development</b>, any questions can be made through <b>
github</b>.

## Available components and hooks

### Hooks

- <b>useCopyToClipboard</b>: Copy any text to the clipboard.
- <b>useFile</b>: Easy way to read the content from a local file.

### Feedback

- <b>Alert</b>: Alert wrapper, ideal for showing any notification.
- <b>ToolTip</b>: Tooltip that doesn't modify the parent layout and super easy to set up inside your system

### Inputs

[comment]: <> (<b>Selector</b>: List with selection intended usage with listing api)

- <b>Form</b>: Form with default layout, data validation and integration with all inputs from the package
- <b>FormRow</b>: Process block for the Form component, facilitates the navigation inside a big complex form.
- <b>DateField</b>: Date field with ability to parse data formats and many input patterns
- <b>SelectField</b>: Basic DropDown component
- <b>MultiSelectField</b>: Multi-select field, supports array or string divided with pattern.
- <b>TextField</b>: A basic text input, customizable with masks (Thanks
  to <a href='https://github.com/sanniassin/react-input-mask'>react-input-mask</a>), Adornments and more.
- <b>Button</b>: Basic button with many beautiful and clean design variants.
- <b>Checkbox</b>: Basic checkbox
- <b>CheckboxGroup</b>: Group your checkboxes in a wrapper with a clean layout with CheckboxGroup.
- <b>FileField</b>: File upload input, clean, beautiful and easy to use and setup. Manage your uploaded files with
  FileField component

### Navigation

- <b>ScrollStepper</b>: Replace scroll with vertical steps.
- <b>StepperWrapper</b>: Content wrapper for the ScrollStepper component.
- <b>Tab</b>: Wrapper for your components that will be rendered inside the Tabs or VerticalTabs component.
- <b>Tabs</b>: Beautiful tab system with enter and exit animations.
- <b>VerticalTabs</b>: Vertical tabs system with enter and exit animations.
- <b>Modal</b>: Animated modal window
- <b>RailActionButton</b>: Minimal dynamic button.

[comment]: <> (<b>RailContext</b>: Context for the current state of the NavigationBar &#40;extended or &#41; .)

- <b>NavigationRail</b>: Main vertical bar.
- <b>Dropdown</b>: A dropdown menu, with everything you would expect.
- <b>RailActionWrapper</b>.
- <b>Breadcrumbs</b>.
- <b>Switcher</b>: Animate enter and exit of content from the visible dom elements.

### Data display and visualization

[comment]: <> (<b>List</b>: List with infinite scroll intended for listing things from external data source &#40;e.g. an api&#41;)

- <b>HorizontalChart</b>: Horizontal bars chart (under development, some things may change)
- <b>LineChart</b>: Line chart (under development, some things may change)
- <b>PieChart</b>: Pie chart (under development, some things may change)
- <b>VerticalChart</b>: Vertical bars chart (under development, some things may change)
- <b>useInfiniteScroll</b>: Hook for infinite scroll.
- <b>useQuery</b>: Hook for utilization with List and Selector.
- <b>Article</b>: Write articles with a default layout.
- <b>CodeBlock</b>: Display your javascript or json code with syntax highlight.
-

### Misc

- <b>MfcWrapper</b>: Necessary to load correctly the icons, language and color.
- <b>Ripple</b>: Ripple effect activated with a mouse down event.

#### More components are on the way and quality of life improvements are always being made to improve the experience.

## Roadmap

Coming soon.
