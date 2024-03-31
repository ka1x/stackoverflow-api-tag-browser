import type {Preview} from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {store} from '../src/redux/store';
import React from 'react';

const withProvider = (StoryFn: any) => <Provider store={store}>{StoryFn()}</Provider>;
export const decorators = [withProvider];

const preview: Preview = {
   parameters: {
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
};

export default preview;
