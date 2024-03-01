function Encrypt() {
    let textoDigitado = document.querySelector('.start__texto').value;

    let text__Encrypt = textoDigitado
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "obter")
        .replace(/u/g, "ufat");

    let textareaResultado = document.querySelector('.resultado__challenge');
    textareaResultado.value = text__Encrypt;

    document.querySelector('.resultado__final').style.display = 'block';
    
    document.querySelector('.resultado__mensage').style.display = 'none';
    ClearTextArea();
}

function Decrypt() {
    let textoDigitado = document.querySelector('.start__texto').value;

    let texto__Decrypt = textoDigitado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/obter/g, "o")
        .replace(/ufat/g, "u");

    let textareaResultado = document.querySelector('.resultado__challenge');
    textareaResultado.value = texto__Decrypt; 

    document.querySelector('.resultado__final').style.display = 'block';
    document.querySelector('.resultado__mensage').style.display = 'none'; 
    ClearTextArea();  
}

function copyText() {
    let textareaResultado = document.querySelector('.resultado__challenge');

    textareaResultado.select();

    document.execCommand('copy');
    alert("Texto copiado para a área de transferência!");
    ClearTextResult();
    
}

document.querySelector('.resultado__copy').addEventListener('click', copyText);

function ClearTextArea() {
    document.querySelector(".start__texto").value = '';
}

function ClearTextResult() {
    document.querySelector(".resultado__challenge").value = '';
}