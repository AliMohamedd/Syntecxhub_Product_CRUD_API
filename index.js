const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/product.route.js');
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Product routes
app.use('/products', productRoutes);

// Initial response from the API
app.get('/', (req, res) => {
    res.send("this is the a Product CRUD API");
});
     

mongoose.connect("mongodb+srv://<USERNAME>:<PASSWORD>@backenddb.apilxuc.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
    console.log('Connected to MongoDB!');
    app.listen(3000, () => {
    console.log('Server is running on port 3000')
    });
})
.catch((err) => {
    console.log('Connection Failed!')
    console.error('FULL ERROR', err)
});