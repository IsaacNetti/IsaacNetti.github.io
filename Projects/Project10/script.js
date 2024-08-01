class Tool {
    constructor(img, title, price, rating) {
        this.img = img;
        this.title = title;
        this.price = price;
        this.rating = rating;
    }

    get details() {
        const div1 = document.createElement("div");
        div1.classList.add("container")

        const pic = document.createElement("img");
        pic.src = "images/" + this.img;
        div1.append(pic);

        const div2 = document.createElement("div");
        div2.classList.add("overlay");
        const div3 = document.createElement("div");
        div3.classList.add("text");

        const h1 = document.createElement("h1");
        h1.innerHTML= this.title;
        const price =  document.createElement("h2");
        price.innerHTML= this.price;
        const rating =  document.createElement("h2");
        rating.innerHTML= this.rating;

        div3.append(h1,price,rating);
        div2.append(div3);
        div1.append(div2);
        
        return div1;
    }


}

const displaytools = () => {
    const mainDiv = document.getElementById("main-body");
    const tools = [];
    tools.push(new Tool("power-drill.jpg","Power Drill","Price: $52.99","Rating: 4/5 stars"));
    tools.push(new Tool("pressure-washer.jpg","Pressure washer","Price: $99.99","Rating: 2/5 stars"));
    tools.push(new Tool("grinder.jpg","Grinder","Price: $24.99","Rating: 3/5 stars"));
    tools.push(new Tool("hammer-drill.jpg","Hammer Drill","Price: $49.99","Rating: 4/5 stars"));
    tools.push(new Tool("circle-saw.jpg","Circle Saw","Price: $29.99","Rating: 5/5 stars"));
    tools.push(new Tool("leaf-blower.jpg","Leaf Blower","Price: $44.99","Rating: 1/5 stars"));

    tools.forEach(tool => {
        mainDiv.append(tool.details);
    });
};

window.onload = () => {
    displaytools();
}