let titulo = document.getElementById('titulo');
console.log (typeof titulo);
console.log(titulo.innerHTML);

function verificarInput() {
    let input = document.getElementById('nome').value;
    console.log(input);
    if(nome.value.length <5){
        nome.classNome = 'erro';
    }
}