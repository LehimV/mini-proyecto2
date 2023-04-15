import data from "./data.js";
import dom from "./dom.js";

const URL = "./js/stays.json";

/***** MODAL ******/

//const addCity = dom.$("#optionCity");
//*const optionCity = document.getElementById("optionCity");
const datos = await data.getData(URL);
const citiesList = data.getCities(datos);
console.log("Lista de ciudades:", citiesList);
console.log("Lista de elementops:", datos);

datos.forEach((element) => {
  const card = dom.newCard(element);
  dom.$("#cities").appendChild(card);
});

citiesList.forEach((city) => {
  const ciudad = dom.ciudades(city);
  dom.$("#optionCity").appendChild(ciudad);
});

/////
/*optionCity.addEventListener("show.bs.modal", function () {
  console.log("Muestra show.bs.modal activado");
  const citiesList = data.getCities(datos);
  optionCity.innerHTML = "";

  citiesList.forEach((city) => {
    const option = document.createElement("span");
    option.textContent = city;
    optionCity.appendChild(option);
  });
      addCity.value = citiesList[0];
});*/

////ORIGINAL
/*const datos = await data.getData(URL);
const citiesList = data.getCities(datos);
console.log("Lista de ciudades:", citiesList);

datos.forEach((element) => {
  const card = dom.newCard(element);
  console.log(element);
  dom.$("#cities").appendChild(card);
});*/
