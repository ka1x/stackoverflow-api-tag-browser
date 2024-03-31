import {Meta, StoryObj} from '@storybook/react';
import CountSelector from '../components/CountSelector';


const meta: Meta = {
   title: 'Filters/CountSelector',
   component: CountSelector,
   tags: ['autodocs'],
};

export default meta;

type CountSelectorStory = StoryObj<typeof CountSelector>;

export const Default: CountSelectorStory = {};
