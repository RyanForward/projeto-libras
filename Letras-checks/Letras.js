let score = 0
function mostraScore(){
        alert(`O seu score atual é:  ${score}`)
}
function funcao(letra1, letra2){
        let letra = prompt ("Digite qual letra é essa: ")
        if (letra == letra1 || letra == letra2){
                score += 1
                alert(' Resposta certa! \n Seu score é: ' + score)
                }

        else{
                if(score > 0){
                        score -= 1
                }
                else{
                        score = 0
                }
                alert("Resposta Errada! Essa é a letra " + letra1 + '\nSeu score é: ' + score)
                }
}
