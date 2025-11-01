# Bootstrap Sample Project - Personal Portfolio

This is a complete sample project using Bootstrap. You can use this as a template to practice Bootstrap concepts.

## Project Structure

\`\`\`
portfolio/
├── index.html
├── css/
│   └── style.css
├── images/
│   └── profile.jpg
└── js/
    └── main.js
\`\`\`

## Getting Started

1. Create a new folder called "portfolio"
2. Copy the HTML code below into `index.html`
3. Copy the CSS code into `css/style.css`
4. Add your own images and customize the content

## Files

### index.html

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#home">My Portfolio</a>
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
    <section id="home" class="hero bg-primary text-white text-center py-5">
        <div class="container">
            <h1 class="display-4 fw-bold">Welcome to My Portfolio</h1>
            <p class="lead">Web Developer | Designer | Creative Thinker</p>
            <a href="#projects" class="btn btn-light btn-lg mt-3">View My Work</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">About Me</h2>
            <div class="row align-items-center">
                <div class="col-md-6">
                    <img src="images/profile.jpg" class="img-fluid rounded-circle" alt="Profile">
                </div>
                <div class="col-md-6">
                    <p class="lead">I'm a passionate web developer with 5+ years of experience.</p>
                    <p>I specialize in creating responsive, user-friendly websites and applications using modern technologies like Bootstrap, HTML, CSS, and JavaScript.</p>
                    <ul class="list-unstyled">
                        <li>✓ Responsive Design</li>
                        <li>✓ Bootstrap Expert</li>
                        <li>✓ JavaScript Development</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">My Projects</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Project 1">
                        <div class="card-body">
                            <h5 class="card-title">E-Commerce Site</h5>
                            <p class="card-text">A fully responsive e-commerce platform built with Bootstrap.</p>
                            <a href="#" class="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Project 2">
                        <div class="card-body">
                            <h5 class="card-title">Blog Platform</h5>
                            <p class="card-text">A modern blog platform with Bootstrap styling.</p>
                            <a href="#" class="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Project 3">
                        <div class="card-body">
                            <h5 class="card-title">Task Manager</h5>
                            <p class="card-text">A task management app with Bootstrap components.</p>
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
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" id="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4">
        <div class="container">
            <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
\`\`\`

### css/style.css

\`\`\`css
:root {
    --primary-color: #0046FF;
    --secondary-color: #73C8D2;
    --dark-color: #1a1a1a;
    --light-color: #f5f5f5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

.hero {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    padding: 100px 0 !important;
}

.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-primary:hover {
    background-color: #0033cc;
    border-color: #0033cc;
}

img.rounded-circle {
    max-width: 300px;
    width: 100%;
}

section {
    padding: 60px 0;
}

@media (max-width: 768px) {
    .hero {
        padding: 50px 0 !important;
    }
    
    section {
        padding: 40px 0;
    }
}
\`\`\`

### js/main.js

\`\`\`javascript
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}
\`\`\`

## Try It Yourself

Copy these files and customize them with your own content and images. Experiment with different Bootstrap components and layouts!

### Key Bootstrap Concepts Used

- **Navigation Bar** - Responsive navigation with Bootstrap navbar
- **Grid System** - Using rows and columns for layout
- **Cards** - Displaying project information
- **Buttons** - Call-to-action buttons with Bootstrap styling
- **Forms** - Contact form with Bootstrap form controls
- **Responsive Images** - Using img-fluid and rounded-circle
- **Color Utilities** - Using Bootstrap color classes
- **Spacing Utilities** - Padding and margin utilities

Have fun learning Bootstrap!
