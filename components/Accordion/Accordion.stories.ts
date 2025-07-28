import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import data from './Accordion.mock.data';

const meta: Meta<typeof Accordion> = {
  title: 'Example/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: data,
    allowMultiple: false,
  },
};

export const AllowMultiple: Story = {
  args: {
    items: data,
    allowMultiple: true,
  },
};
