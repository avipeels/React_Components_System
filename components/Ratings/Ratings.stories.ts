import type { Meta, StoryObj } from '@storybook/react';
import { Ratings } from './Ratings';
import data from './Ratings.mock.data';

const meta: Meta<typeof Ratings> = {
  title: 'Example/Ratings',
  component: Ratings,
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
    children: 'Custom content for Ratings',
  },
};
