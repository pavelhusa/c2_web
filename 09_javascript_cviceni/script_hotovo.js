document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generate');
    button.addEventListener('click', generate);

});
const generate = (e) => {
    //e.preventDefault();
    const name = document.getElementById('name').value;
    const type = document.querySelectorAll('input[name="tp"]:checked');
    const out = document.getElementById('outputWrapper');
    if (name === '') {
        out.innerText = 'Vypln jmeno!!!';
        return;
    }
    console.log(type[0]);
    if (type[0].value === 'motivate') {
        out.innerText = name + ' jsi nejlepší!!';
    } else {
        out.innerText = 'Ahoj ' + name + ', přeji hezký den!!';
    }
}