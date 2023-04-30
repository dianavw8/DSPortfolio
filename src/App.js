import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Navigation from './components/Navigation';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

function App() {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Navigation/>
    </NextUIProvider>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
