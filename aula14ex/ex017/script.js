function tabuada() {
    var select = document.getElementById('res')
    var numero = document.getElementById('num').value

    if (numero == '') {
        alert('Favor preencher o número!')
        return
    }

    for (let index = 0; index <= 10; index++) {
        select.options[index] = new Option(`${numero} x ${index} = ${numero*index}`, 'nova opção')
    }
}