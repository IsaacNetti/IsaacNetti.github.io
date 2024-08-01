/* Isaac Netti CSCE242 */
const run = () =>{
    let count = 0;
    var step = 0;
    const interval = setInterval(() => {

        document.getElementById("step1").classList.toggle("hide");
        document.getElementById("step2").classList.toggle("hide");

        step += 10;

        document.getElementById("step1").style.setProperty("--step", step + "px");
        document.getElementById("step2").style.setProperty("--step", step + "px");

        count++;
        if (count >=40){
            clearInterval(interval);
            step = 0;
            document.getElementById("step1").style.setProperty("--step", step + "px");
            document.getElementById("step2").style.setProperty("--step", step + "px");
        }
    }, 300)
}

const setFunds = () =>{
    let step = 0;
    const amountRaised = document.getElementById("num-funds-raised").value;

    if(amountRaised >=0 && amountRaised <= 10000){
        const percent = (amountRaised/10000) * 100;
        const interval = setInterval(() => {
            document.getElementById("rectangle").style.setProperty("--gradient", step + "%");

            step++;

            if (step > percent){
                clearInterval(interval);
            }

        },50)
    }
    else{
        alert("Invalid number")
    }
}


window.onload = () =>{
    document.getElementById("step1").onclick = run;
    document.getElementById("display-funds").onclick = setFunds;
}
