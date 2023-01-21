import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import { config } from '../../ui.config';
import { Box } from './Box';

let colors: any = config?.tokens?.colors;
if (!colors) colors = [];

const MyBoxMeta: ComponentMeta<typeof Box> = {
  title: 'LAYOUT/Box',
  component: Box,
  argTypes: {
    bg: {
      control: 'select',
      options: Object.keys(colors),
      description: 'Background color of the box',
    },
    w: {
      control: 'number',
      description: 'width of the box',
    },
    h: {
      control: 'number',
      description: 'height of the box',
    },
  },
  args: { bg: 'red500', w: 100, h: 100 },
};

export default MyBoxMeta;

export { Basic } from './stories/Basic';

export { WithRef } from './stories/WithRef';
