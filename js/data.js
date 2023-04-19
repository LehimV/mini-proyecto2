/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obtener los datos del archivo 'stays.json'
  const data = fetch("./stays.json")
    .then((response) => response.json())
    .then((json) => json);

  return data;
};

const getCategories = (data) => {
  const categories = data.map((elem) => elem.category.name);

  categories = new Set(categories);
  categories = [...categories];

  console.log(categories);
  return categories;
};

/*** FIltro de las ciudades ***/
const getCities = (data) => {
  const cities = data.map((element) => element.city);

  const uniqueCities = [...new Set(cities)];
  return uniqueCities;
};

/*** Funcion Filtro para mostralas en las cards ***/
const filterByCity = (data, city) => {
  return data.filter((element) => element.city === city);
};

export default {
  getData,
  getCategories,
  getCities,
  filterByCity,
};
