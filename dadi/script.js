const button = document.getElementById('button')
const playerScore = document.getElementById('p-result')
const cpuScore = document.getElementById('cpu-result')
const finalResult = document.getElementById('risultatofinale')





button.addEventListener('click',function(){
    let numberP = Math.floor(Math.random()*6)+1
    console.log('Il tuo numero è : ' + numberP)
    playerScore.innerHTML = numberP
    let numberCPU = Math.floor(Math.random()*6)+1
    console.log('Il numero del computer è : ' + numberCPU)
    cpuScore.innerHTML = numberCPU
    if (numberP < numberCPU){
        console.log("Hai perso, tenta un'altra volta")
        finalResult.innerHTML = "Hai perso, tenta un'altra volta"
        finalResult.classList.add('red')
        finalResult.classList.remove('green')
        finalResult.classList.remove('yellow')
    }
    else if (numberP > numberCPU){
        console.log('Hai vinto!!!')
        finalResult.innerHTML = 'Hai vinto!!!'
        finalResult.classList.add('green')
        finalResult.classList.remove('red')
        finalResult.classList.remove('yellow')
    }
    else{
        console.log('è un pareggio...')
        finalResult.innerHTML = 'è un pareggio...'
        finalResult.classList.add('yellow')
        finalResult.classList.remove('green')
        finalResult.classList.remove('red')
    }
})

li.classList.add('box')