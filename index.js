const rateCard = document.querySelector(".card_wrap1")
    const resultCard = document.querySelector(".card_wrap2")
    const pass = document.querySelector(".btn")
    const rateBtm = document.querySelectorAll(".rate")
    const element = document.querySelector(".rateValue")

    pass.addEventListener("click", () => {
       
      if (resultCard.classList.contains("hidden")){
        resultCard.classList.remove("hidden")
        rateCard.classList.add("hide_wrap")

      }else{
        resultCard.classList.add("hidden")
        rateCard.classList.remove("hide_wrap")
      }
    })

    rateBtm.forEach((el) => {
      el.addEventListener("click", () =>{
        element.innerHTML = el.innerHTML
      })
    })


    resultCard.addEventListener("click", () => {
      rateCard.classList.remove("hide_wrap")
      resultCard.classList.add("hidden")
    })
    
