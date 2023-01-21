import { createProvider } from '@gluestack/ui-creator';
import { StyledProvider } from '@dank-style/react';

const GluestackUIProvider = createProvider({ StyledProvider }) as any;
GluestackUIProvider.displayName = 'GluestackUIProvider';
export { GluestackUIProvider };
