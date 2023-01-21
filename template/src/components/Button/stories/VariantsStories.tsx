import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import Wrapper from '../../Wrapper';
import { View } from 'react-native';
import { Button } from '../Button';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonVariants: MyButtonStory = ({}) => {
  const variants = ['solid', 'subtle', 'outline', 'link', 'ghost', 'unstyled'];
  return (
    <Wrapper>
      <View>
        {variants.map((variant) => {
          return (
            <Button variant={variant}>
              <Button.Text>{variant}</Button.Text>
            </Button>
          );
        })}
      </View>
    </Wrapper>
  );
};

export const Variants = ButtonVariants.bind({});

Variants.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
