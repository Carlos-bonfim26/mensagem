const mensageInput = document.getElementById('message-input');

function getMensagem(){
    document.getElementById('mensagem-output').innerHTML = mensageInput.value;
    mensageInput.value = "";
}