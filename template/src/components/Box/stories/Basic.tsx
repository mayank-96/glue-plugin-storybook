import type { ComponentStory } from '@storybook/react-native';
import React from 'react';
import Wrapper from '../../Wrapper';
import { Box } from '../Box';
import { Text } from '../../Text';

type MyCustomBoxStory = ComponentStory<typeof Box>;

export const Basic: MyCustomBoxStory = ({ bg, w, h, ...props }) => {
  return (
    <Wrapper>
      <Box
        {...props}
        bg={`$${bg}`}
        h={h}
        w={w}
        //@ts-ignore
        justifyContent='center'
        alignItems='center'
      >
        <Text>BOX</Text>
      </Box>
    </Wrapper>
  );
};
