export const projectsData = {
  bootstrap: {
    title: "Bootstrap Portfolio Website",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Portfolio</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .navbar-brand {
      font-weight: bold;
      font-size: 1.5rem;
    }
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 100px 0;
      text-align: center;
    }
    .hero h1 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .project-card {
      transition: transform 0.3s ease;
    }
    .project-card:hover {
      transform: translateY(-10px);
    }
    .contact-form {
      max-width: 600px;
      margin: 0 auto;
    }
    footer {
      background-color: #f8f9fa;
      padding: 30px 0;
      margin-top: 50px;
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Portfolio</a>
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

  <!-- Hero Section -->
  <section class="hero" id="home">
    <div class="container">
      <h1>Welcome to My Portfolio</h1>
      <p class="lead">I'm a passionate web designer and developer</p>
      <button class="btn btn-light btn-lg">Get Started</button>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">About Me</h2>
      <div class="row">
        <div class="col-md-6">
          <p>I'm a full-stack developer with expertise in modern web technologies. I love creating responsive and beautiful websites that provide great user experiences.</p>
        </div>
        <div class="col-md-6">
          <p>With over 5 years of experience, I've worked on diverse projects ranging from small business websites to large-scale applications.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-5">Featured Projects</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card project-card h-100">
            <div class="card-body">
              <h5 class="card-title">E-commerce Store</h5>
              <p class="card-text">A fully functional online store with shopping cart and payment integration.</p>
              <a href="#" class="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card project-card h-100">
            <div class="card-body">
              <h5 class="card-title">Task Management App</h5>
              <p class="card-text">A collaborative task management application for teams.</p>
              <a href="#" class="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card project-card h-100">
            <div class="card-body">
              <h5 class="card-title">Social Media Dashboard</h5>
              <p class="card-text">Analytics dashboard for managing multiple social media accounts.</p>
              <a href="#" class="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">Get In Touch</h2>
      <form class="contact-form">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label class="form-label">Message</label>
          <textarea class="form-control" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container text-center">
      <p>&copy; 2025 My Portfolio. All rights reserved.</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"><\/script>
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
  <title>Magazine Layout</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Georgia', serif;
      background-color: #f5f5f5;
      padding: 20px;
    }
    
    header {
      text-align: center;
      margin-bottom: 40px;
      background: white;
      padding: 30px;
      border-bottom: 3px solid #333;
    }
    
    h1 {
      font-size: 3rem;
      color: #333;
      margin-bottom: 10px;
    }
    
    .tagline {
      color: #666;
      font-style: italic;
      font-size: 1.2rem;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 30px;
    }
    
    .featured {
      grid-column: 1;
      background: white;
      padding: 30px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin-bottom: 30px;
    }
    
    .featured h2 {
      font-size: 2.5rem;
      margin-bottom: 15px;
      color: #333;
    }
    
    .featured-image {
      width: 100%;
      height: 300px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
    }
    
    .featured p {
      line-height: 1.8;
      color: #555;
      font-size: 1.1rem;
    }
    
    .articles {
      grid-column: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .article-card {
      background: white;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    
    .article-card:hover {
      transform: translateY(-5px);
    }
    
    .article-card h3 {
      color: #333;
      margin-bottom: 10px;
      font-size: 1.3rem;
    }
    
    .article-card p {
      color: #666;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    
    .sidebar {
      grid-column: 2;
      grid-row: 1 / 3;
    }
    
    .widget {
      background: white;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .widget h4 {
      color: #333;
      margin-bottom: 15px;
      font-size: 1.2rem;
      border-bottom: 2px solid #667eea;
      padding-bottom: 10px;
    }
    
    .widget ul {
      list-style: none;
    }
    
    .widget li {
      padding: 8px 0;
      color: #555;
      border-bottom: 1px solid #eee;
    }
    
    .widget li:last-child {
      border-bottom: none;
    }
    
    .widget a {
      color: #667eea;
      text-decoration: none;
    }
    
    .widget a:hover {
      text-decoration: underline;
    }
    
    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr;
      }
      
      .sidebar {
        grid-column: 1;
        grid-row: auto;
      }
      
      .articles {
        grid-template-columns: 1fr;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      .featured h2 {
        font-size: 1.8rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Digital Magazine</h1>
    <p class="tagline">Discover amazing stories and insights</p>
  </header>
  
  <div class="container">
    <article class="featured">
      <h2>The Future of Web Design</h2>
      <div class="featured-image">Featured Article Image</div>
      <p>Web design continues to evolve with new technologies and user expectations. In this comprehensive guide, we explore the latest trends shaping the digital landscape. From responsive design to progressive web apps, the future is exciting and full of possibilities.</p>
    </article>
    
    <div class="articles">
      <article class="article-card">
        <h3>CSS Grid Mastery</h3>
        <p>Learn how to create complex layouts with CSS Grid. We cover the basics and advanced techniques to make you a grid expert.</p>
      </article>
      
      <article class="article-card">
        <h3>Flexbox Essentials</h3>
        <p>Flexbox is revolutionizing how we build layouts. Discover the power of flexible box layouts for responsive design.</p>
      </article>
      
      <article class="article-card">
        <h3>Mobile First Approach</h3>
        <p>Building for mobile first ensures your website works great on all devices. Learn the principles of mobile-first design.</p>
      </article>
      
      <article class="article-card">
        <h3>Web Performance Tips</h3>
        <p>Optimize your website for speed. We share practical tips to improve performance and user experience.</p>
      </article>
    </div>
    
    <aside class="sidebar">
      <div class="widget">
        <h4>Popular Articles</h4>
        <ul>
          <li><a href="#">Top 10 CSS Tips</a></li>
          <li><a href="#">JavaScript Best Practices</a></li>
          <li><a href="#">Responsive Design Guide</a></li>
          <li><a href="#">Web Security 101</a></li>
        </ul>
      </div>
      
      <div class="widget">
        <h4>Categories</h4>
        <ul>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">React</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Performance</a></li>
        </ul>
      </div>
      
      <div class="widget">
        <h4>Subscribe</h4>
        <p style="color: #666; margin-bottom: 15px;">Get the latest updates delivered to your inbox.</p>
        <input type="email" placeholder="Your email" style="width: 100%; padding: 10px; border: 1px solid #ddd; margin-bottom: 10px;">
        <button style="width: 100%; padding: 10px; background: #667eea; color: white; border: none; cursor: pointer;">Subscribe</button>
      </div>
    </aside>
  </div>
</body>
</html>`,
  },

  flexbox: {
    title: "Flexbox E-commerce Product Grid",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>E-commerce Store</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f9f9f9;
    }
    
    header {
      background: #222;
      color: white;
      padding: 20px 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }
    
    .logo {
      font-size: 1.8rem;
      font-weight: bold;
    }
    
    nav ul {
      display: flex;
      list-style: none;
      gap: 30px;
    }
    
    nav a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    nav a:hover {
      color: #667eea;
    }
    
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 60px 20px;
      text-align: center;
    }
    
    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }
    
    .hero p {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }
    
    .filters {
      max-width: 1200px;
      margin: 30px auto;
      padding: 0 20px;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
    }
    
    .filter-btn {
      padding: 10px 20px;
      border: 2px solid #ddd;
      background: white;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .filter-btn:hover,
    .filter-btn.active {
      border-color: #667eea;
      background: #667eea;
      color: white;
    }
    
    .products-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px 50px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-between;
    }
    
    .product-card {
      flex: 0 1 calc(25% - 15px);
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .product-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    
    .product-image {
      width: 100%;
      height: 200px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1rem;
    }
    
    .product-info {
      padding: 20px;
    }
    
    .product-title {
      font-size: 1.1rem;
      color: #333;
      margin-bottom: 10px;
    }
    
    .product-price {
      font-size: 1.5rem;
      color: #667eea;
      font-weight: bold;
      margin-bottom: 15px;
    }
    
    .product-rating {
      color: #ffc107;
      margin-bottom: 15px;
      font-size: 0.9rem;
    }
    
    .add-to-cart {
      width: 100%;
      padding: 10px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s;
    }
    
    .add-to-cart:hover {
      background: #764ba2;
    }
    
    footer {
      background: #222;
      color: white;
      padding: 40px 20px;
      margin-top: 50px;
    }
    
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 40px;
    }
    
    .footer-section h3 {
      margin-bottom: 20px;
    }
    
    .footer-section ul {
      list-style: none;
    }
    
    .footer-section li {
      margin-bottom: 10px;
    }
    
    .footer-section a {
      color: #ddd;
      text-decoration: none;
    }
    
    .footer-section a:hover {
      color: #667eea;
    }
    
    @media (max-width: 1024px) {
      .product-card {
        flex: 0 1 calc(33.333% - 15px);
      }
    }
    
    @media (max-width: 768px) {
      .product-card {
        flex: 0 1 calc(50% - 10px);
      }
      
      nav ul {
        gap: 15px;
      }
      
      .hero h1 {
        font-size: 1.8rem;
      }
      
      .footer-content {
        flex-direction: column;
        gap: 20px;
      }
    }
    
    @media (max-width: 480px) {
      .product-card {
        flex: 0 1 100%;
      }
      
      .header-content {
        flex-direction: column;
        gap: 15px;
      }
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <div class="header-content">
      <div class="logo">🛍️ Store</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <!-- Hero Section -->
  <section class="hero" id="home">
    <h1>Welcome to Our Store</h1>
    <p>Discover amazing products at great prices</p>
  </section>
  
  <!-- Filters -->
  <div class="filters">
    <span style="font-weight: bold;">Filter by:</span>
    <button class="filter-btn active">All</button>
    <button class="filter-btn">Electronics</button>
    <button class="filter-btn">Fashion</button>
    <button class="filter-btn">Books</button>
  </div>
  
  <!-- Products Grid -->
  <div class="products-container" id="products">
    <div class="product-card">
      <div class="product-image">Wireless Headphones</div>
      <div class="product-info">
        <div class="product-title">Wireless Headphones</div>
        <div class="product-price">$79.99</div>
        <div class="product-rating">★★★★★ (128 reviews)</div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
    
    <div class="product-card">
      <div class="product-image">Smart Watch</div>
      <div class="product-info">
        <div class="product-title">Smart Watch</div>
        <div class="product-price">$199.99</div>
        <div class="product-rating">★★★★☆ (89 reviews)</div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
    
    <div class="product-card">
      <div class="product-image">USB-C Cable</div>
      <div class="product-info">
        <div class="product-title">USB-C Cable</div>
        <div class="product-price">$12.99</div>
        <div class="product-rating">★★★★★ (245 reviews)</div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
    
    <div class="product-card">
      <div class="product-image">Laptop Stand</div>
      <div class="product-info">
        <div class="product-title">Laptop Stand</div>
        <div class="product-price">$45.99</div>
        <div class="product-rating">★★★★★ (156 reviews)</div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
    
    <div class="product-card">
      <div class="product-image">Mechanical Keyboard</div>
      <div class="product-info">
        <div class="product-title">Mechanical Keyboard</div>
        <div class="product-price">$149.99</div>
        <div class="product-rating">★★★★☆ (234 reviews)</div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
    
    <div class="product-card">
      <div class="product-image">Wireless Mouse</div>
      <div class="product-info">
        <div class="product-title">Wireless Mouse</div>
        <div class="product-price">$34.99</div>
        <div class="product-rating">★★★★★ (178 reviews)</div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
    
    <div class="product-card">
      <div class="product-image">4K Webcam</div>
      <div class="product-info">
        <div class="product-title">4K Webcam</div>
        <div class="product-price">$89.99</div>
        <div class="product-rating">★★★★★ (312 reviews)</div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
    
    <div class="product-card">
      <div class="product-image">Phone Stand</div>
      <div class="product-info">
        <div class="product-title">Phone Stand</div>
        <div class="product-price">$19.99</div>
        <div class="product-rating">★★★★☆ (95 reviews)</div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </div>
  
  <!-- Footer -->
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Support</h3>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Returns</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Legal</h3>
        <ul>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>
    </div>
  </footer>
</body>
</html>`,
  },
}
