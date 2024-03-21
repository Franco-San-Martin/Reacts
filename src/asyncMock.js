const products = [
    {
        id: 1,
        name: "Smartphone",
        description: "El ultimo teléfono que salio a la venta",
        price: 699.99,
        imageUrl: "./",
        category: "electronics",
        stock: 10
    },
    {
        id: 2,
        name: "Laptop",
        description: "Powerful laptop for gaming and work",
        price: 1299.99,
        imageUrl: "laptop.jpg",
        category: "electronics",
        stock: 5
    },
    {
        id: 3,
        name: "Smartwatch",
        description: "Fitness tracker with heart rate monitor",
        price: 199.99,
        imageUrl: "smartwatch.jpg",
        category: "electronics",
        stock: 15
    },
    {
        id: 4,
        name: "Pizza",
        description: "Delicious pizza with assorted toppings",
        price: 12.99,
        imageUrl: "pizza.jpg",
        category: "foods",
        stock: 20
    },
    {
        id: 5,
        name: "Burger",
        description: "Classic beef burger with fries",
        price: 9.99,
        imageUrl: "burger.jpg",
        category: "foods",
        stock: 30
    },
    {
        id: 6,
        name: "Sushi",
        description: "Assorted sushi rolls with soy sauce",
        price: 18.99,
        imageUrl: "sushi.jpg",
        category: "foods",
        stock: 25
    },
    {
        id: 7,
        name: "T-shirt",
        description: "Comfortable cotton t-shirt",
        price: 19.99,
        imageUrl: "tshirt.jpg",
        category: "clothes",
        stock: 40
    },
    {
        id: 8,
        name: "Jeans",
        description: "Classic denim jeans",
        price: 29.99,
        imageUrl: "jeans.jpg",
        category: "clothes",
        stock: 35
    },
    {
        id: 9,
        name: "Hoodie",
        description: "Warm hooded sweatshirt",
        price: 39.99,
        imageUrl: "hoodie.jpg",
        category: "clothes",
        stock: 25
    },
];

export const getProducts = () => {
    return new Promise((resolve) =>  {
        setTimeout(() => {
            resolve(products);
        }, 500)
})
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
        })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
        })
}