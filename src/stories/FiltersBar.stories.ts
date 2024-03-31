import {Meta, StoryObj} from '@storybook/react';
import FiltersBar from '../components/FiltersBar';


const meta: Meta = {
   title: 'Sorting/FiltersBar',
   component: FiltersBar,
   tags: ['autodocs'],
};

export default meta;

type FiltersBarStory = StoryObj<typeof FiltersBar>;

export const Default: FiltersBarStory = {};
