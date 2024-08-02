function consultar() {
    let cep = document.getElementById('cep').value
    let result = document.getElementById('result')
    let nome = document.getElementById('nome').value

    if (cep === '') {
        alert('Por favor, digite um CEP.')
        return
    }
    if (nome === '') {
        alert('Por favor, digite o seu nome.')
        return
    }
    if (cep.length !== 8) {
        alert('CEP inválido!')
        return
    }

    let viaCep = `https://viacep.com.br/ws/${cep}/json/`

    fetch(viaCep)
    .then(function(res){
        res.json().then(function(dados){
            if (dados.erro) {
                result.innerHTML=`CEP não encontrado.`
            } else {
                result.innerHTML = `
                <p>Sr(a) ${nome}, o CEP ${dados.cep} pertence ao endereço:</p>
                <p>${dados.logradouro}, ${dados.bairro}, ${dados.localidade}-${dados.uf}</p>
                `
            }
        })
    })

}