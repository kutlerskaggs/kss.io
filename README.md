## CSS
Styling in this app is broken into three parts:
* "classes" object in each component which is transpiled into CSS classes by babel-plugin-css-in-js
* "styles" object (or state.styles) in each component for dynamic styling that the plugin cannot handle
* a per component CSS file for any styling that cannot be handled in react currently (e.g. keyframes)

The classes/styles objects are scoped nicely to each component to prevent any conflicts between components, but the CSS file is not so we do our best to scope any class names.  Hopefully this file becomes unnecessary in the future.
