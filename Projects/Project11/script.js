const getmovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
};
const showmovies = async () => {
    const movies = await getmovies();
    const movieSection = document.getElementById("movie-body");

    movies.forEach((movie) =>
      movieSection.append(getmovieItem(movie))
    );
  };

const getmovieItem = (movie) => {
    const movieSection = document.createElement("section");
    movieSection.classList.add("flex-container");
    const movieTxtSection = document.createElement("div");

    console.log(movie);

    const img = document.createElement("img");
    img.src = ` https://portiaportia.github.io/json/${movie.img}`;
    movieSection.append(img);

    const h1 = document.createElement("h1");
    movieTxtSection.append(h1);
    h1.innerHTML = movie.title;

    const p1 = document.createElement("p");
    movieTxtSection.append(p1);
    p1.innerHTML = `<strong>Director: </strong>${movie.director}`;
    
    const p2 = document.createElement("p");
    movieTxtSection.append(p2);
    p2.innerHTML = `<strong>Actors: </strong> ${movie.actors}`;
    
    const p3 = document.createElement("p");
    movieTxtSection.append(p3);
    p3.innerHTML = `<strong>Year Released: </strong> ${movie.year}`;

    const p4 = document.createElement("p");
    movieTxtSection.append(p4);
    p4.innerHTML = `<strong>Genres: </strong> ${movie.genres}`;

    const p5 = document.createElement("p");
    movieTxtSection.append(p5);
    p5.innerHTML = movie.description;

    movieSection.append(movieTxtSection);

    return movieSection;
};

window.onload = () => showmovies();