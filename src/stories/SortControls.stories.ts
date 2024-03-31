import { Meta,  StoryObj } from '@storybook/react';
import SortControls from '../components/SortControls';

const meta: Meta = {
  title: 'Filters/SortControls',
  component: SortControls,
  args: {
	label: 'example title',
	sortType: 'name'
  },
  tags: ['autodocs'],

};

export default meta;

type SortControlsStory = StoryObj<typeof SortControls>


export const NameControls: SortControlsStory = {args : {
	label: 'Name',
	sortType: 'name'
}
}

export const CountControl: SortControlsStory = {args : {
	label: 'Count',
	sortType: 'popular'
}
}

