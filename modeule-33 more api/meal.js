const leadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="displayMeakDetail(${meal.idMeal})" class="card">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                        </div>
                    </div>
        `;
        mealsContainer.appendChild(mealDiv);

    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    leadMeals(searchText);
    searchField.value = '';
}

const displayMeakDetail = (idMeal) => {
    // console.log('auwdh',idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => meakDetails(data.meals[0]));
}
const meakDetails = meal => {
    const detailContainer = document.getElementById('detail-container');
    const mealDiv = document.createElement('div');
    detailContainer.innerHTML = '';
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
    `;
    detailContainer.appendChild(mealDiv);
}
leadMeals('');
