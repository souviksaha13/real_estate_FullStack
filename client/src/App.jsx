import './App.css'
import {Suspense} from 'react'
import { Website } from './Pages/Website';
import Layout from './Components/Layout/Layout'
import Properties from './Pages/Properties/Properties';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Property } from './Pages/Property/Property';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Website/>}/>
            <Route path='/properties'>
              <Route index element={<Properties/>}/>
              <Route path=':PropertyId' element={<Property/>}/>
            </Route>
          </Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
