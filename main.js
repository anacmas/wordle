const quadradosDisplay = document.querySelector('.quadrados-container')
const tecladoDisplay = document.querySelector('.teclado-container')

const teclas = [
    'Q','W','E','R','T','Y','U','I','O','P',
    'A','S','D','F','G','H','J','K','L','ENTER',
    'Z','X','C','V','B','N','M','⌫'
]

const linhasAdivinhar = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
]

let linhaAtual = 0
let quadradoAtual = 0


linhasAdivinhar.forEach((linhaAdivinhar, linhaAdivinharIndex) => {
    const elementoLinha = document.createElement('div')
    elementoLinha.setAttribute('id', 'linhaAdivinhar-' + linhaAdivinharIndex)
    linhaAdivinhar.forEach((adivinhacao, adivinhacaoIndex) => {
        const quadradoElemento = document.createElement('div')
        quadradoElemento.setAttribute('id', 'linhaAdivinhar-' + linhaAdivinharIndex + '-quadrado-' + adivinhacaoIndex)
        quadradoElemento.classList.add('quadrado')
        elementoLinha.append(quadradoElemento)
    })
    quadradosDisplay.append(elementoLinha)
})


teclas.forEach(tecla => {
    const elementoBotao = document.createElement('button')
    elementoBotao.textContent = tecla
    elementoBotao.setAttribute('id', tecla)
    elementoBotao.addEventListener('click', () => handleClick(tecla))
    tecladoDisplay.append(elementoBotao)
})

const handleClick = (letra) => {
    console.log('clicked', letra)
    adicionaLetra(letra)
}

const adicionaLetra = (letra) => {
    const quadrado = document.getElementById('linhaAdivinhar-' + linhaAtual + '-quadrado-' + quadradoAtual)
    quadrado.textContent = letra
    linhasAdivinhar[linhaAtual]
    quadradoAtual++
}