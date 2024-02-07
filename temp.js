let resposta = document.getElementById('resposta')

function resultado(){

    let celcius = Number (document.getElementById('celcius').value)

    fahrenheint = 0

    fahrenheint = (celcius * 9/5) + 32
    console.log(fahrenheint)

   // resposta.innerHTML('Está essa temperatura em fahrenheint: ' + fahrenheint)
}