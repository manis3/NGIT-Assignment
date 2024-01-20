import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import Assignment from './pages/Assignment'

import './App.css'

function App() {
  const query = new QueryClient();
  return (
    <>
    <QueryClientProvider client={query}>
    <Assignment/>
    </QueryClientProvider>
   
    </>
  )
}

export default App
