export const componentTemplate = (componentName: string): string => `import React from 'react';
import { ${componentName}Props } from './${componentName}Types';
import {
  ${componentName}Wrapper,
} from './${componentName}.styles';

export const ${componentName}: React.FC<${componentName}Props> = ({
  children,
  ...props
}) => {
  return (
    <${componentName}Wrapper {...props}>
      {children}
    </${componentName}Wrapper>
  );
};
`;

export const typesTemplate = (componentName: string): string => `interface ${componentName}Props {
  /** Content to be displayed inside the component */
  children?: React.ReactNode;
  /** Additional CSS class name */
  className?: string;
}

export type { ${componentName}Props };
`;

export const stylesTemplate = (componentName: string): string => `import styled from 'styled-components';

const ${componentName}Wrapper = styled.div\`
  font-family: 'Verdana', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  padding: 16px;
  border-radius: 8px;
  background-color: #f5f5f5;
\`;

export {
  ${componentName}Wrapper,
};
`;

export const storiesTemplate = (componentName: string): string => `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';
import data from './${componentName}.mock.data';

const meta: Meta<typeof ${componentName}> = {
  title: 'Example/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: data.content,
  },
};

export const WithCustomContent: Story = {
  args: {
    children: 'Custom content for ${componentName}',
  },
};
`;

export const mockDataTemplate = (componentName: string): string => `export default {
  content: 'This is a sample ${componentName} component with some default content. You can customize this content based on your component needs.',
  title: 'Sample ${componentName}',
  description: 'A reusable ${componentName} component built with React and TypeScript.',
};
`;
