# E-commerce Product Card System - Flexbox Sample Project

## Project Overview
Build a responsive e-commerce product card system using CSS Flexbox. This project demonstrates flexible layouts, alignment, and responsive design with Flexbox.

## Learning Outcomes
- Master CSS Flexbox fundamentals
- Build responsive flex layouts
- Use flexbox for alignment and distribution
- Create reusable component systems
- Implement responsive navigation and cards

## Project Structure
\`\`\`
ecommerce-flexbox/
├── index.html
├── css/
│   └── style.css
└── images/
    ├── product1.jpg
    ├── product2.jpg
    ├── product3.jpg
    └── product4.jpg
\`\`\`

## Files

### index.html
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechStore - Flexbox E-commerce</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-container">
            <div class="logo">TechStore</div>
            <nav class="navbar">
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#deals">Deals</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
            <div class="header-icons">
                <span class="search-icon">🔍</span>
                <span class="cart-icon">🛒 <span class="cart-count">0</span></span>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Welcome to TechStore</h1>
            <p>Discover the latest tech products at unbeatable prices</p>
            <button class="btn-primary">Shop Now</button>
        </div>
    </section>

    <!-- Filters -->
    <section class="filters">
        <div class="filter-container">
            <h3>Filter By:</h3>
            <div class="filter-group">
                <label><input type="checkbox"> Laptops</label>
                <label><input type="checkbox"> Phones</label>
                <label><input type="checkbox"> Tablets</label>
                <label><input type="checkbox"> Accessories</label>
            </div>
            <div class="price-filter">
                <label>Price Range:</label>
                <input type="range" min="0" max="2000">
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section class="products">
        <h2>Featured Products</h2>
        <div class="products-grid">
            <!-- Product Card 1 -->
            <div class="product-card">
                <div class="product-image">
                    <img src="https://via.placeholder.com/250x250?text=Laptop" alt="Laptop">
                    <span class="badge">-20%</span>
                </div>
                <div class="product-info">
                    <h3>UltraBook Pro</h3>
                    <p class="category">Laptops</p>
                    <div class="rating">
                        <span class="stars">★★★★★</span>
                        <span class="review-count">(324 reviews)</span>
                    </div>
                </div>
                <div class="product-footer">
                    <div class="price-section">
                        <span class="original-price">$1,299</span>
                        <span class="sale-price">$1,039</span>
                    </div>
                    <button class="btn-add-cart">Add to Cart</button>
                </div>
            </div>

            <!-- Product Card 2 -->
            <div class="product-card">
                <div class="product-image">
                    <img src="https://via.placeholder.com/250x250?text=Smartphone" alt="Smartphone">
                    <span class="badge">New</span>
                </div>
                <div class="product-info">
                    <h3>ProPhone 15</h3>
                    <p class="category">Smartphones</p>
                    <div class="rating">
                        <span class="stars">★★★★★</span>
                        <span class="review-count">(512 reviews)</span>
                    </div>
                </div>
                <div class="product-footer">
                    <div class="price-section">
                        <span class="sale-price">$899</span>
                    </div>
                    <button class="btn-add-cart">Add to Cart</button>
                </div>
            </div>

            <!-- Product Card 3 -->
            <div class="product-card">
                <div class="product-image">
                    <img src="https://via.placeholder.com/250x250?text=Tablet" alt="Tablet">
                    <span class="badge">-15%</span>
                </div>
                <div class="product-info">
                    <h3>TabMax Air</h3>
                    <p class="category">Tablets</p>
                    <div class="rating">
                        <span class="stars">★★★★☆</span>
                        <span class="review-count">(189 reviews)</span>
                    </div>
                </div>
                <div class="product-footer">
                    <div class="price-section">
                        <span class="original-price">$599</span>
                        <span class="sale-price">$509</span>
                    </div>
                    <button class="btn-add-cart">Add to Cart</button>
                </div>
            </div>

            <!-- Product Card 4 -->
            <div class="product-card">
                <div class="product-image">
                    <img src="https://via.placeholder.com/250x250?text=Headphones" alt="Headphones">
                </div>
                <div class="product-info">
                    <h3>SonicMax Pro</h3>
                    <p class="category">Headphones</p>
                    <div class="rating">
                        <span class="stars">★★★★★</span>
                        <span class="review-count">(256 reviews)</span>
                    </div>
                </div>
                <div class="product-footer">
                    <div class="price-section">
                        <span class="sale-price">$349</span>
                    </div>
                    <button class="btn-add-cart">Add to Cart</button>
                </div>
            </div>

            <!-- Product Card 5 -->
            <div class="product-card">
                <div class="product-image">
                    <img src="https://via.placeholder.com/250x250?text=Camera" alt="Camera">
                    <span class="badge">Hot</span>
                </div>
                <div class="product-info">
                    <h3>CamPro 4K</h3>
                    <p class="category">Cameras</p>
                    <div class="rating">
                        <span class="stars">★★★★★</span>
                        <span class="review-count">(178 reviews)</span>
                    </div>
                </div>
                <div class="product-footer">
                    <div class="price-section">
                        <span class="original-price">$1,199</span>
                        <span class="sale-price">$999</span>
                    </div>
                    <button class="btn-add-cart">Add to Cart</button>
                </div>
            </div>

            <!-- Product Card 6 -->
            <div class="product-card">
                <div class="product-image">
                    <img src="https://via.placeholder.com/250x250?text=Smartwatch" alt="Smartwatch">
                </div>
                <div class="product-info">
                    <h3>WatchPro Ultra</h3>
                    <p class="category">Wearables</p>
                    <div class="rating">
                        <span class="stars">★★★★☆</span>
                        <span class="review-count">(95 reviews)</span>
                    </div>
                </div>
                <div class="product-footer">
                    <div class="price-section">
                        <span class="sale-price">$299</span>
                    </div>
                    <button class="btn-add-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>About Us</h4>
                <p>Leading e-commerce platform for tech products.</p>
            </div>
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Customer Service</h4>
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Follow Us</h4>
                <div class="social-links">
                    <a href="#">📱 Facebook</a>
                    <a href="#">🐦 Twitter</a>
                    <a href="#">📷 Instagram</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 TechStore. All rights reserved.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
\`\`\`

### css/style.css
\`\`\`css
/* Flexbox E-commerce Layout */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
    color: #333;
}

/* Header */
.header {
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 20px;
    gap: 20px;
}

.logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: #0046FF;
    white-space: nowrap;
}

.navbar {
    display: flex;
    gap: 30px;
    flex: 1;
    justify-content: center;
}

.navbar a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    transition: color 0.3s;
}

.navbar a:hover {
    color: #0046FF;
}

.header-icons {
    display: flex;
    gap: 20px;
    align-items: center;
}

.header-icons span {
    cursor: pointer;
    font-size: 1.2rem;
    transition: transform 0.3s;
}

.header-icons span:hover {
    transform: scale(1.1);
}

.cart-count {
    background-color: #0046FF;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.8rem;
    margin-left: 5px;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #0046FF 0%, #0061FF 100%);
    color: white;
    padding: 60px 20px;
    text-align: center;
    margin-bottom: 30px;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 15px;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 25px;
    opacity: 0.9;
}

.btn-primary {
    background-color: white;
    color: #0046FF;
    border: none;
    padding: 12px 30px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Filters Section */
.filters {
    background-color: white;
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 8px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.filter-container {
    display: flex;
    gap: 30px;
    align-items: center;
    flex-wrap: wrap;
}

.filter-group {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.filter-group label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.price-filter {
    display: flex;
    gap: 10px;
    align-items: center;
}

/* Products Section */
.products {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 40px;
}

.products h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #333;
}

.products-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
}

/* Product Card */
.product-card {
    display: flex;
    flex-direction: column;
    width: calc(25% - 15px);
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.product-image {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 250px;
    background-color: #f5f5f5;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}

.badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #0046FF;
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.product-info {
    flex: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
}

.product-info h3 {
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: #333;
}

.category {
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 8px;
}

.rating {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 10px;
}

.stars {
    color: #ffb800;
    font-size: 0.9rem;
}

.review-count {
    color: #999;
    font-size: 0.8rem;
}

.product-footer {
    padding: 15px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.price-section {
    display: flex;
    gap: 10px;
    align-items: center;
}

.original-price {
    text-decoration: line-through;
    color: #999;
    font-size: 0.9rem;
}

.sale-price {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0046FF;
}

.btn-add-cart {
    background-color: #0046FF;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
    white-space: nowrap;
}

.btn-add-cart:hover {
    background-color: #0038cc;
}

/* Footer */
.footer {
    background-color: #333;
    color: white;
    margin-top: 60px;
}

.footer-content {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    flex-wrap: wrap;
    gap: 30px;
}

.footer-section {
    flex: 1;
    min-width: 200px;
}

.footer-section h4 {
    margin-bottom: 15px;
    color: #0046FF;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 8px;
}

.footer-section a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: #0046FF;
}

.social-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-bottom {
    text-align: center;
    padding: 20px;
    border-top: 1px solid #555;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .product-card {
        width: calc(33.333% - 14px);
    }

    .navbar {
        gap: 15px;
    }

    .header-container {
        gap: 10px;
    }
}

@media (max-width: 768px) {
    .product-card {
        width: calc(50% - 10px);
    }

    .header-container {
        flex-wrap: wrap;
        padding: 10px;
    }

    .navbar {
        order: 3;
        width: 100%;
        justify-content: flex-start;
    }

    .logo {
        order: 1;
    }

    .header-icons {
        order: 2;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .filter-container {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-content {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    .product-card {
        width: 100%;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .navbar a {
        font-size: 0.9rem;
        gap: 15px;
    }

    .filter-group {
        flex-direction: column;
        align-items: flex-start;
    }

    .product-footer {
        flex-direction: column;
        align-items: flex-start;
    }

    .btn-add-cart {
        width: 100%;
    }
}
\`\`\`

## Key Concepts Demonstrated
- ✅ Flexbox Basic Layout
- ✅ Flex Direction and Wrapping
- ✅ Justify Content and Align Items
- ✅ Flexible Sizing with flex properties
- ✅ Flex Order
- ✅ Responsive Flexbox Design
- ✅ Nested Flexbox Layouts

## Challenges to Try
1. Add a shopping cart sidebar with Flexbox
2. Implement a product comparison table
3. Create a responsive navigation drawer
4. Add animations on product hover
5. Build a checkout form with Flexbox layout
