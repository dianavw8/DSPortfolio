import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import MyComponent from './MyComponent';

function App() {
  return (
    <NextUIProvider>
      <MyComponent />
    </NextUIProvider>
  );
}

export default App;
