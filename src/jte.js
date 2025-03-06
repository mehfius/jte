function jte(json) {
    // Get the script that loaded jte.js
    const scripts = document.getElementsByTagName('script');
    const currentScript = Array.from(scripts).find(script => 
        script.src.includes('jte.js')
    );
    
    // Debug logging if dev="true"
    if (currentScript && currentScript.getAttribute('dev') === 'true') {
        console.log(
            '%c %c JTE Debug \n' + 
            'Element: ' + JSON.stringify(json, null, 2) + 
            ' %c ',
            'background: red; padding: 5px 0;',
            'background: red; color: white; padding: 5px 0;',
            'background: red; padding: 5px 0;'
        );
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