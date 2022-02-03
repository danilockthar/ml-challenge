import React from 'react';
import Header from './components/Header';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { NavigationContent } from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import ResultSearch from './components/ResultSearch';
import ResultDetail from './components/ResultDetail';
import { GlobalStateProvider } from './context/GlobalContext';


function App() {

  const queryClient = new QueryClient()
  return (
    <GlobalStateProvider>
      <QueryClientProvider client={queryClient}>
        <div className="">
          <Header />
          <Routes>
            <Route path="/" element={<div />} />
            <Route path="items" element={<ResultSearch />} />
            <Route path="items/:id" element={<ResultDetail />} />
          </Routes>
          {/*     <NavigationContent /> */}
        </div>
      </QueryClientProvider>
    </GlobalStateProvider>
  );
}

export default App;
