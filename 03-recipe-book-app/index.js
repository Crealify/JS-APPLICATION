const API_KEY = "560a5c46fdb9489f95b9926082adc524";
const recipeListEl = document.getElementById("recipe-list");

const displayRecipes = (recipes) => {
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");

        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = recipe.title;

        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        const recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients
            .map((ingredient) => ingredient.original)
            .join(", ")}`;

        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    });
};

const fetchRecipes = async () => {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    return data.recipes;
};

const getRecipes = async () => {
    const recipes = await fetchRecipes();
    console.log(recipes);
    displayRecipes(recipes);
};
getRecipes();
