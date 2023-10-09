let Add = document.getElementById("increase")

let Subtract = document.getElementById("decrease")

let Reset = document.getElementById("reset")

let Counter = document.querySelector("h2")

function starter() {
    Counter.textContent = Math.floor(Math.random()*10)
}

Add.addEventListener("click",addTo)

Subtract.addEventListener("click", subtractFrom)

Reset.addEventListener("click", resetTo)

function addTo() {
    
    // Get the current text content and convert it to a number
    let Value = parseInt(Counter.textContent);
    
    // Increment the value by 1
    Value++;
    
    // Update the text content with the new value
    Counter.textContent = Value;

 
}

function subtractFrom() {
    
    // Get the current text content and convert it to a number
    let Value = parseInt(Counter.textContent);
    
    // Increment the value by 1
    Value--;
    
    // Update the text content with the new value
    Counter.textContent = Value;

}

function resetTo() {
    
  
    Counter.textContent = 0;

}
