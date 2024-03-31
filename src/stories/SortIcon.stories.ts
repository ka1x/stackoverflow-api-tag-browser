import type {Meta, StoryObj} from '@storybook/react';
import SortIcon from '../components/SortIcon';

const meta: Meta = {
   title: 'Sorting/SortIcon',
   component: SortIcon,
   tags: ['autodocs'],
};

export default meta;

type SortIconStory = StoryObj<typeof SortIcon>;

export const SortAlphabeticalDown: SortIconStory = {
   args: {
      sortType: 'name',
      order: 'asc',
   },
};

export const SortAlphabeticalUp: SortIconStory = {
   args: {
      sortType: 'name',
      order: 'desc',
   },
};

export const SortNumericDown: SortIconStory = {
   args: {
      sortType: 'popular',
      order: 'asc',
   },
};

export const SortNumericUp: SortIconStory = {
   args: {
      sortType: 'popular',
      order: 'desc',
   },
};
