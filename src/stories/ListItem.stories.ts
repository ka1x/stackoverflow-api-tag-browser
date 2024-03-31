import { Meta,  StoryObj } from '@storybook/react';
import ListItem from '../components/ListItem';

const meta: Meta = {
  title: 'List/ListItem',
  component: ListItem,
  args: {
    name: 'Example Item',
    count: 10,
  },
  tags: ['autodocs'],

};

export default meta;

type ListItemStory = StoryObj<typeof ListItem>


export const Example: ListItemStory = {args : {
  name: 'ExampleTag',
  count: 10,
}
}

