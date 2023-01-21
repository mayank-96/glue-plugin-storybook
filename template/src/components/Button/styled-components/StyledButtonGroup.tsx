import { styled } from '@dank-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      row: {
        style: {
          // flexDirection: 'row',
        },
      },
      column: {
        style: {
          // flexDirection: 'column',
        },
      },
    },
    defaultProps: {
      //@ts-ignore
      space: 'md',
    },
  },
  {}
);
