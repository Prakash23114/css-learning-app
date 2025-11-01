const lessonsData = {
  bootstrap: {
    title: "CSS Bootstrap",
    lessons: [
      {
        name: "BS Home",
        content:
          "Introduction to Bootstrap and its purpose in modern web design. Bootstrap is a powerful front-end framework that helps you build responsive, mobile-first websites quickly.",
        examples: [
          {
            title: "What is Bootstrap?",
            description:
              "Bootstrap is a free, open-source front-end framework that provides pre-built components, utilities, and a responsive grid system.",
            code: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container mt-5">
  <h1 class="display-4">Welcome to Bootstrap</h1>
  <p class="lead">Build fast, responsive sites with Bootstrap</p>
  <button class="btn btn-primary btn-lg">Get Started</button>
</div>`,
          },
          {
            title: "Why Use Bootstrap?",
            description:
              "Bootstrap provides:\n• Pre-designed components (buttons, cards, modals)\n• Responsive grid system\n• Mobile-first approach\n• Browser compatibility\n• Customizable themes",
            code: `<div class="container-fluid bg-light py-5">
  <div class="row g-4">
    <div class="col-md-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Responsive</h5>
          <p class="card-text">Works on all devices</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Fast</h5>
          <p class="card-text">Pre-built components</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
          },
        ],
      },
      {
        name: "BS Get Started",
        content:
          "How to include Bootstrap via CDN or download locally. You can include Bootstrap by linking to the CDN in your HTML head tag or by downloading and linking local files.",
        examples: [
          {
            title: "Using Bootstrap CDN",
            description: "The easiest way to get started with Bootstrap is using the CDN (Content Delivery Network).",
            code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <title>My Bootstrap Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  
  <!-- Bootstrap JavaScript -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
          },
        ],
      },
      {
        name: "BS Grid System",
        content:
          "Understanding the Bootstrap grid system with rows and columns. The grid system allows you to create responsive layouts using a 12-column system.",
        examples: [
          {
            title: "12-Column Grid System",
            description: "Bootstrap uses a 12-column grid system. Each row can be divided into 12 equal columns.",
            code: `<div class="container">
  <div class="row">
    <div class="col-md-4 border p-3">Column 1 (1/3)</div>
    <div class="col-md-4 border p-3">Column 2 (1/3)</div>
    <div class="col-md-4 border p-3">Column 3 (1/3)</div>
  </div>
  
  <div class="row mt-3">
    <div class="col-md-6 border p-3">Half Width</div>
    <div class="col-md-6 border p-3">Half Width</div>
  </div>
</div>`,
          },
          {
            title: "Responsive Columns",
            description: "Use responsive classes to change column sizes at different screen sizes.",
            code: `<div class="container">
  <div class="row">
    <!-- Full width on mobile, 1/2 on tablet, 1/4 on desktop -->
    <div class="col-12 col-md-6 col-lg-3 border p-3">Responsive Column</div>
    <div class="col-12 col-md-6 col-lg-3 border p-3">Responsive Column</div>
    <div class="col-12 col-md-6 col-lg-3 border p-3">Responsive Column</div>
    <div class="col-12 col-md-6 col-lg-3 border p-3">Responsive Column</div>
  </div>
</div>`,
          },
        ],
      },
      {
        name: "BS Grid Basic",
        content:
          "Basic example of Bootstrap grid layout. Start with a container, add rows, then add columns with appropriate classes like col-md-6.",
        examples: [
          {
            title: "Basic Layout Structure",
            description: "Container → Row → Columns creates a responsive layout.",
            code: `<div class="container my-5">
  <div class="row">
    <div class="col-md-8">
      <h2>Main Content</h2>
      <p>This takes up 2/3 of the width on medium screens and up.</p>
    </div>
    <div class="col-md-4">
      <h3>Sidebar</h3>
      <p>This takes up 1/3 of the width.</p>
    </div>
  </div>
</div>`,
          },
        ],
      },
      {
        name: "BS Typography",
        content:
          "Using Bootstrap typography utilities for headings and text. Bootstrap provides predefined styles for headings (h1-h6) and text elements.",
        examples: [
          {
            title: "Heading Styles",
            description: "Bootstrap provides consistent heading styles from h1 to h6.",
            code: `<div class="container">
  <h1>Heading 1 - Display Large</h1>
  <h2>Heading 2 - Very Large</h2>
  <h3>Heading 3 - Large</h3>
  <h4>Heading 4 - Medium</h4>
  <h5>Heading 5 - Small</h5>
  <h6>Heading 6 - Very Small</h6>
  
  <p class="lead">This is a lead paragraph with larger text.</p>
  <p class="text-muted">This text is muted (gray).</p>
</div>`,
          },
        ],
      },
      {
        name: "BS Tables",
        content:
          "Styling tables with Bootstrap classes. Use the table class along with variants like table-striped, table-hover, and table-bordered.",
        examples: [
          {
            title: "Basic Table Styling",
            description: "Apply Bootstrap table classes for professional-looking tables.",
            code: `<div class="container">
  <table class="table table-striped table-hover">
    <thead class="table-dark">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>Smith</td>
        <td>jane@example.com</td>
      </tr>
    </tbody>
  </table>
</div>`,
          },
        ],
      },
      {
        name: "BS Images",
        content:
          "Responsive images and image utilities in Bootstrap. The img-fluid class makes images responsive by setting max-width: 100%.",
        examples: [
          {
            title: "Responsive Images",
            description: "Use img-fluid class to make images responsive and scale with their parent container.",
            code: `<div class="container">
  <!-- Responsive image -->
  <img src="image.jpg" class="img-fluid" alt="Responsive image">
  
  <!-- Rounded image -->
  <img src="image.jpg" class="img-fluid rounded" alt="Rounded image">
  
  <!-- Image in a card -->
  <div class="card" style="width: 300px;">
    <img src="image.jpg" class="card-img-top" alt="Card image">
    <div class="card-body">
      <h5 class="card-title">Card Title</h5>
    </div>
  </div>
</div>`,
          },
        ],
      },
      {
        name: "BS Buttons",
        content:
          "Bootstrap button styles and sizes. Use btn class with variants like btn-primary, btn-secondary, and sizes like btn-lg, btn-sm.",
        examples: [
          {
            title: "Button Variants and Sizes",
            description: "Bootstrap provides multiple button styles and sizes for different use cases.",
            code: `<div class="container p-5">
  <!-- Button Variants -->
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-danger">Danger</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-info">Info</button>
  
  <!-- Button Sizes -->
  <br/><br/>
  <button class="btn btn-primary btn-lg">Large Button</button>
  <button class="btn btn-primary">Normal Button</button>
  <button class="btn btn-primary btn-sm">Small Button</button>
  
  <!-- Button Group -->
  <br/><br/>
  <div class="btn-group" role="group">
    <button class="btn btn-outline-primary">Left</button>
    <button class="btn btn-outline-primary">Middle</button>
    <button class="btn btn-outline-primary">Right</button>
  </div>
</div>`,
          },
        ],
      },
    ],
  },
  grid: {
    title: "CSS Grid",
    lessons: [
      {
        name: "CSS Grid System",
        content:
          "Understanding the basic concept of CSS Grid layout. CSS Grid is a powerful 2D layout system that allows you to create complex layouts easily. Unlike Flexbox which works in one dimension, Grid works in two dimensions, handling both rows and columns simultaneously.",
        examples: [
          {
            title: "What is CSS Grid?",
            description:
              "CSS Grid is a two-dimensional layout system designed for creating complex layouts. It works with both rows and columns at the same time.",
            code: `<style>
  .grid-demo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding: 20px;
  }
  .grid-item {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
  }
</style>

<div class="grid-demo">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>`,
          },
          {
            title: "Why Use Grid?",
            description:
              "Grid excels at creating:\n• 2D layouts with precise control\n• Complex page structures\n• Responsive designs\n• Alignment in both axes",
            code: `<style>
  .grid-benefits {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  }
  .benefit-card {
    background: #f0f4ff;
    padding: 20px;
    border-left: 4px solid #667eea;
    border-radius: 4px;
  }
  .benefit-card h4 {
    margin-top: 0;
    color: #667eea;
  }
</style>

<div class="grid-benefits">
  <div class="benefit-card">
    <h4>2D Control</h4>
    <p>Place items anywhere in rows and columns</p>
  </div>
  <div class="benefit-card">
    <h4>Responsive</h4>
    <p>Auto-fit and auto-fill for flexible layouts</p>
  </div>
  <div class="benefit-card">
    <h4>Alignment</h4>
    <p>Align items on both main and cross axes</p>
  </div>
  <div class="benefit-card">
    <h4>Complex Layouts</h4>
    <p>Create sophisticated designs with less code</p>
  </div>
</div>`,
          },
        ],
      },
      {
        name: "Grid Container",
        content:
          "Defining grid containers and their properties. Use display: grid to create a grid container and set grid-template-columns and grid-template-rows.",
        examples: [
          {
            title: "Creating a Grid Container",
            description: "Use 'display: grid' to establish a grid container. Then define columns and rows.",
            code: `<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto auto;
    gap: 15px;
    padding: 20px;
    background: #f9f9f9;
  }
  .grid-cell {
    background: #667eea;
    color: white;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
  }
</style>

<div class="grid-container">
  <div class="grid-cell">1fr</div>
  <div class="grid-cell">2fr (Double width)</div>
  <div class="grid-cell">1fr</div>
  <div class="grid-cell">Auto Height</div>
  <div class="grid-cell">Auto Height</div>
  <div class="grid-cell">Auto Height</div>
</div>`,
          },
          {
            title: "Fixed and Flexible Sizes",
            description: "Mix fixed pixel sizes with flexible fr (fractional) units.",
            code: `<style>
  .mixed-grid {
    display: grid;
    grid-template-columns: 200px 1fr 150px;
    gap: 15px;
    padding: 20px;
  }
  .cell {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 4px;
    text-align: center;
  }
</style>

<div class="mixed-grid">
  <div class="cell">200px Fixed</div>
  <div class="cell">Flexible (1fr)</div>
  <div class="cell">150px Fixed</div>
</div>`,
          },
        ],
      },
      {
        name: "Grid Tracks",
        content:
          "Working with rows, columns, and track sizing. You can use fixed sizes, fr units, or auto for flexible sizing.",
        examples: [
          {
            title: "Understanding Tracks",
            description:
              "Tracks are the columns and rows that make up your grid. Use repeat() for repetitive patterns.",
            code: `<style>
  .tracks-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 20px;
  }
  .track-item {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
  }
</style>

<div class="tracks-grid">
  <div class="track-item">Column 1</div>
  <div class="track-item">Column 2</div>
  <div class="track-item">Column 3</div>
  <div class="track-item">Column 4</div>
  <div class="track-item">Column 5</div>
  <div class="track-item">Column 6</div>
  <div class="track-item">Column 7</div>
  <div class="track-item">Column 8</div>
</div>`,
          },
          {
            title: "repeat() Function",
            description: "The repeat() function simplifies defining multiple tracks of the same size.",
            code: `<style>
  .repeat-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    gap: 15px;
    padding: 20px;
  }
  .item {
    background: #667eea;
    color: white;
    padding: 30px;
    border-radius: 4px;
    text-align: center;
  }
</style>

<div class="repeat-grid">
  <div class="item">Flexible</div>
  <div class="item">Min: 150px</div>
  <div class="item">Max: 1fr</div>
  <div class="item">Flexible</div>
  <div class="item">Min: 150px</div>
  <div class="item">Max: 1fr</div>
</div>`,
          },
        ],
      },
      {
        name: "Grid Gaps",
        content:
          "Using grid-gap, row-gap, and column-gap for spacing. Gaps create space between grid items without affecting the grid items themselves.",
        examples: [
          {
            title: "Gap Property",
            description: "Use gap to create space between grid items. You can use grid-gap, row-gap, or column-gap.",
            code: `<style>
  .gap-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
  }
  .gap-item {
    background: #667eea;
    color: white;
    padding: 30px;
    border-radius: 4px;
    text-align: center;
  }
</style>

<div class="gap-grid">
  <div class="gap-item">Gap: 20px</div>
  <div class="gap-item">Applied to</div>
  <div class="gap-item">All directions</div>
  <div class="gap-item">Space between</div>
  <div class="gap-item">All items</div>
  <div class="gap-item">Equally</div>
</div>`,
          },
          {
            title: "Row and Column Gaps",
            description: "Set different gaps for rows and columns separately.",
            code: `<style>
  .different-gaps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 10px;
    padding: 20px;
  }
  .gap-item {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 4px;
    text-align: center;
  }
</style>

<div class="different-gaps">
  <div class="gap-item">Row-gap: 30px</div>
  <div class="gap-item">Column-gap: 10px</div>
  <div class="gap-item">Mix & match</div>
  <div class="gap-item">Different spacing</div>
  <div class="gap-item">Between items</div>
  <div class="gap-item">As needed</div>
</div>`,
          },
        ],
      },
      {
        name: "Grid Template Areas",
        content:
          "Defining named grid areas for layout design. Use grid-template-areas to create semantic layout structures.",
        examples: [
          {
            title: "Named Grid Areas",
            description: "Use grid-template-areas to create semantic names for layout regions.",
            code: `<style>
  .layout-grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: 
      "header header header"
      "sidebar main aside"
      "footer footer footer";
    gap: 15px;
    padding: 20px;
    height: 600px;
  }
  .header { grid-area: header; background: #667eea; }
  .sidebar { grid-area: sidebar; background: #764ba2; }
  .main { grid-area: main; background: #f093fb; }
  .aside { grid-area: aside; background: #764ba2; }
  .footer { grid-area: footer; background: #667eea; }
  .layout-item {
    color: white;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
</style>

<div class="layout-grid">
  <div class="header layout-item">Header</div>
  <div class="sidebar layout-item">Sidebar</div>
  <div class="main layout-item">Main Content</div>
  <div class="aside layout-item">Aside</div>
  <div class="footer layout-item">Footer</div>
</div>`,
          },
          {
            title: "Responsive Grid Areas",
            description: "Change grid areas at different screen sizes for responsive layouts.",
            code: `<style>
  .responsive-grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: 
      "header header header"
      "sidebar main aside"
      "footer footer footer";
    gap: 15px;
    padding: 20px;
    height: 500px;
  }
  .grid-header { grid-area: header; background: #667eea; }
  .grid-sidebar { grid-area: sidebar; background: #764ba2; }
  .grid-main { grid-area: main; background: #f093fb; }
  .grid-aside { grid-area: aside; background: #764ba2; }
  .grid-footer { grid-area: footer; background: #667eea; }
  .area-item {
    color: white;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
</style>

<div class="responsive-grid">
  <div class="grid-header area-item">Header</div>
  <div class="grid-sidebar area-item">Sidebar</div>
  <div class="grid-main area-item">Main</div>
  <div class="grid-aside area-item">Aside</div>
  <div class="grid-footer area-item">Footer</div>
</div>`,
          },
        ],
      },
      {
        name: "Grid Examples",
        content:
          "Practical examples using CSS Grid to build layouts. Learn how to create magazine layouts, dashboard grids, and responsive designs.",
        examples: [
          {
            title: "Magazine Layout",
            description: "Create a magazine-style layout with featured article and smaller items.",
            code: `<style>
  .magazine {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 15px;
    padding: 20px;
  }
  .featured {
    grid-row: span 2;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  .article {
    background: #667eea;
  }
  .mag-item {
    color: white;
    padding: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    min-height: 150px;
  }
</style>

<div class="magazine">
  <div class="mag-item featured">Featured Article</div>
  <div class="mag-item article">Article 1</div>
  <div class="mag-item article">Article 2</div>
  <div class="mag-item article">Article 3</div>
  <div class="mag-item article">Article 4</div>
</div>`,
          },
          {
            title: "Dashboard Grid",
            description: "Create a responsive dashboard with various sized widgets.",
            code: `<style>
  .dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    padding: 20px;
  }
  .widget {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  .widget.large {
    grid-column: span 2;
  }
</style>

<div class="dashboard">
  <div class="widget large">Large Widget</div>
  <div class="widget">Widget 1</div>
  <div class="widget">Widget 2</div>
  <div class="widget">Widget 3</div>
  <div class="widget">Widget 4</div>
</div>`,
          },
        ],
      },
    ],
  },
  flexbox: {
    title: "CSS Flexbox",
    lessons: [
      {
        name: "Flexbox Intro",
        content:
          "Introduction to CSS Flexbox and its benefits. Flexbox is a one-dimensional layout system that excels at aligning and distributing items in a container.",
        examples: [
          {
            title: "What is Flexbox?",
            description:
              "Flexbox is a one-dimensional layout system perfect for distributing space and aligning items in a single direction.",
            code: `<style>
  .flex-demo {
    display: flex;
    gap: 15px;
    padding: 20px;
    background: #f9f9f9;
  }
  .flex-item {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    flex: 1;
  }
</style>

<div class="flex-demo">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`,
          },
          {
            title: "Why Use Flexbox?",
            description:
              "Flexbox is ideal for:\n• Aligning items in one dimension\n• Dynamic spacing distribution\n• Navigation menus\n• Centering content",
            code: `<style>
  .flex-benefits {
    display: flex;
    gap: 15px;
    padding: 20px;
    flex-wrap: wrap;
  }
  .benefit {
    background: #667eea;
    color: white;
    padding: 15px 20px;
    border-radius: 4px;
    flex: 1;
    min-width: 150px;
    text-align: center;
  }
</style>

<div class="flex-benefits">
  <div class="benefit">Simple</div>
  <div class="benefit">Flexible</div>
  <div class="benefit">Responsive</div>
  <div class="benefit">Powerful</div>
</div>`,
          },
        ],
      },
      {
        name: "Flex Container",
        content:
          "How to use flex containers and main-axis alignment. Use display: flex to create a flex container and justify-content to align items along the main axis.",
        examples: [
          {
            title: "Creating a Flex Container",
            description: "Use 'display: flex' to make a container and its children flexible.",
            code: `<style>
  .flex-container {
    display: flex;
    gap: 15px;
    padding: 20px;
    background: #f9f9f9;
  }
  .flex-item {
    background: #667eea;
    color: white;
    padding: 20px;
    border-radius: 4px;
    flex: 1;
    text-align: center;
  }
</style>

<div class="flex-container">
  <div class="flex-item">Flexible Item 1</div>
  <div class="flex-item">Flexible Item 2</div>
  <div class="flex-item">Flexible Item 3</div>
</div>`,
          },
          {
            title: "justify-content Alignment",
            description: "Use justify-content to align items along the main axis (horizontal by default).",
            code: `<style>
  .justify-demo {
    display: flex;
    justify-content: space-around;
    gap: 15px;
    padding: 20px;
    background: #f9f9f9;
  }
  .justify-item {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px 20px;
    border-radius: 4px;
    width: 80px;
    text-align: center;
  }
</style>

<div class="justify-demo">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>`,
          },
        ],
      },
      {
        name: "Flex Items",
        content:
          "Properties for individual flex items like order, grow, shrink. Control how flex items grow, shrink, and reorder within the flex container.",
        examples: [
          {
            title: "Flex Grow and Shrink",
            description: "Use flex-grow to control how items expand and flex-shrink to control shrinking.",
            code: `<style>
  .flex-grow-demo {
    display: flex;
    gap: 15px;
    padding: 20px;
    height: 150px;
  }
  .grow-1 {
    background: #667eea;
    color: white;
    flex-grow: 1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grow-2 {
    background: #764ba2;
    color: white;
    flex-grow: 2;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="flex-grow-demo">
  <div class="grow-1">flex-grow: 1</div>
  <div class="grow-2">flex-grow: 2</div>
  <div class="grow-1">flex-grow: 1</div>
</div>`,
          },
          {
            title: "Item Order",
            description: "Use the order property to reorder flex items without changing the HTML.",
            code: `<style>
  .order-demo {
    display: flex;
    gap: 15px;
    padding: 20px;
  }
  .order-item {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 4px;
    flex: 1;
    text-align: center;
  }
  .order-1 { order: 1; }
  .order-2 { order: 2; }
  .order-3 { order: 3; }
</style>

<div class="order-demo">
  <div class="order-item order-3">Third (order: 3)</div>
  <div class="order-item order-1">First (order: 1)</div>
  <div class="order-item order-2">Second (order: 2)</div>
</div>`,
          },
        ],
      },
      {
        name: "Flex Responsive",
        content:
          "Making layouts responsive with Flexbox. Use flex-wrap and media queries to create responsive layouts that adapt to different screen sizes.",
        examples: [
          {
            title: "Flex Wrap",
            description: "Use flex-wrap to allow items to wrap to multiple lines when needed.",
            code: `<style>
  .flex-wrap-demo {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px;
  }
  .wrap-item {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 4px;
    min-width: 120px;
    text-align: center;
  }
</style>

<div class="flex-wrap-demo">
  <div class="wrap-item">Item 1</div>
  <div class="wrap-item">Item 2</div>
  <div class="wrap-item">Item 3</div>
  <div class="wrap-item">Item 4</div>
  <div class="wrap-item">Item 5</div>
</div>`,
          },
          {
            title: "Responsive Navigation",
            description: "Create a navigation menu using Flexbox that adapts to different screen sizes.",
            code: `<style>
  .nav-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #667eea;
    color: white;
    gap: 20px;
    flex-wrap: wrap;
  }
  .nav-brand {
    font-weight: bold;
    font-size: 18px;
  }
  .nav-links {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
  .nav-link {
    color: white;
    text-decoration: none;
  }
</style>

<nav class="nav-flex">
  <div class="nav-brand">Logo</div>
  <div class="nav-links">
    <a class="nav-link" href="#">Home</a>
    <a class="nav-link" href="#">About</a>
    <a class="nav-link" href="#">Contact</a>
  </div>
</nav>`,
          },
        ],
      },
    ],
  },
}

export default lessonsData
