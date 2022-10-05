import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Sidebar } from './components/Sidebar';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Sidebar />
    </ChakraProvider>
  );
};

export default App;
