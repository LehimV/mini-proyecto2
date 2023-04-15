/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

/****** MODAL ******/
/*const button = document.getElementById("addCity");
const input = document.getElementById("buscarModal");

button.addEventListener("shown.bs.modal", () => {
  input.focus();
});*/
/*fin MODAL */

const $ = (selector) => document.querySelector(selector);

const newCard = (obj) => {
  const div = document.createElement("div");
  div.className = "col";
  div.innerHTML = `    
      <div id="container-img" class="container-img card border border-0 mt-5">    
        <img src="${obj.photo}" class="card-img-top imgCard w-100 h-100 rounded-4" alt="${
    obj.title
  }"/>
      </div>

      <div class="main_info card-body d-flex justify-content-between flex-wrap mt-3">
        <p class="d-flex flex-row">
          <span class="${!obj.superHost ? "hide" : ""}
           super_host border border-2 rounded-4 fw-bold text-body-secondary">
            SUPER HOST
          </span>
          <span class="text-body-secondary fs-6 ms-1">${obj.type}${
    obj.beds !== null ? `. ${obj.beds} beds` : ""
  }
          </span>
        </p>

        <div>
          <span class="material-symbols-outlined"> star </span>
          <span class="rating align-top">${obj.rating}</span>
        </div>
      </div>

      <div class="second_info text-start ms-1">
        <span class="fw-bold">${obj.title}</span>
      </div>
      
      
          `;

  return div;
};

const showCards = (arr) => {
  cities.innerHTML = "cities";
  arr.forEach((element) => {
    const card = newCard(element);
    cities.appendChilds(card);
  });
};

/****** MODAL ******/

const ciudades = (city) => {
  /* let ciudadesString = "";
  obj.forEach((city) => {
    ciudadesString += `<span class="material-symbols-outlined"> location_on </span> ${city} <br />`;
  });*/
  const div = document.createElement("div");
  div.className = "selectCity";
  div.innerHTML = `<span class="material-symbols-outlined"> location_on </span> ${city} <br />`;
  return div;
};

const showCity = (arr) => {
  cities.innerHTML = "optionCity";
  arr.forEach((city) => {
    const ciudad = ciudades(city);
    cities.appendChilds(ciudad);
  });
};

export default {
  $,
  newCard,
  showCards,
  showCity,
  ciudades,
};
