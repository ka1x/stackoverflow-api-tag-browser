import {Meta, StoryObj} from '@storybook/react';
import ListContainer from '../components/ListContainer';

const meta: Meta = {
   title: 'List/ListContainer',
   component: ListContainer,
   argTypes: {
      tags: {
         control: {
            type: 'object',
         },
      },
   },
   tags: ['autodocs'],

};

export default meta;

type ListContainerStory = StoryObj<typeof ListContainer>;

export const Example: ListContainerStory = {
   args: {
      tags: [
         {name: 'Example Tag 1', count: 10},
         {name: 'Example Tag 2', count: 15},
         {name: 'Example Tag 3', count: 20},
         // Add more example tags as needed
      ],
   },
};
