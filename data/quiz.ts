const quizData = {
  bootstrap: {
    questions: [
      {
        question: "What is Bootstrap primarily used for?",
        options: [
          "Loading animation framework",
          "Front-end framework for responsive web design",
          "Backend server framework",
          "Mobile app development",
        ],
        correctAnswer: 1,
        explanation:
          "Bootstrap is a front-end framework designed to help developers build responsive, mobile-first websites quickly and efficiently.",
      },
      {
        question: "How many columns does the Bootstrap grid system have?",
        options: ["8 columns", "10 columns", "12 columns", "16 columns"],
        correctAnswer: 2,
        explanation:
          "Bootstrap uses a 12-column grid system, which provides flexibility in creating responsive layouts.",
      },
      {
        question: "What class makes an image responsive in Bootstrap?",
        options: ["img-responsive", "img-fluid", "image-responsive", "responsive-img"],
        correctAnswer: 1,
        explanation: "The img-fluid class sets max-width: 100% and height: auto, making images responsive.",
      },
      {
        question: "Which Bootstrap button class creates a primary button?",
        options: ["btn-main", "btn-primary", "button-primary", "primary-btn"],
        correctAnswer: 1,
        explanation: "The btn-primary class applies Bootstrap's primary button styling to create a prominent button.",
      },
      {
        question: "What is the Bootstrap breakpoint for large screens?",
        options: ["lg", "xl", "md", "sm"],
        correctAnswer: 0,
        explanation:
          "The 'lg' breakpoint (≥992px) is used for large desktop screens in Bootstrap's responsive design system.",
      },
    ],
  },
  grid: {
    questions: [
      {
        question: "What CSS property do you use to create a grid container?",
        options: ["display: flex", "display: grid", "layout: grid", "grid: container"],
        correctAnswer: 1,
        explanation: "Use 'display: grid' to establish a new grid container for your layout.",
      },
      {
        question: "What does the 'fr' unit represent in CSS Grid?",
        options: ["Frame unit", "Fractional unit", "Float ratio", "Fixed ratio"],
        correctAnswer: 1,
        explanation: "'fr' is the fractional unit used to distribute available space equally among grid tracks.",
      },
      {
        question: "How do you define columns in CSS Grid?",
        options: ["grid-columns", "grid-template-columns", "columns", "grid-cols"],
        correctAnswer: 1,
        explanation: "Use 'grid-template-columns' to define the number and size of columns in your grid.",
      },
      {
        question: "What property creates space between grid items?",
        options: ["grid-space", "grid-margin", "gap", "grid-padding"],
        correctAnswer: 2,
        explanation: "The 'gap' property (or grid-gap) creates space between grid items.",
      },
      {
        question: "Is CSS Grid a one-dimensional or two-dimensional layout system?",
        options: ["One-dimensional", "Two-dimensional", "Three-dimensional", "None of the above"],
        correctAnswer: 1,
        explanation: "CSS Grid is a two-dimensional layout system that handles both rows and columns.",
      },
    ],
  },
  flexbox: {
    questions: [
      {
        question: "What property creates a flex container?",
        options: ["display: flex-container", "flex: container", "display: flex", "flex-display: true"],
        correctAnswer: 2,
        explanation: "Use 'display: flex' to create a flex container.",
      },
      {
        question: "What does justify-content do in Flexbox?",
        options: [
          "Aligns items vertically",
          "Aligns items horizontally along the main axis",
          "Aligns items to the baseline",
          "Justifies text content",
        ],
        correctAnswer: 1,
        explanation: "justify-content aligns flex items along the main axis (horizontally by default).",
      },
      {
        question: "What property aligns flex items vertically?",
        options: ["justify-items", "align-content", "align-items", "vertical-align"],
        correctAnswer: 2,
        explanation: "Use 'align-items' to align flex items vertically along the cross axis.",
      },
      {
        question: "What does flex-wrap do?",
        options: [
          "Wraps text inside flex items",
          "Allows flex items to wrap to multiple lines",
          "Sets the flex property",
          "Wraps the flex container",
        ],
        correctAnswer: 1,
        explanation: "flex-wrap: wrap allows flex items to wrap to the next line if there isn't enough space.",
      },
      {
        question: "Is Flexbox a one-dimensional or two-dimensional layout system?",
        options: ["Two-dimensional", "One-dimensional", "Three-dimensional", "Multi-dimensional"],
        correctAnswer: 1,
        explanation: "Flexbox is a one-dimensional layout system that works along a single axis at a time.",
      },
    ],
  },
}

export default quizData
