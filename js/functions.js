
const regexLower = new RegExp('[a-z]*');;

const vowels = ['a', 'e', 'i', 'o', 'u'];

function encrypt() {
    let text = document.getElementById('inputText').value;
    console.log(text.match(regexLower));

    document.getElementById('result').value = encryptFunction(text);
}

function encryptFunction(text) {
    let test_split = text.split('');
    let result = '';
    for (const letter of test_split) {
        switch (letter) {
            case 'a':
                result += 'ai';
                break;
            case 'e':
                result += 'enter';
                break;
            case 'i':
                result += 'imes';
                break;
            case 'o':
                result += 'ober';
                break;
            case 'u':
                result += 'ufat';
                break;
            default:
                result += letter;
                break;
        }
    }
    return result;
}


function decrypt() {
    test = document.getElementById('inputText').value;
    test = test.replaceAll('ai', 'a');
    test = test.replaceAll('enter', 'e');
    test = test.replaceAll('imes', 'i');
    test = test.replaceAll('ober', 'o');
    test = test.replaceAll('ufat', 'u');
    document.getElementById('result').value = test;
    return test;
}


function copy() {
    const result = document.getElementById('result').value;
    if (result) {
        const textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.value = result;
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('El texto fue copiado.')
    }

}

function arrayResult(){
    let arreglo =['', ''];
    let contador = 0;
    while (contador < 5) {
        arreglo[0]+='*';
        contador++;
    }
    while (contador > 0) {
        arreglo[1] += '+';
        contador--;
    }
    return arreglo;
}

console.log(arrayResult());;