const allInputs = document.querySelectorAll(".allInputs")
const btnEnviar = document.getElementsByClassName("btn")
const obrigatorio = document.querySelectorAll(".obrigatorio")

btnEnviar[0].addEventListener("click", () => {

    allInputs.forEach((input, index) => {

        if (input.value) {
            allInputs[index].classList.add("obrigatorio-ok")
            allInputs[index].classList.remove("obrigatorio-n")
            obrigatorio[index].classList.add("texto-desaparecer")

        } else {
            allInputs[index].classList.remove("obrigatorio-ok")
            allInputs[index].classList.add("obrigatorio-n")
            obrigatorio[index].classList.add("no-text")
            obrigatorio[index].classList.remove("texto-desaparecer")
        }
    })
})
