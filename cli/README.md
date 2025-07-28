# React Component Generator CLI

A powerful CLI tool to automatically generate React component files with TypeScript, Storybook, and styled-components following your project's established patterns.

## Features

- 🚀 Generates complete component structure with 5 files
- 📝 TypeScript support with proper type definitions
- 🎨 Styled-components integration
- 📚 Storybook stories with examples
- 🧪 Mock data for testing and development
- ✅ Input validation and error handling
- 🎯 Follows your existing component patterns

## Generated Files

For each component, the CLI generates:

1. `Component.tsx` - Main React component file
2. `ComponentTypes.ts` - TypeScript interface definitions
3. `Component.styles.ts` - Styled-components styles
4. `Component.stories.ts` - Storybook stories
5. `Component.mock.data.ts` - Mock data for testing

## Installation

1. Navigate to the CLI directory:
```bash
cd cli
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Make the CLI executable:
```bash
chmod +x bin/generate-component.js
```

4. (Optional) Link globally for system-wide usage:
```bash
npm link
```

## Usage

### Basic Usage

Generate a component in the current directory:
```bash
./bin/generate-component.js MyComponent
```

### With Custom Output Path

Generate a component in a specific directory:
```bash
./bin/generate-component.js MyComponent --output /path/to/your/project
```

### Global Usage (if linked)

```bash
generate-component MyComponent
```

## Examples

### Generate a Button component:
```bash
./bin/generate-component.js Button
```

This creates:
```
components/Button/
├── Button.tsx
├── ButtonTypes.ts
├── Button.styles.ts
├── Button.stories.ts
└── Button.mock.data.ts
```

### Generate a Modal component in a specific location:
```bash
./bin/generate-component.js Modal --output ~/my-react-project
```

## Component Structure

The generated components follow this pattern:

- **React Functional Component** with TypeScript
- **Props interface** with JSDoc comments
- **Styled-components** with consistent styling
- **Storybook stories** with multiple variants
- **Mock data** for development and testing

## Validation

The CLI includes validation for:
- ✅ Component name format (must start with letter, alphanumeric only)
- ✅ Duplicate component detection
- ✅ Directory creation permissions
- ✅ File write permissions

## Error Handling

The CLI provides clear error messages for:
- Invalid component names
- Existing components
- Permission issues
- File system errors

## Development

### Build the project:
```bash
npm run build
```

### Run in development mode:
```bash
npm run dev MyComponent
```

## Requirements

- Node.js 16+
- TypeScript
- React project with styled-components
- Storybook (for stories to work)

## License

MIT
