function contar() {
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')
    //console.log({inicio, fim, passo})
    if (inicio == '' || fim == '' || passo == '') {
        res.innerHTML = 'Favor preencher todos os campos'
        return
    }

    if (passo == 0) {
        alert('Passo inválido, considerando Passo 1')
        passo = 1
    }

    res.innerHTML = ''
    if (Number(inicio) < Number(fim)) {
        for (var cont = Number(inicio); cont <= Number(fim); cont += Number(passo)) {
            res.innerHTML += `${cont} &#128151 `
        }
    } else {
        for (let cont = Number(inicio); cont >= Number(fim); cont -= Number(passo)) {
            res.innerHTML += `${cont} &#128151`
        }
    }
    res.innerHTML += '&#128525'
}