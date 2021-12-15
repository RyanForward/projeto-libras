let score = 0

function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

function mostraScore(){
        alert(`O seu score atual é:  ${score}`)
}

function funcao(letra1, letra2){
        let letra = prompt ("digite qual letra é essa:")
        if (letra == letra1 || letra == letra2){
                alert("Resposta certa")
                score += getRandomInt(1, 10)
                }
    
        else{
                alert("Resposta Errada! Essa é a letra " + letra1)
                score -= getRandomInt(2, 8)
                }
        mostraScore()
}