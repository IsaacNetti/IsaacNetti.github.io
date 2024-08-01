
let count = 2;

const quote = () =>{
    const currentQuote = document.querySelector(`#quotes :nth-child(${count})`);
    count++;
    
    let nextQuote = currentQuote.nextElementSibling;

    if(nextQuote == null){
        count = 2;
        nextQuote = document.querySelector(`#quotes :nth-child(${count})`);
    }

    currentQuote.classList.add("hide");
    nextQuote.classList.remove("hide");

};

const rainbow = () =>{
    let colors = []; 
    document.querySelectorAll("#colors > p").forEach((color) =>{
        colors.push(color);
    })
    let count = 0;
    const interval = setInterval(() => {
        colors[count].classList.remove("hide");
        count++;

        if (count >= colors.length){
            document.getElementById("pot").classList.remove("hide");
            clearInterval(interval);
        }
    }, 1000);
};

window.onload = () => {
    setInterval(quote, 2000);
    document.getElementById("display-rainbow").onclick = rainbow;
};