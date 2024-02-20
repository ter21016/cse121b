document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const mealContainer = document.getElementById('meal-container');

    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();

        if (searchTerm !== '') {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                mealContainer.innerHTML = '';

                if (data.meals) {
                    data.meals.forEach(meal => {
                        const mealDiv = document.createElement('div');
                        mealDiv.classList.add('meal');

                        mealDiv.innerHTML = `
                            <h2>${meal.strMeal}</h2>
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                            <p>${meal.strInstructions}</p>
                        `;

                        mealContainer.appendChild(mealDiv);
                    });
                } else {
                    mealContainer.innerHTML = '<p>No meal found. Please try again.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching meal data:', error);
            });
        } else {
            alert('Please enter a meal name');
        }
    });
});
