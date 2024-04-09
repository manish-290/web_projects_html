const textAreaEl= document.getElementById("textarea")

let totalCounterEl=document.getElementById("total-counter")

let RemainingEl = document.getElementById("remaining-counter")


textAreaEl.addEventListener("keyup",()=>{
    updateCounter()
})

function updateCounter(){
    totalCounterEl.innerText= textAreaEl.value.length
}
textAreaEl.addEventListener("keyup",()=>{
    decreaseCounter()
})

function decreaseCounter(){
   RemainingEl.innerText = textAreaEl.getAttribute("maxLength") -
   textAreaEl.value.length
}

