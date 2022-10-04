import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <ChakraProvider>
      <Sidebar />
    </ChakraProvider>
  );
}

export default App;
