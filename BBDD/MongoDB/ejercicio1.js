db.customers.insertMany([
    {
        name: "Jane",
        lastName: "Donovan",
        address: "Carretera de Cadiz",
        email: "jdonovan@gmail.com",
        phoneNumber: 845634647,
        shoppingCart: []
    }, {
        name: "Peter",
        lastName: "Parker",
        address: "Avenida Andalucia",
        email: "jparker@gmail.com",
        phoneNumber: 567453467,
        shoppingCart: []
    }
]);

db.products.insertMany([
    {
        name: "T-shirt",
        brand: "Adidas",
        category: "clothes",
        price: 15
    }, {
        name: "iPhone",
        brand: "Apple",
        category: "electronics",
        price: 899
    }, {
        name: "Macarrones",
        brand: "Barilla",
        category: "food",
        price: 3
    }
])

const products = db.products.find().toArray()

db.customers.update(
    {name: "John"},
    {
        $set: {shoppingCart: [
            {
                product_id: products[0]._id,
                quantity: 3,
            },{
                product_id: products[1]._id,
                quantity: 1,
            }, {
                product_id: products[2]._id,
                quantity: 5,
            }
        ]}
    }
)
