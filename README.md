# JTE - JSON to Element

JTE is a lightweight JavaScript utility that converts JSON objects into DOM elements with built-in error handling and validations.

## Installation

Include the script in your HTML file:
```html
<script src="https://jte.mehfi.us/src/jte.js"></script>
```

## Usage

Create elements by passing a JSON object to the `jte` function:

```javascript
const element = jte({
    tag: 'div',
    class: 'container',
    innerhtml: '<p>Hello World</p>',
    onclick: () => alert('Clicked!')
});
```

### Supported Properties

- **tag**: The HTML tag name (required, must be a string)
- **innerhtml**: HTML content (should be a string)
- **textnode**: Text content (should be a string)
- **value**: Input value (special handling for different element types)
  - For `textarea`: Uses `appendChild`
  - For `input`/`select`: Uses `value` property
  - For other elements: Uses `setAttribute`
- **attributes**: Any valid HTML attribute
- **event handlers**: `onclick`, `onchange`, `onkeyup`, `onkeypress`, `oninput`, `onfocus`, `onblur` (should be functions)

### Error Handling

JTE provides comprehensive error handling and validation:
- Throws error if no JSON object is provided
- Throws error if `tag` property is missing or not a string
- Throws error if input is not a valid JSON object
- Warns if both `innerhtml` and `textnode` are provided
- Warns if `value` is used with inappropriate tags
- Warns if `innerhtml` or `textnode` are not strings
- Warns if event handlers are not functions
- Catches and reports errors during element creation

### Debug Mode

Enable debug mode to see additional logging:
```html
<script src="https://jte.mehfi.us/src/jte.js" dev="true"></script>
```

## Example Page

We've created a live example page demonstrating JTE's capabilities. You can:

1. View the live example at [https://mehfius.github.io/jte/](https://mehfius.github.io/jte/)
2. Explore the source code in the `docs` folder of this repository
3. See the example in action with:
   - Container creation
   - Button with click handler
   - Input field with keyup event
   - Proper DOM structure

To run locally:
1. Clone this repository
2. Open `docs/index.html` in your browser

## Example Code

```javascript
const input = jte({
    tag: 'input',
    type: 'text',
    value: 'teste'
});

document.body.appendChild(input);
```

## License

MIT 