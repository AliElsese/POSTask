// Auth Scripts
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>?,./])(?=.{6,20}$).+$/;

let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');

const userRegister = (event) => {
    event.preventDefault();
    //   Validation
    let email = emailInput.value;
    let password = passwordInput.value;
    
    let obj = { password, email };
  
    let hasError = 0;
  
    if (!emailRegex.test(email)) {
       alert("Invalid Email");
       hasError++;
    }
  
    if (!passwordRegex.test(password)) {
        alert(`
            Invalid Password
            Password Must Containts Special Charts Like [@ & _ -]
            Password Must Be min 6 chars
            Password Must Be max 20 chars
            Password Must Containts Capital Letter & Smaill Letters
            Password Must Containts Number
        `);
        hasError++;
    }  
  
    if (hasError > 0) {
       alert("Fix Problems");
    } else {
       alert("Form is Good");
    }

    //   Submit Data to Backend (localStorage)
    let usersString = localStorage.getItem("users");
    let usersarry = [];
    if (usersString) {
        usersarry = JSON.parse(usersString);
        let emailIndex = usersarry.findIndex((el, index) => {
            return el.email.toLowerCase() == email.toLowerCase();
        });
  
        if (emailIndex == -1) {
            usersarry.push(obj);
        } else {
            alert("This email is alreeady Registered");
        }
    }
    else{
        usersarry.push(obj);
    }
    localStorage.setItem("users", JSON.stringify(usersarry));
    alert("Registered Successfully!");
    window.location.href = './signin.html';
};

const userLogin = (event) => {
    event.preventDefault();
    //   Validation
    let email = emailInput.value;
    let password = passwordInput.value;

    let hasError = 0;
    if (!emailRegex.test(email)) {
        alert("Invalid Email");
        hasError++;
    }
    if (hasError > 0) {
        alert("Fix Problems");
    } else {
        alert("Form is Good");
    }

    let usersString = localStorage.getItem("users");
    if (usersString) {
        usersarry = JSON.parse(usersString);
        let emailIndex = usersarry.findIndex((el, index) => {
            return (
                el.email.toLowerCase() == email.toLowerCase() && el.password == password
            );
        });

        if (emailIndex == -1) {
            alert("Wrong Email or Password");
        } else {
            window.location.href = "./categories.html";
            alert("Login Successfully!");
            renderCategories();
        }
    } else {
        alert("Wrong Email or Password");
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
let categoryTitle = document.querySelector('#category-title');
let crump = document.querySelector('#brudcrump');

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
    categoryTitle.innerHTML = `<h1>Categories</h1>`;
    crump.innerHTML = `
        <p class="fw-bold" style="color: #808080;">Food & Drinks</p>
        <span>></span>
        <p class="fw-bold">Categories</p>
    `;
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
////////////////////////////////////////////////////////////////////////////////////////////////
let products = [
    {
        category: 'Pizza',
        name: 'pizza 1',
        price: 120,
        image: './assets/img/pizza.jpg'
    },
    {
        category: 'Pizza',
        name: 'pizza 2',
        price: 140,
        image: './assets/img/pizza.jpg'
    },
    {
        category: 'Pizza',
        name: 'pizza 3',
        price: 160,
        image: './assets/img/pizza.jpg'
    },
    {
        category: 'Pizza',
        name: 'pizza 4',
        price: 180,
        image: './assets/img/pizza.jpg'
    },
    {
        category: 'Deserts',
        name: 'desert 1',
        price: 200,
        image: './assets/img/desert.jpg'
    },
    {
        category: 'Deserts',
        name: 'desert 2',
        price: 220,
        image: './assets/img/desert.jpg'
    },
    {
        category: 'Deserts',
        name: 'desert 3',
        price: 240,
        image: './assets/img/desert.jpg'
    },
    {
        category: 'Deserts',
        name: 'desert 4',
        price: 260,
        image: './assets/img/desert.jpg'
    },
    {
        category: 'Burgers',
        name: 'burger 1',
        price: 100,
        image: './assets/img/burger.jpg'
    },
    {
        category: 'Burgers',
        name: 'burger 2',
        price: 110,
        image: './assets/img/burger.jpg'
    },
    {
        category: 'Burgers',
        name: 'burger 3',
        price: 120,
        image: './assets/img/burger.jpg'
    },
    {
        category: 'Burgers',
        name: 'burger 4',
        price: 130,
        image: './assets/img/burger.jpg'
    },
    {
        category: 'Cold Drinks',
        name: 'drink 1',
        price: 70,
        image: './assets/img/drink.jpg'
    },
    {
        category: 'Cold Drinks',
        name: 'drink 2',
        price: 80,
        image: './assets/img/drink.jpg'
    },
    {
        category: 'Cold Drinks',
        name: 'drink 3',
        price: 90,
        image: './assets/img/drink.jpg'
    },
    {
        category: 'Cold Drinks',
        name: 'drink 4',
        price: 60,
        image: './assets/img/drink.jpg'
    },
    {
        category: 'Wok',
        name: 'wok 1',
        price: 60,
        image: './assets/img/wokfood.png'
    },
    {
        category: 'Wok',
        name: 'wok 2',
        price: 60,
        image: './assets/img/wokfood.png'
    },
    {
        category: 'Wok',
        name: 'wok 3',
        price: 60,
        image: './assets/img/wokfood.png'
    },
    {
        category: 'Wok',
        name: 'wok 4',
        price: 60,
        image: './assets/img/wokfood.png'
    },
    {
        category: 'Pasta',
        name: 'pasta 1',
        price: 60,
        image: './assets/img/pastafood.png'
    },
    {
        category: 'Pasta',
        name: 'pasta 2',
        price: 60,
        image: './assets/img/pastafood.png'
    },
    {
        category: 'Pasta',
        name: 'pasta 3',
        price: 60,
        image: './assets/img/pastafood.png'
    },
    {
        category: 'Pasta',
        name: 'pasta 4',
        price: 60,
        image: './assets/img/pastafood.png'
    },
]
// Products Page
function showProducts(category) {
    crump.innerHTML = `
        <p class="fw-bold product-status" style="color: #808080;" onclick="renderCategories()">Food & Drinks</p>
        <span>></span>
        <p class="fw-bold">${category}</p>
    `;
    categoryTitle.innerHTML = `<h1>${category}</h1>`;
    categoriesDiv.innerHTML = '';
    let filteredProducts = products.filter(filterProducts);
    function filterProducts(product) {
        return product.category == category
    }
    filteredProducts.forEach((product, index) => {
        categoriesDiv.innerHTML += `
            <div class="mb-4">
                <button onclick="addToCart('${product.name}')" class="card product-card d-flex flex-column justify-content-center align-items-center">
                    <img src="${product.image}" class="img-fluid category-img" alt="${product.image}">
                    <p class="card-text" style="color: #808080;">${product.name}</p>
                    <div class="card-body">
                        <h5 class="card-title category-name" style="color: #FFCA40;">${product.price} $</h5>
                    </div>
                </button>
            </div>
        `
    })
}
////////////////////////////////////////////////////////////////////////////////////////////////
// Sidebar Cart
let cart = [];
let table = document.querySelector('table tbody');
let totalCart = document.querySelector('#total');

function addToCart(productName) {
    let product = products.find((el) => {
        return productName == el.name ? el : null;
    });
    let productInCart = cart.findIndex((el) => {
        return product.name == el.name
    })
    if(productInCart == -1) {
        product.qty = 1;
        cart.push(product);
    }
    else {
        cart[productInCart].qty ++
    }
    renderCart();
    document.getElementById('categoryDetails').style.right = 0;
}

function renderCart() {
    table.innerHTML = '';
    cart.forEach((el, index) => {
        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${el.name}</td>
                <td>${el.price} $</td>
                <td>
                    <div class="d-flex justify-content-center align-items-center gap-2">
                        <buuton class="btn btn-danger" onclick="decrement(${index})">-</buuton>
                        <p class="mb-0">${el.qty}</p>
                        <button class="btn btn-success" onclick="incement(${index})">+</button>
                    </div>
                </td>
                <td>${el.price * el.qty} $</td>
            </tr>
        `
    });
    totalCart.innerText = getTotal();
}

function getTotal() {
    let total = 0;
    cart.forEach((el, index) => {
        total += el.price * el.qty;
    });
    return total;
}

function incement(index) {
    cart[index].qty++;
    renderCart();
}

function decrement(index) {
    if (cart[index].qty > 1) {
        cart[index].qty--;
    }
    else{
        cart.splice(index,1);
    }
    renderCart();
}

function closeDetails() {
    document.getElementById('categoryDetails').style.right = '-300px';
}