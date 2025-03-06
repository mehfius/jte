
function json_to_element(json) {

    var field = document.createElement(json.tag);

    Object.entries(json).forEach(([key, value]) => {

        switch (key) {
            case 'innerhtml': field.innerHTML = json.innerhtml; break;
            case 'tag': break;
            case 'textnode': field.appendChild(document.createTextNode(json.textnode)); break;
            case 'pattern': field.setAttribute(key, value); break;
            case 'value':
                if (json.tag === 'textarea') {
                    field.appendChild(document.createTextNode(json.value));
                } else {
                    field.setAttribute("value", json.value);
                }
                break;
            case 'onclick': field.onclick = value; break;
            case 'onchange': field.onchange = value; break;
            case 'onkeyup': field.onkeyup = value; break;
            case 'onkeypress': field.onkeypress = value; break;
            case 'onclickold': field.setAttribute('onclick', value); break;
            default: field.setAttribute(key, value);
        }

    })

    return field;

}