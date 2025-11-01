# CSS Tutorial Application

A comprehensive, interactive CSS learning platform built with React, Next.js, and Tailwind CSS. This application teaches essential CSS concepts through engaging lessons, interactive quizzes, and hands-on coding exercises.

## 🎯 Features

### Lesson Management
- **Three Main Topics**: Bootstrap, CSS Grid, and CSS Flexbox
- **28+ Comprehensive Lessons**: Each topic contains multiple detailed lessons covering theory and practical applications
- **Collapsible Navigation**: Expandable lesson sections for easy navigation
- **Dynamic Content Display**: Smooth transitions between lessons with fade animations

### Interactive Quiz System
- **Topic-Specific Quizzes**: Separate quiz sets for Bootstrap (5 questions), CSS Grid (5 questions), and Flexbox (5 questions)
- **Immediate Feedback**: Students receive instant feedback on their answers with detailed explanations
- **Progress Tracking**: Visual progress bar showing quiz completion status
- **Score Display**: Final score with personalized messages based on performance
- **Restart Capability**: Easy quiz restart without page refresh

### Sandbox Playground
- **Code Editor**: Write and test HTML and CSS directly in the browser
- **Live Preview**: Real-time preview of your code in an embedded iframe
- **Learning by Doing**: Practice lessons with immediate visual feedback

### User Experience
- **Dark Mode Toggle**: Light/Dark theme support with localStorage persistence
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Smooth Animations**: Professional transitions and fade effects
- **Semantic UI**: Accessible components with proper ARIA attributes
- **Modern Color Scheme**: 
  - Primary: Deep Blue (#0046FF)
  - Accent: Teal (#73C8D2)
  - Secondary: Light grays for contrast

## 🏗️ Project Structure

\`\`\`
css-tutorial/
├── app/
│   ├── page.tsx          # Main layout and state management
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Tailwind and design tokens
├── components/
│   ├── sidebar.tsx       # Navigation and lesson selection
│   ├── content.tsx       # Lesson content and sandbox
│   ├── quiz.tsx          # Quiz interface and logic
│   └── dark-mode-toggle.tsx # Theme switcher
├── data/
│   ├── lessons.ts        # All lesson content (28+ lessons)
│   └── quiz.ts           # Quiz questions and answers
└── public/               # Static assets
\`\`\`

## 📚 Lesson Content

### Bootstrap (8 Lessons)
- BS Home - Framework Introduction
- BS Get Started - Setup Instructions
- BS Grid System - Grid Concepts
- BS Grid Basic - Grid Examples
- BS Typography - Text Styling
- BS Tables - Table Components
- BS Images - Image Utilities
- BS Buttons - Button Styles

### CSS Grid (6 Lessons)
- CSS Grid System - Fundamentals
- Grid Container - Setup
- Grid Tracks - Sizing
- Grid Gaps - Spacing
- Grid Template Areas - Named Areas
- Grid Examples - Real-world Applications

### CSS Flexbox (4 Lessons)
- Flexbox Intro - Overview and Benefits
- Flex Container - Container Properties
- Flex Items - Item Properties
- Flex Responsive - Responsive Design

## 🎓 Quiz System

Each topic includes 5 comprehensive questions covering:
- Core concepts and definitions
- Practical implementation details
- Best practices and advanced usage
- Responsive design considerations

### Quiz Features
- Multiple-choice format with 4 options
- Detailed explanations for each answer
- Visual indicators for correct/incorrect answers
- Score calculation and performance feedback
- Question progress tracking

## 🎨 Design System

### Color Palette
- **Primary**: `oklch(0.35 0.25 260)` - Deep Blue
- **Accent**: `oklch(0.55 0.2 190)` - Teal
- **Background**: `oklch(0.98 0.001 280)` - Off-white (Light) / `oklch(0.12 0.02 260)` (Dark)
- **Text**: High contrast for accessibility

### Typography
- **Font Family**: Geist (sans-serif) for all text
- **Font Mono**: Geist Mono for code samples
- **Line Height**: 1.5 for optimal readability

### Spacing
- Based on Tailwind's 4px scale
- Consistent padding and margins
- Generous whitespace for readability

## 🚀 Getting Started

### Installation
\`\`\`bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
\`\`\`

### Usage

1. **Select a Topic**: Click on Bootstrap, CSS Grid, or CSS Flexbox in the sidebar
2. **Choose a Lesson**: Click on any lesson to view its content
3. **Try It Yourself**: Click the "Try It Yourself" button to open the sandbox editor
4. **Take a Quiz**: Click the "Quiz" button to test your knowledge
5. **Toggle Dark Mode**: Use the sun/moon icon in the header

## 🛠️ Technologies Used

- **React 19**: UI library
- **Next.js 16**: React framework with App Router
- **Tailwind CSS v4**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Lucide React**: Icon library

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meeting WCAG AA standards
- Screen reader friendly

## 🔄 State Management

- React hooks for local state (useState)
- localStorage for theme persistence
- Component-based architecture

## 📝 Content Structure

Each lesson object contains:
\`\`\`typescript
{
  name: string;        // Lesson title
  content: string;     // Lesson description/content
}
\`\`\`

Each quiz question contains:
\`\`\`typescript
{
  question: string;              // Question text
  options: string[];             // 4 multiple choice options
  correctAnswer: number;         // Index of correct option
  explanation: string;           // Detailed explanation
}
\`\`\`

## 🎯 Learning Outcomes

After completing this tutorial, students will understand:
- Bootstrap framework fundamentals and best practices
- CSS Grid layout system and its applications
- CSS Flexbox layout and responsive design
- How to choose the right layout method
- Practical web design implementation skills

## 🔮 Future Enhancements

- Interactive code challenges with validation
- User progress tracking and certificates
- Downloadable lesson materials
- Video tutorials integration
- Community forums for peer learning
- Difficulty levels (Beginner, Intermediate, Advanced)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📞 Support

For questions or issues, please open an issue in the repository or contact the development team.

---

**Happy Learning! 🚀**
