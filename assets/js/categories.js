// Categories Page
let categoriesDiv = document.querySelector('#categories');
let categories = [
    {
        catName: 'Burgers',
        catImage: './assets/img/burgers.png'
    },
    {
        catName: 'Cold Drinks',
        catImage: './assets/img/drinks.png'
    },
    {
        catName: 'Pizza',
        catImage: './assets/img/pizza.png'
    },
    {
        catName: 'Wok',
        catImage: './assets/img/wok.png'
    },
    {
        catName: 'Deserts',
        catImage: './assets/img/deserts.png'
    },
    {
        catName: 'Pasta',
        catImage: './assets/img/pasta.png'
    },
]

function renderCategories () {
    categoriesDiv.innerHTML = '';
    categories.forEach((category, index) => {
        categoriesDiv.innerHTML += `
            <div class="mb-4">
                <button onclick="showProducts('${category.catName}')" class="card category-card d-flex flex-column justify-content-center align-items-center">
                    <img src="${category.catImage}" class="img-fluid category-img" alt="${category.catName}">
                    <div class="card-body">
                        <h5 class="card-title category-name">${category.catName}</h5>
                    </div>
                </button>
            </div>
        `
    })
}
renderCategories();