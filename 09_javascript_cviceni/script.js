document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generate');
    console.log(button);
    button.addEventListener('click', generate);
});

const generate = () => {
    const name = document.getElementById('name').value;
    const type = document.querySelectorAll('input[name="tp"]:checked')[0];
    const out = document.getElementById('outputWrapper');
    //console.log(name.length);
    if (name === '') {
        out.innerText = 'Vypln jmeno!!!';
        return;
    }
    if (type.value === 'greet') {
        out.innerText = 'Ahoj ' + name + ', přeji hezký den!!';
    } else {
        out.innerText = name.value + ' jsi nejlepsi!!!';
    }
}