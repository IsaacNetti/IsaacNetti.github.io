const getMargaritas = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
};
const showMargaritas = async () => {
    const margaritas = await getMargaritas();
    const margaritaSection = document.getElementById("margarita-body");

    margaritas.drinks.forEach((margarita) =>
      margaritaSection.append(getMargaritaItem(margarita))
    );
  };

const getMargaritaItem = (margarita) => {
    const margaritaSection = document.createElement("section");
    margaritaSection.classList.add("margarita");

    console.log(margarita);

    const img = document.createElement("img");
    img.src = margarita.strDrinkThumb;
    margaritaSection.append(img);

    const h1 = document.createElement("h1");
    margaritaSection.append(h1);
    h1.innerHTML = margarita.strDrink;

    const h2 = document.createElement("h2");
    margaritaSection.append(h2);
    h2.innerHTML = margarita.strAlcoholic;
    return margaritaSection;
};

window.onload = () => showMargaritas();