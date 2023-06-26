const baseURL = "https://www.themealdb.com/api/json/v1/1";
const handleError = (error) => {
  console.error(error);
  return "something went wrong";
};
const getCategoriesData = async () => {
  // code here
  try {
    const response = await fetch(`${baseURL}/filter.php?c=Seafood`);
    const data = await response.json();
    return data;
  } catch (error) {
    return handleError(error);
  }
};

const getIngredientData = async () => {
  // code here
  try {
    const response = await fetch(`${baseURL}/filter.php?i=chicken_breast`);
    const data = await response.json();
    return data;
  } catch (error) {
    return handleError(error);
  }
};

// // Event listener for Get Category Data button
// document
//   .getElementById("get-category-data")
//   .addEventListener("click", async () => {
//     const categoriesData = await getCategoriesData();
//     console.log(categoriesData);
//   });

// // Event listener for Get Ingredient Data button
// document
//   .getElementById("get-ingredient-data")
//   .addEventListener("click", async () => {
//     const ingredientData = await getIngredientData();
//     console.log(ingredientData);
//   });
window.onload = function () {
  //  get the buttons here and add click event

  // Event listener for Get Category Data button
  document
    .getElementById("get-category-data")
    .addEventListener("click", async () => {
      const categoriesData = await getCategoriesData();
      console.log(categoriesData);
    });

  // Event listener for Get Ingredient Data button
  document
    .getElementById("get-ingredient-data")
    .addEventListener("click", async () => {
      const ingredientData = await getIngredientData();
      console.log(ingredientData);
    });
};  

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
