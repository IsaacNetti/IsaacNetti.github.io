/* Isaac Netti CSCE242 */

const dance = () => {
    document.getElementById("dance-lad").classList.add("dance")
}

const hide = () =>{
    document.getElementById("innocent-goose").classList.add("hide")
}

const show = () =>{
    document.getElementById("innocent-goose").classList.remove("hide")
}

window.onload = () =>{
    document.getElementById("button-hide").onclick = hide;
    document.getElementById("button-show").onclick = show;
    document.getElementById("button-dance").onclick = dance;
}