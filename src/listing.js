// Function to display recipes on the page
function displayRecipes() {
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = '';

    // Retrieve recipes from localStorage (in a real scenario)
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    storedRecipes.forEach((recipe) => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        const title = document.createElement('h2');
        title.textContent = recipe.title;

        const categories = document.createElement('p');
        categories.textContent = `Categories: ${recipe.categories.join(', ')}`;

        card.appendChild(title);
        card.appendChild(categories);
        recipeContainer.appendChild(card);
    });
}

// Initial display of recipes when the page loads
window.onload = displayRecipes;

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = {};

    // Iterate through form elements
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];

        // Check if the element is an input or textarea
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            if (element.name === "categories" || element.name === "ingredients") {

                formData[element.name] = [element.value];

            }
            else {
                formData[element.name] = element.value;
            }
            if (element.name === 'imageUrl') {
                formData[element.name] = "./images/openSOurce.jpg"
            }
            // Add the input's name and value to formData object
        }
    }
    formData = {
        ...formData, id: Math.floor(Math.random() * 100)
    }
    console.log(formData);
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    console.log(recipes);
    recipes.push(formData);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    
    displayRecipes();
});
