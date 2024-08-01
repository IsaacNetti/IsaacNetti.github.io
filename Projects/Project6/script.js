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
const addReview = () =>{
    const reviewBox = document.createElement("div");

    const h2 = document.createElement("h2");
    const productName = document.getElementById("txt-product-name").value;
    const node = document.createTextNode(productName);
    h2.appendChild(node);
    reviewBox.appendChild(h2);

    const p = document.createElement("p");
    const score = document.getElementById("txt-rating").value;
    const comment = document.getElementById("txt-comment").value;
    const node2 = document.createTextNode(score+"/5 stars "+comment);
    p.appendChild(node2);
    reviewBox.appendChild(p);

    const p2 = document.createElement("p");
    const userName = document.getElementById("txt-user-name").value;
    const node3 = document.createTextNode("By "+userName);
    p2.appendChild(node3);
    reviewBox.appendChild(p2);

    document.getElementById("input-div").appendChild(reviewBox);
    reviewBox.classList.add("review-box")
}
window.onload = () =>{
    document.getElementById("button-hide").onclick = hide;
    document.getElementById("button-show").onclick = show;
    document.getElementById("button-dance").onclick = dance;
    document.getElementById("button-add-review").onclick = addReview;
}