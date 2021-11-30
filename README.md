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

### Things are evolving

- ***Chart*** are becoming a standalone package coming soon with more variants and adjustments.
- ***CodeBlock*** and ***Article*** are being scrapped and a new package (also coming soon) is coming to replace those utilities.

### Bug fixes

- ***DateField***: Added prop *hoursOffset* as a fix for the timezone offset.

## Documentation and examples

### https://mfc-documentation-vercel.vercel.app/en

**Note**:The package documentation is currently **under development**, any questions can be made through **github**.

## Available components and hooks

### Hooks

- **useCopyToClipboard**: Copy any text to the clipboard.
- **useFile**: Easy way to read the content from a local file.

### Feedback

- **Alert**: Alert wrapper, ideal for showing any notification.
- **ToolTip**: Tooltip that doesn't modify the parent layout and super easy to set up inside your system

### Inputs

[comment]: <> (**Selector**: List with selection intended usage with listing api)

- **Form**: Form with default layout, data validation and integration with all inputs from the package
- **FormRow**: Process block for the Form component, facilitates the navigation inside a big complex form.
- **DateField**: Date field with ability to parse data formats and many input patterns
- **SelectField**: Basic DropDown component
- **MultiSelectField**: Multi-select field, supports array or string divided with pattern.
- **TextField**: A basic text input, customizable with masks (Thanks
  to <a href='https://github.com/sanniassin/react-input-mask'>react-input-mask</a>), Adornments and more.
- **Button**: Basic button with many beautiful and clean design variants.
- **Checkbox**: Basic checkbox
- **CheckboxGroup**: Group your checkboxes in a wrapper with a clean layout with CheckboxGroup.
- **FileField**: File upload input, clean, beautiful and easy to use and setup. Manage your uploaded files with
  FileField component

### Navigation

- **ScrollStepper**: Replace scroll with vertical steps.
- **StepperWrapper**: Content wrapper for the ScrollStepper component.
- **Tab**: Wrapper for your components that will be rendered inside the Tabs or VerticalTabs component.
- **Tabs**: Beautiful tab system with enter and exit animations.
- **VerticalTabs**: Vertical tabs system with enter and exit animations.
- **Modal**: Animated modal window
- **RailActionButton**: Minimal dynamic button.

[comment]: <> (**RailContext**: Context for the current state of the NavigationBar &#40;extended or &#41; .)

- **NavigationRail**: Main vertical bar.
- **Dropdown**: A dropdown menu, with everything you would expect.
- **RailActionWrapper**.
- **Breadcrumbs**.
- **Switcher**: Animate enter and exit of content from the visible dom elements.

### Data display and visualization

[comment]: <> (**List**: List with infinite scroll intended for listing things from external data source &#40;e.g. an api&#41;)

- **useInfiniteScroll**: Hook for infinite scroll.
- **useQuery**: Hook for utilization with List and Selector.

### Misc

- **MfcWrapper**: Necessary to load correctly the icons, language and color.
- **Ripple**: Ripple effect activated with a mouse down event.

#### More components are on the way and quality of life improvements are always being made to improve the experience.

## Roadmap

Coming soon.
