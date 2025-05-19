# Personal Document Chat

A private ChatGPT-like experience to interact with your own documents, similar to AnythingLLM.

![Personal Document Chat Screenshot](https://api.placeholder.com/800/450)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [React & TypeScript Basics](#react--typescript-basics)
- [Customization](#customization)
- [Adding Backend Integration](#adding-backend-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🔒 **Private Document Chat**: Upload and chat with your own documents
- 🌙 **Dark Theme**: Easy on the eyes for extended use
- 📁 **Document Management**: Simple interface to upload and manage documents
- 💬 **Intuitive Chat Interface**: Familiar messaging experience for asking questions
- 🔄 **Ready for LLM Integration**: Structure in place to connect to an AI backend

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v6.0 or higher)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/personal-document-chat.git
   cd personal-document-chat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
personal-document-chat/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── ChatArea.tsx
│   │   ├── DocumentSidebar.tsx
│   │   └── Header.tsx
│   ├── services/        # API and service functions
│   │   └── documentService.ts
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx          # Main application component
│   └── index.tsx        # Entry point
└── package.json         # Project dependencies and scripts
```

## React & TypeScript Basics

If you're new to React and TypeScript, here are some fundamentals to help you understand the project:

### React Basics

- **Components**: React applications are built using components - reusable pieces of UI.
- **JSX/TSX**: The syntax that looks like HTML in your JavaScript/TypeScript files.
- **Props**: How components receive and pass data (similar to function parameters).
- **State**: Internal component data that can change over time using `useState`.
- **Hooks**: Functions starting with "use" that let you "hook into" React features.

### TypeScript Basics

- **Type Annotations**: Add `: Type` after variables, parameters, etc.
- **Interfaces**: Define shapes for objects.
- **Type vs Interface**: Generally similar; interfaces can be extended more easily.

### Example Component with TypeScript

```tsx
// Define props interface
interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string; // optional prop with ?
}

// Component with typed props
const Button: React.FC<ButtonProps> = ({ text, onClick, color = 'blue' }) => {
  return (
    <button 
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="p-2 rounded text-white"
    >
      {text}
    </button>
  );
};
```

## Customization

### Changing Colors

The app uses Tailwind CSS for styling. To change colors, edit the class names in the component files.

Common color classes:
- Background: `bg-{color}-{shade}`
- Text: `text-{color}-{shade}`
- Border: `border-{color}-{shade}`

Example colors include: gray, red, blue, green, purple, etc.
Shades range from 100 (lightest) to 900 (darkest).

### Adding New Features

To add a new feature:

1. Create component(s) in the `src/components` directory
2. Import and use them in the appropriate parent component
3. Add any necessary TypeScript interfaces in the `src/types` directory
4. Add any services/logic in the `src/services` directory

## Adding Backend Integration

To connect this frontend to a backend LLM service:

1. Create an API service in `src/services/aiService.ts`:

```typescript
export const askQuestion = async (question: string, documents: File[]): Promise<string> => {
  // Process documents if needed
  const formData = new FormData();
  formData.append('question', question);
  documents.forEach(doc => formData.append('documents', doc));
  
  // Replace with your actual API endpoint
  const response = await fetch('https://your-backend-api.com/ask', {
    method: 'POST',
    body: formData,
  });
  
  if (!response.ok) {
    throw new Error('Failed to get answer');
  }
  
  const data = await response.json();
  return data.answer;
};
```

2. Update the `handleSendMessage` function in your component to use this service.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
