import * as React from 'react';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

function App({ Main }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Main />
    </NextUIProvider>
  );
}
