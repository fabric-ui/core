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

<img src="https://i.kym-cdn.com/entries/icons/original/000/035/451/Woo_Yeah_Baby_.png" alt="Yeah baby"/>

#### The new Charts are here, starting with the line-chart variant.

### Documentation

- Documentation for the **NavigationRail** component available.
- Basic documentation for the **Chart** component available.

### Bug fixes

- ScrollStepper: Added IntersectionObserver to allow for custom (from outside the component) scroll options.
- Tabs and VerticalTabs: Now receives the "open" state as prop

### New components / Reworks

- All Chart variants now will be included within a single component, **Chart**.
- Chart component now supports the _line-chart_ variant.
- Tooltip added to the _line-chart_.
- Grid added to the Chart component.
- useDimensions hook will now adapt the canvas dimensions for the parent element width and height changes, this will
  allow for a more flexible experience with the **Chart** component.

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

- **HorizontalChart**: Horizontal bars chart _**[removed]**_
- **LineChart**: Line chart _**[removed]**_
- **PieChart**: Pie chart  _**[removed]**_
- **VerticalChart**: Vertical bars chart  _**[removed]**_
- **Chart**: Chart component is an easy way to display your data set.
- **useInfiniteScroll**: Hook for infinite scroll.
- **useQuery**: Hook for utilization with List and Selector.
- **Article**: Write articles with a default layout.
- **CodeBlock**: Display your javascript or json code with syntax highlight.
-

### Misc

- **MfcWrapper**: Necessary to load correctly the icons, language and color.
- **Ripple**: Ripple effect activated with a mouse down event.

#### More components are on the way and quality of life improvements are always being made to improve the experience.

## Roadmap

Coming soon.
