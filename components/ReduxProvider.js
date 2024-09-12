'use client';

import { Provider } from 'react-redux';
import { store } from '../store/store'; // Adjust the path to your store.js

// Tried to use Provider directly in layout.js but won't work withour "use client" thus chatgpt recommmended this!!
export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
