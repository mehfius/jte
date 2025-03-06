function jte(json) {
    // Get the current script element using the recommended method
    const currentScript = document.currentScript;
    
    // Debug logging if dev="true"
    if (currentScript && currentScript.getAttribute('dev') === 'true') {
        console.log('%cElement: ' + json.name,'background: grey; padding: 0 5px 0 5px;');
    }

    const field = document.createElement(json.tag);
    const specialHandlers = ['innerhtml', 'tag', 'textnode', 'value'];
    const eventHandlers = ['onclick', 'onchange', 'onkeyup', 'onkeypress', 'oninput', 'onfocus', 'onblur'];

    Object.entries(json).forEach(([key, value]) => {
        if (key === 'innerhtml') {
            field.innerHTML = value;
        } else if (key === 'textnode') {
            field.appendChild(document.createTextNode(value));
        } else if (key === 'value' && json.tag === 'textarea') {
            field.appendChild(document.createTextNode(value));
        } else if (eventHandlers.includes(key)) {
            field[key] = value;
        } else if (!specialHandlers.includes(key)) {
            field.setAttribute(key, value);
        }
    });

    return field;
}