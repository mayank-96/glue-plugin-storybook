import React from 'react';
import { GluestackUIProvider } from './GluestackUIProvider';
import { config } from '../ui.config';

const Wrapper = ({ children }: any) => {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
};

Wrapper.displayName = 'GluestackUIProvider';

export default Wrapper;
