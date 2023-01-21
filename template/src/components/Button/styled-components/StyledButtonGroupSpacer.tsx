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
    sizes: {
      sm: {
        style: {
          // width: '$10',
          // height: '$10',
        },
      },
      md: {
        style: {
          // width: '$20',
        },
      },
      lg: {
        style: {
          // width: '$30',
          // height: '$30',
        },
      },
    },
  },
  {}
);
