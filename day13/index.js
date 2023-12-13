/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('btn');
    const resultElement = document.getElementById('result');
    const foodElement = document.getElementById('food');
    const numInput = document.getElementById('num-input');
    const vegetarianCheckbox = document.getElementById('vegetarian-input');

    const nonVegetarianRecipes = {
        'Ham': 'Preheat your oven to 325°F (163°C).',
        'Turkey': '2-3 cups chicken or turkey broth, for basting.',
        'Roast Beef': 'Salt and black pepper, to taste.',
        'Vegetable Stir-Fry': 'Wash and chop all the vegetables, keeping them uniform in size for even cooking.'
    };

    const vegetarianRecipes = {
        'Winter Squash Risotto': 'Peel and dice the winter squash into small cubes.',
        'Vegetarian Lasagna': 'Layer lasagna noodles with ricotta, mozzarella, and marinara sauce.',
        'Vegetarian Stir-Fry': 'Wash and chop all the vegetables, keeping them uniform in size for even cooking.',
        'Eggplant Parmesan': 'Bread and bake eggplant slices, then layer with marinara and cheese.',
        'Vegetable Curry': 'Simmer mixed vegetables in a flavorful curry sauce.'
    };

   
    function updateResult() {
       
        const numGuests = parseInt(numInput.value);
        const isVegetarian = vegetarianCheckbox.checked;

        let dinnerSuggestion = '';
        let recipes;

        if (isVegetarian) {
            recipes = vegetarianRecipes;
            if (numGuests <= 4) {
                dinnerSuggestion = 'Winter Squash Risotto'; 
            } else if (numGuests > 4 && numGuests <= 10) {
                dinnerSuggestion = 'Vegetarian Lasagna'; 
            } else if (numGuests > 10 && numGuests <= 20) {
                dinnerSuggestion = 'Vegetarian Stir-Fry'; 
            } else {
                dinnerSuggestion = 'Vegetable Curry'; 
            }
        } else {
            recipes = nonVegetarianRecipes;
            if (numGuests <= 4) {
                dinnerSuggestion = 'Ham'; 
            } else if (numGuests > 4 && numGuests <= 10) {
                dinnerSuggestion = 'Turkey'; 
            } else if (numGuests > 10 && numGuests <= 20) {
                dinnerSuggestion = 'Roast Beef'; 
            } else {
                dinnerSuggestion = 'Vegetable Stir-Fry'; 
            }
        }

        const recipe = recipes[dinnerSuggestion];

        foodElement.textContent = dinnerSuggestion;
        resultElement.innerHTML = `Your ideal Christmas dinner is <span id="food">${dinnerSuggestion}</span>.<br><br>Recipe:<br>${recipe}`;
        resultElement.style.display = 'block'; 
    }

    calculateButton.addEventListener('click', updateResult);
});
