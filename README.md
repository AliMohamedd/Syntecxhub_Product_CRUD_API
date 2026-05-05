# 📦 Syntecxhub Product CRUD API

A RESTful API built with Node.js and Express that provides full CRUD functionality for managing products. This project demonstrates best practices for structuring routes, controllers, filtering, pagination, and error handling.

---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) operations for products  
- Organized using Express routes & controllers  
- Filtering by category and price range  
- Pagination for product listings  
- Graceful error handling  
- Clean and scalable structure  

---

## 🧱 Product Model

Each product includes:

```json
{
  "id": "string", automatically assigned
  "name": "string", required
  "price": "number", required
  "category": "string", required
  "description": "string" optional
  
}
```

---

## 📂 Project Structure

```
├── controllers/
│   └── product.controller.js
├── routes/
│   └── product.route.js
├── models/
│   └── product.model.js
├── index.js
└── package-lock.json
└── package.json
```

---

## ⚙️ Installation

```bash
git clone https://github.com/AliMohamedd/Syntecxhub_Product_CRUD_API.git
cd Syntecxhub_Product_CRUD_API
npm install
```

---

## ▶️ Run the Server

```bash
npm start
```

Server will run on:

```
http://localhost:3000
```

---

## 📌 API Endpoints

### Create Product
```
POST /products
```

### Get All Products (with filtering & pagination)
```
GET /products
```

#### Query Parameters:
- category → filter by category  
- minPrice → minimum price  
- maxPrice → maximum price  
- page → page number  
- limit → number of items per page  

Example:
```
GET /products?category=electronics&minPrice=100&maxPrice=500&page=1&limit=10
```

---

### Get Single Product
```
GET /products/:id
```

---

### Update Product
```
PUT /products/:id
```

---

### Delete Product
```
DELETE /products/:id
```

---

## 🔍 Filtering

Filter by category:
```
?category=clothing
```

Filter by price range:
```
?minPrice=50&maxPrice=200
```

---

## 📄 Pagination

Use:
```
?page=1&limit=10
```

Example response:
```json
{
  "total": 50,
  "page": 1,
  "limit": 10,
  "data": []
}
```

---

## ⚠️ Error Handling

Handles:
- Invalid product ID  
- Product not found  
- Validation errors  
- Server errors  

Example:
```json
{
  "message": "Product not found"
}
```

---

## 🧠 Concepts Used

- RESTful API design  
- Express routing & controllers    
- Filtering & pagination logic  

---

## 📄 License

ISC
