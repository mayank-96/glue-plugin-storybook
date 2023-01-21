/* eslint-disable no-console */
import type { ComponentStory } from '@storybook/react-native';
import { Button } from '../Button';
import React from 'react';
import Wrapper from '../../Wrapper';

type MyButtonStory = ComponentStory<typeof Button>;

export const Basic: MyButtonStory = ({ text, ...props }) => {
  return (
    <Wrapper>
      <Button {...props} onPress={() => console.log('Hello')}>
        <Button.Text>{text}</Button.Text>
      </Button>
    </Wrapper>
  );
};
