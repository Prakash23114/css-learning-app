# Bootstrap Portfolio Website - Sample Project

## Project Overview
Build a complete responsive portfolio website using Bootstrap 5. This project demonstrates grid system, components, and responsive design.

## Learning Outcomes
- Use Bootstrap grid system (12-column layout)
- Implement Bootstrap components (navbar, cards, buttons)
- Create responsive layouts
- Use Bootstrap utilities for spacing and styling
- Build a complete website from scratch

## Project Structure
\`\`\`
bootstrap-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── hero.jpg
    ├── project1.jpg
    ├── project2.jpg
    └── project3.jpg
\`\`\`

## Files

### index.html
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - John Developer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold" href="#home">Portfolio</a>
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
    <section id="home" class="hero-section bg-primary text-white py-5">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 fw-bold mb-3">Hi, I'm John Developer</h1>
                    <p class="lead mb-4">Full-stack developer passionate about creating beautiful and functional web applications.</p>
                    <button class="btn btn-light btn-lg">Download CV</button>
                </div>
                <div class="col-lg-6 text-center">
                    <img src="https://via.placeholder.com/400" class="img-fluid rounded-circle" alt="Profile">
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5 display-5">About Me</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <h5 class="card-title">Frontend</h5>
                            <p class="card-text">Expert in HTML, CSS, JavaScript, React, and Bootstrap.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <h5 class="card-title">Backend</h5>
                            <p class="card-text">Experienced with Node.js, Express, MongoDB, and SQL databases.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <h5 class="card-title">Tools</h5>
                            <p class="card-text">Git, Docker, VS Code, and various development tools.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5 display-5">Featured Projects</h2>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Project 1">
                        <div class="card-body">
                            <h5 class="card-title">E-commerce Platform</h5>
                            <p class="card-text">A full-stack e-commerce solution with payment integration.</p>
                            <a href="#" class="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Project 2">
                        <div class="card-body">
                            <h5 class="card-title">Task Management App</h5>
                            <p class="card-text">React-based app for managing tasks and projects efficiently.</p>
                            <a href="#" class="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Project 3">
                        <div class="card-body">
                            <h5 class="card-title">Blog Platform</h5>
                            <p class="card-text">Content management system built with Node.js and MongoDB.</p>
                            <a href="#" class="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5 bg-dark text-white">
        <div class="container">
            <h2 class="text-center mb-5 display-5">Get In Touch</h2>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Your Name" required>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Your Email" required>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-secondary text-white text-center py-4">
        <p>&copy; 2025 John Developer. All rights reserved.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
\`\`\`

### css/style.css
\`\`\`css
/* Custom Styles */
:root {
    --primary: #0046FF;
    --secondary: #333;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
}

.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #0046FF 0%, #0061FF 100%);
}

.hero-section h1 {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.2;
}

.hero-section .lead {
    font-size: 1.25rem;
    font-weight: 300;
}

.card {
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary {
    background-color: var(--primary);
    border: none;
}

.btn-primary:hover {
    background-color: #0038cc;
}

section {
    scroll-margin-top: 80px;
}

@media (max-width: 768px) {
    .hero-section h1 {
        font-size: 2.5rem;
    }

    .hero-section .lead {
        font-size: 1rem;
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
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
\`\`\`

## Key Concepts Demonstrated
- ✅ Bootstrap Grid System (12 columns)
- ✅ Responsive Navigation Bar
- ✅ Card Components
- ✅ Button Styling
- ✅ Form Controls
- ✅ Utility Classes
- ✅ Flexbox Alignment
- ✅ Bootstrap Colors & Spacing

## Challenges to Try
1. Add a testimonials section with Bootstrap carousel
2. Implement a dark/light mode toggle
3. Add animations on scroll
4. Create a blog section with Bootstrap grid
5. Add a skills progress bar section
