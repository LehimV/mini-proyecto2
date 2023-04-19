/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);

const newCard = (obj) => {
  const div = document.createElement("div");
  div.className = "col";
  div.innerHTML = `    
      <div id="container-img" class="container-img card border border-0 mt-5">    
        <img src="${obj.photo} "class="card-img-top imgCard w-100 h-100 rounded-4" alt="${
    obj.title
  }"/>
      </div>

      <div class="main_info card-body d-flex justify-content-between flex-wrap mt-3">
        <p class="d-flex flex-row">
          <span class=" ${!obj.superHost ? "hide" : ""}
           super_host border border-2 border-secondary rounded-4 fw-bold me-1">
            SUPER HOST
          </span>
          <span class="info_1 text-body-secondary ms-1">${obj.type}${
    obj.beds !== null ? ` . ${obj.beds} beds` : ""
  }
          </span>
        </p>

        <div>
          <span class="material-symbols-outlined"> star </span>
          <span class="rating align-top">${obj.rating}</span>
        </div>
      </div>

      <div class="second_info text-start ms-1">
        <span class="fw-bold"> ${obj.title}</span>
      </div>
      
      
          `;

  return div;
};

const showCards = (arr) => {
  const cities = document.querySelector("#cities");
  cities.innerHTML = "";
  arr.forEach((element) => {
    const card = newCard(element);
    cities.appendChild(card);
  });

  //Numero de cards para las stays
  const numStays = document.querySelector("#stays");
  numStays.textContent = `${arr.length}+ Stays`;
};

/****** MODAL ******/

const ciudades = (city) => {
  const div = document.createElement("div");
  div.className = "listCity";
  div.innerHTML = `<span class="material-symbols-outlined ms-5 mt-3"> location_on </span> <button
  type="button"
  class="btn_city mt-2 btn border border-0 rounded-4"
  data-bs-target="#"
>${city}, Finland</button> <br />`;
  return div;
};

const showCity = (arr) => {
  cities.innerHTML = "optionCity";
  arr.forEach((city) => {
    const ciudad = ciudades(city);
    cities.appendChild(ciudad);
  });
};

export default {
  $,
  newCard,
  showCards,
  showCity,
  ciudades,
};
