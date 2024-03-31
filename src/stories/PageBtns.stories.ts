import {Meta, StoryObj} from '@storybook/react';
import PageBtns from '../components/PageBtns';

const meta: Meta = {
   title: 'List/PageBtns',
   component: PageBtns,
   tags: ['autodocs'],
};

export default meta;

type PageBtnsStory = StoryObj<typeof PageBtns>;

export const Default: PageBtnsStory = {};
