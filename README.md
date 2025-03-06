# JTE - JSON to Element

JTE is a lightweight JavaScript utility that converts JSON objects into DOM elements.

## Installation

Include the script in your HTML file:
```html
<script src="src/jte.js"></script>
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

- **tag**: The HTML tag name (required)
- **innerhtml**: HTML content
- **textnode**: Text content
- **value**: Input value (special handling for textarea)
- **attributes**: Any valid HTML attribute
- **event handlers**: `onclick`, `onchange`, `onkeyup`, `onkeypress`, `oninput`, `onfocus`, `onblur`

## Example

```javascript
const button = jte({
    tag: 'button',
    class: 'btn-primary',
    textnode: 'Click Me',
    onclick: () => console.log('Button clicked!')
});

document.body.appendChild(button);
```

## License

MIT 