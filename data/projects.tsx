export const projectsData = {
  bootstrap: {
    title: "Bootstrap Portfolio Website",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio - Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    .navbar { background-color: #0046FF !important; }
    .hero { background: linear-gradient(135deg, #0046FF 0%, #73C8D2 100%); color: white; padding: 100px 0; }
    .hero h1 { font-size: 3.5rem; font-weight: 700; margin-bottom: 20px; }
    .card { border: none; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.3s; }
    .card:hover { transform: translateY(-5px); }
    .btn-primary { background-color: #0046FF; border: none; }
    .btn-primary:hover { background-color: #0033CC; }
  </style>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">My Portfolio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <h1>Hi, I'm a Web Developer</h1>
      <p class="lead">Building amazing websites with Bootstrap</p>
      <button class="btn btn-light btn-lg">Get Started</button>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">My Projects</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">E-commerce Site</h5>
              <p class="card-text">A full-featured online store with Bootstrap grid system.</p>
              <button class="btn btn-primary">View Project</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Blog Platform</h5>
              <p class="card-text">A responsive blog with Bootstrap components.</p>
              <button class="btn btn-primary">View Project</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Dashboard</h5>
              <p class="card-text">Analytics dashboard using Bootstrap layout.</p>
              <button class="btn btn-primary">View Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-dark text-white text-center py-4 mt-5">
    <p>&copy; 2025 My Portfolio. Built with Bootstrap.</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
  },
  grid: {
    title: "CSS Grid Magazine Layout",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Magazine - CSS Grid</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Georgia', serif; background: #f5f5f5; }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    header {
      background: linear-gradient(135deg, #0046FF 0%, #73C8D2 100%);
      color: white;
      padding: 40px;
      text-align: center;
      margin-bottom: 40px;
    }
    
    header h1 { font-size: 3rem; margin-bottom: 10px; }
    
    .magazine {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 30px;
      margin-bottom: 40px;
    }
    
    .featured {
      grid-column: 1 / 2;
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .featured img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    
    .sidebar {
      display: grid;
      grid-template-rows: auto auto;
      gap: 20px;
    }
    
    .sidebar-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    .articles {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    
    .article-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    
    .article-card:hover { transform: translateY(-5px); }
    
    .article-card h3 { color: #0046FF; margin-bottom: 10px; }
  </style>
</head>
<body>
  <header>
    <h1>Tech Magazine</h1>
    <p>Your Source for CSS Grid and Web Design</p>
  </header>

  <div class="container">
    <div class="magazine">
      <article class="featured">
        <h2>Featured Story: Master CSS Grid</h2>
        <img src="/css-grid-layout.png" alt="CSS Grid">
        <p>CSS Grid is one of the most powerful layout tools in modern web design. Learn how to create complex layouts with ease.</p>
      </article>
      
      <aside class="sidebar">
        <div class="sidebar-card">
          <h3>Popular Tags</h3>
          <p>CSS, Grid, Layout, Responsive, Web Design</p>
        </div>
        <div class="sidebar-card">
          <h3>Latest News</h3>
          <p>CSS Grid support now at 95% across all browsers!</p>
        </div>
      </aside>
    </div>

    <h2 style="margin-bottom: 30px;">More Articles</h2>
    <div class="articles">
      <article class="article-card">
        <h3>Grid vs Flexbox</h3>
        <p>Understand when to use CSS Grid and when to use Flexbox in your projects.</p>
      </article>
      <article class="article-card">
        <h3>Responsive Grids</h3>
        <p>Create responsive grid layouts that adapt to any screen size.</p>
      </article>
      <article class="article-card">
        <h3>Grid Templates</h3>
        <p>Master grid-template-areas and create semantic layouts.</p>
      </article>
      <article class="article-card">
        <h3>Auto-fit and Auto-fill</h3>
        <p>Learn the difference between auto-fit and auto-fill in CSS Grid.</p>
      </article>
      <article class="article-card">
        <h3>Advanced Positioning</h3>
        <p>Position items precisely using grid lines and named areas.</p>
      </article>
      <article class="article-card">
        <h3>Grid Gaps</h3>
        <p>Master spacing with gap, column-gap, and row-gap properties.</p>
      </article>
    </div>
  </div>
</body>
</html>`,
  },
  flexbox: {
    title: "E-commerce Store with Flexbox",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Store - Flexbox</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    
    header {
      background: linear-gradient(135deg, #0046FF 0%, #73C8D2 100%);
      color: white;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    nav {
      display: flex;
      gap: 30px;
      list-style: none;
    }
    
    nav a { color: white; text-decoration: none; }
    
    .hero {
      background: linear-gradient(135deg, #73C8D2 0%, #0046FF 100%);
      color: white;
      padding: 60px 20px;
      text-align: center;
    }
    
    .filters {
      display: flex;
      gap: 20px;
      justify-content: center;
      padding: 30px 20px;
      flex-wrap: wrap;
    }
    
    .filter-btn {
      padding: 10px 20px;
      border: 2px solid #0046FF;
      background: white;
      color: #0046FF;
      cursor: pointer;
      border-radius: 5px;
      transition: all 0.3s;
    }
    
    .filter-btn:hover {
      background: #0046FF;
      color: white;
    }
    
    .products {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 30px 20px;
      justify-content: center;
    }
    
    .product-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      overflow: hidden;
      width: 250px;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s;
    }
    
    .product-card:hover { transform: translateY(-8px); }
    
    .product-image {
      height: 200px;
      background: linear-gradient(135deg, #e0e7ff 0%, #cffafe 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0046FF;
      font-weight: bold;
    }
    
    .product-info {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    
    .product-title { font-size: 1.1rem; margin-bottom: 10px; color: #0046FF; }
    
    .product-price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #73C8D2;
      margin-bottom: 15px;
    }
    
    .product-btn {
      padding: 10px;
      background: #0046FF;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }
    
    .product-btn:hover { background: #0033CC; }
    
    footer {
      background: #333;
      color: white;
      padding: 30px 20px;
      text-align: center;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 20px;
    }
  </style>
</head>
<body>
  <header>
    <h1>TechStore</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h2>Welcome to Our Store</h2>
    <p>Find the best tech products with Flexbox design</p>
  </section>

  <div class="filters">
    <button class="filter-btn">All Products</button>
    <button class="filter-btn">Laptops</button>
    <button class="filter-btn">Phones</button>
    <button class="filter-btn">Accessories</button>
  </div>

  <div class="products">
    <div class="product-card">
      <div class="product-image">Product 1</div>
      <div class="product-info">
        <div class="product-title">Laptop Pro</div>
        <div class="product-price">$999</div>
        <button class="product-btn">Add to Cart</button>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">Product 2</div>
      <div class="product-info">
        <div class="product-title">Wireless Earbuds</div>
        <div class="product-price">$199</div>
        <button class="product-btn">Add to Cart</button>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">Product 3</div>
      <div class="product-info">
        <div class="product-title">Smartphone X</div>
        <div class="product-price">$699</div>
        <button class="product-btn">Add to Cart</button>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">Product 4</div>
      <div class="product-info">
        <div class="product-title">Smart Watch</div>
        <div class="product-price">$299</div>
        <button class="product-btn">Add to Cart</button>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">Product 5</div>
      <div class="product-info">
        <div class="product-title">Tablet Plus</div>
        <div class="product-price">$499</div>
        <button class="product-btn">Add to Cart</button>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">Product 6</div>
      <div class="product-info">
        <div class="product-title">USB Hub</div>
        <div class="product-price">$49</div>
        <button class="product-btn">Add to Cart</button>
      </div>
    </div>
  </div>

  <footer>
    <div>
      <h4>Company</h4>
      <p>About Us | Careers | Blog</p>
    </div>
    <div>
      <h4>Support</h4>
      <p>Help | Contact | FAQ</p>
    </div>
    <div>
      <h4>Follow Us</h4>
      <p>Twitter | Facebook | Instagram</p>
    </div>
  </footer>
</body>
</html>`,
  },
}
