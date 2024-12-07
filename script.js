const apiUrl = 'https://dummyjson.com/recipes';
const recipesContainer = document.getElementById('Container');
const searchBar = document.getElementById('search');

let recipes = []; 

async function fetchRecipes() {
        const response = await fetch(apiUrl);
        const data = await response.json();
        recipes = data.recipes; 
        displayRecipes(recipes); 
}   

function displayRecipes(recipes) {
    recipesContainer.innerHTML = recipes.map(recipe => `
        <div class="recipe-card">
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p><strong>Ingredients:</strong></p>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <p><strong>Instructions:</strong></p>
            <p>${recipe.instructions}</p>
        </div>
    `).join('');
}

search.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase(); 
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm) 
    );
    displayRecipes(filteredRecipes); 
});


fetchRecipes();
