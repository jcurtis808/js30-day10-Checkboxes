let inputs = document.querySelectorAll('input');

const lastIndex = (arr) => {
    let index = -1;
    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i].checked === true) return i;
    }
    return -1;
}

function handleCheck(e) {
    if(!e.shiftKey) return;
    let inputs2 = Array.from(inputs);
    let first = inputs2.findIndex(input => input.checked);
    let last = lastIndex(inputs2);
    inputs2.filter((input, i) => {
        if(i >= first && i <= last)
        return input;
    }).forEach(input => input.checked = true);
}



inputs.forEach(input => input.addEventListener('click', handleCheck));