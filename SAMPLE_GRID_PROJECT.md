# Magazine Layout - CSS Grid Sample Project

## Project Overview
Build a modern magazine-style website using CSS Grid. This project demonstrates advanced grid layouts, responsive design, and grid template areas.

## Learning Outcomes
- Master CSS Grid system
- Use grid-template-areas for semantic layouts
- Implement responsive grid with auto-fit and minmax
- Create complex multi-column layouts
- Work with grid gaps and alignment

## Project Structure
\`\`\`
magazine-layout/
├── index.html
├── css/
│   └── style.css
└── images/
    ├── featured.jpg
    ├── article1.jpg
    ├── article2.jpg
    └── article3.jpg
\`\`\`

## Files

### index.html
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Magazine - CSS Grid Layout</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1>TECH MAGAZINE</h1>
            <p>Your source for technology news and insights</p>
        </header>

        <!-- Navigation -->
        <nav class="nav">
            <a href="#home">Home</a>
            <a href="#tech">Technology</a>
            <a href="#science">Science</a>
            <a href="#innovation">Innovation</a>
            <a href="#about">About</a>
        </nav>

        <!-- Main Content -->
        <main class="main">
            <!-- Featured Article -->
            <article class="featured">
                <img src="https://via.placeholder.com/800x400" alt="Featured Article">
                <div class="featured-content">
                    <h2>The Future of AI in Web Development</h2>
                    <p>Exploring how artificial intelligence is transforming the way we build web applications and automate development processes.</p>
                    <a href="#" class="btn">Read More</a>
                </div>
            </article>

            <!-- Articles Grid -->
            <section class="articles">
                <article class="article-card">
                    <img src="https://via.placeholder.com/300x200" alt="Article 1">
                    <h3>React 19 Features</h3>
                    <p>Discover the new features and improvements in React 19 framework.</p>
                    <a href="#" class="btn">Read</a>
                </article>

                <article class="article-card">
                    <img src="https://via.placeholder.com/300x200" alt="Article 2">
                    <h3>CSS Grid Mastery</h3>
                    <p>Learn advanced CSS Grid techniques for creating complex layouts.</p>
                    <a href="#" class="btn">Read</a>
                </article>

                <article class="article-card">
                    <img src="https://via.placeholder.com/300x200" alt="Article 3">
                    <h3>JavaScript Best Practices</h3>
                    <p>Industry standards and best practices for writing clean JavaScript code.</p>
                    <a href="#" class="btn">Read</a>
                </article>

                <article class="article-card">
                    <img src="https://via.placeholder.com/300x200" alt="Article 4">
                    <h3>Web Performance Tips</h3>
                    <p>Optimize your website for faster loading and better performance.</p>
                    <a href="#" class="btn">Read</a>
                </article>

                <article class="article-card">
                    <img src="https://via.placeholder.com/300x200" alt="Article 5">
                    <h3>TypeScript Guide</h3>
                    <p>Complete guide to using TypeScript in your projects.</p>
                    <a href="#" class="btn">Read</a>
                </article>

                <article class="article-card">
                    <img src="https://via.placeholder.com/300x200" alt="Article 6">
                    <h3>Web3 Development</h3>
                    <p>Introduction to blockchain and Web3 application development.</p>
                    <a href="#" class="btn">Read</a>
                </article>
            </section>
        </main>

        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="widget">
                <h4>Trending</h4>
                <ul>
                    <li><a href="#">AI Revolution</a></li>
                    <li><a href="#">Web Performance</a></li>
                    <li><a href="#">JavaScript Tips</a></li>
                    <li><a href="#">CSS Techniques</a></li>
                </ul>
            </div>

            <div class="widget">
                <h4>Categories</h4>
                <ul>
                    <li><a href="#">Programming</a></li>
                    <li><a href="#">Tools & Tech</a></li>
                    <li><a href="#">Tutorials</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
            </div>

            <div class="widget">
                <h4>Newsletter</h4>
                <p>Subscribe to get latest articles</p>
                <input type="email" placeholder="Your email">
                <button>Subscribe</button>
            </div>
        </aside>

        <!-- Footer -->
        <footer class="footer">
            <p>&copy; 2025 Tech Magazine. All rights reserved.</p>
        </footer>
    </div>

    <script src="js/main.js"></script>
</body>
</html>
\`\`\`

### css/style.css
\`\`\`css
/* CSS Grid Magazine Layout */

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

.container {
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto auto auto 1fr auto;
    grid-template-areas:
        "header header"
        "nav nav"
        "main sidebar"
        "main sidebar"
        "footer footer";
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    min-height: 100vh;
}

/* Header */
.header {
    grid-area: header;
    background: linear-gradient(135deg, #0046FF 0%, #0061FF 100%);
    color: white;
    padding: 40px 20px;
    border-radius: 8px;
    text-align: center;
}

.header h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 10px;
}

.header p {
    font-size: 1.1rem;
    opacity: 0.9;
}

/* Navigation */
.nav {
    grid-area: nav;
    display: flex;
    gap: 20px;
    padding: 15px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    transition: color 0.3s;
}

.nav a:hover {
    color: #0046FF;
}

/* Main Content */
.main {
    grid-area: main;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

/* Featured Article */
.featured {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.featured img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.featured-content {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.featured-content h2 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #0046FF;
}

.featured-content p {
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #666;
}

/* Articles Grid */
.articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.article-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
}

.article-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.article-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.article-card h3 {
    padding: 15px 15px 10px;
    font-size: 1.2rem;
    color: #0046FF;
}

.article-card p {
    padding: 0 15px 15px;
    color: #666;
    flex-grow: 1;
}

/* Sidebar */
.sidebar {
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.widget {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.widget h4 {
    color: #0046FF;
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.widget ul {
    list-style: none;
}

.widget ul li {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
}

.widget ul li:last-child {
    border-bottom: none;
}

.widget ul a {
    text-decoration: none;
    color: #666;
    transition: color 0.3s;
}

.widget ul a:hover {
    color: #0046FF;
}

.widget input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
}

.widget button {
    width: 100%;
    padding: 10px;
    background-color: #0046FF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
}

.widget button:hover {
    background-color: #0038cc;
}

/* Button */
.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #0046FF;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
    font-weight: 600;
    border: none;
    cursor: pointer;
}

.btn:hover {
    background-color: #0038cc;
}

/* Footer */
.footer {
    grid-area: footer;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "nav"
            "main"
            "sidebar"
            "footer";
    }

    .header h1 {
        font-size: 2rem;
    }

    .featured {
        grid-template-columns: 1fr;
    }

    .featured-content h2 {
        font-size: 1.5rem;
    }

    .articles {
        grid-template-columns: 1fr;
    }

    .nav {
        flex-wrap: wrap;
        gap: 10px;
    }
}
\`\`\`

## Key Concepts Demonstrated
- ✅ CSS Grid Basic Setup
- ✅ Grid Template Areas
- ✅ Responsive Grid with auto-fit
- ✅ Grid Gaps and Alignment
- ✅ Responsive Design
- ✅ Box Shadows and Hover Effects
- ✅ Image Objects Fit

## Challenges to Try
1. Add a 4-column grid for small screens
2. Create a masonry-style layout
3. Implement a dark mode
4. Add animations on scroll
5. Create a dashboard with mixed grid sizes
