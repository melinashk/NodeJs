Create a class in which you specify your web component functionality, using the class syntax.
Register your new custom element using the <b>CustomElementRegistry.define()</b> method, passing it the element name to be defined, the class or function in which its functionality is specified, and optionally, what element it inherits from.
If required, attach a shadow DOM to the custom element using Element.attachShadow() method. Add child elements, event listeners, etc., to the shadow DOM using regular DOM methods.
If required, define an HTML template using '<template>' and '<slot>'. Again use regular DOM methods to clone the template and attach it to your shadow DOM.
Use your custom element wherever you like on your page, just like you would any regular HTML element.



There are 2 types of custom elements

1. Autonomous custom elements are standalone — they don't inherit from standard HTML elements. You use these on a page by literally writing them out as an HTML element. For example <popup-info>, or

Customized built-in elements inherit from basic HTML elements. To create one of these, you have to specify which element they extend (as implied in the examples above), and they are used by writing out the basic element but specifying the name of the custom element in the is attribute (or property). For example <p is="word-count">, or document.createElement("p", { is: "word-count" }).