function ageVerify(){
    let age = document.getElementById("ageInput");
    let blurContent = document.getElementById("allCards");
    let cards = document.getElementById("allCards").getElementsByClassName("col-md-6");
    let alertMsg = document.getElementById("alert-show-box");
    age.addEventListener("input", () => {
        blurContent.style.filter = "none"
        if(age.value == "" || age.value < 1){
            blurContent.style.filter = "blur(50px)"
            cards[0].style.display = "block"
            cards[1].style.display = "block"
            alertMsg.innerHTML = `
            <div class="alert alert-warning mt-2" role="alert">
              Empty field and less than 1 value is not expected!
              <strong>
                Please enter valid input.
              </strong>
            </div>
            `
        }else if(age.value < 18){
            cards[0].style.display = "none"
            cards[1].style.display = "block"
            alertMsg.innerHTML = ""
        }else{
            cards[1].style.display = "none"
            cards[0].style.display = "block"
            alertMsg.innerHTML = ""
        }
        
    })
    
}
ageVerify()