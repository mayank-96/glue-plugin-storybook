import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { Button } from '../Button';
import { View } from 'react-native';
import Wrapper from '../../Wrapper';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonSizes: MyButtonStory = ({}) => {
  const sizes = ['xs', 'sm', 'md', 'lg'];
  return (
    <Wrapper>
      <View>
        {sizes.map((size) => {
          return (
            <Button size={size} key={size}>
              <Button.Text>Button</Button.Text>
            </Button>
          );
        })}
      </View>
    </Wrapper>
  );
};

export const Sizes = ButtonSizes.bind({});

Sizes.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
