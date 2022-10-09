let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []



function isNumero(n) {
    // if (Number (n) == 0) {
    //     return true
    // }
    if (! Number(n)) {
        return false
    }
    return true
} 

function notInLista(v) {
    for (let index = 0; index < valores.length; index++) {
        if (valores[index]==v) {
            return false
        }
    }
    return true
}


function adicionar() {
    res.innerHTML = ''
    if (num == '' || Number(num.value) > 100 || Number(num.value) <= 0) {
        alert('Por favor preencha com um número válido!')
    return
    }
    if (isNumero(num.value) && notInLista(num.value)){
        lista.options[lista.options.length] = new Option(`Valor ${num.value} foi adicionado`, num.value)
        valores.push(Number(num.value))
        console.log(num.value)
    } 
    num.value = ''
    num.focus()
    
}

function analisar() {
    let media = 0
    let soma = 0
    let maior = 0 
    let menor = 0

    //Math.max(...valores)
    //Math.min(...valores)
    //const numbersList = [1, 2, 3];
    //const total = numbersList.reduce((total, currentElement) => total + currentElement)

    for (let index = 0; index < valores.length; index++) {
        const valorAtual = Number(valores[index])
        soma += valorAtual
       
        if (valorAtual > maior) {
            maior = valorAtual
        }
        
        if (menor == 0) {
            menor = valorAtual
        }

        if (valorAtual < menor) {
            menor = valorAtual
        }
    }

    media = soma / valores.length
    
    res.innerHTML = `Ao todo temos ${valores.length} números cadastrados.<br>` 
    res.innerHTML += `O maior valor informado foi ${maior}.<br>`
    res.innerHTML += `O menor valor informado foi ${menor}.<br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    res.innerHTML += `A média dos valores digitados é ${media}.<br>`
}





// function tabuada() {
//     var select = document.getElementById('res')
//     var numero = document.getElementById('num').value

//     if (numero == '') {
//         alert('Favor preencher o número!')
//         return
//     }

//     for (let index = 0; index <= 10; index++) {
//         select.options[index] = new Option(`${numero} x ${index} = ${numero*index}`, 'nova opção')
//     }
// }

// console.log(isNumero(''))
// console.log(isNumero('ok'))
// console.log(isNumero(0))

// console.log(!!'')
// console.log(!0);
// console.log(!!false);
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!NaN);

// console.log(!!true);
// console.log(!!'banana');
// console.log(!!5);