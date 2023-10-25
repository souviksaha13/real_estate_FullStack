import './App.css'
import { Website } from './Pages/Website';
import Layout from './Components/Layout/Layout'
import Properties from './Pages/Properties/Properties';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Website/>}/>
            <Route path='/properties' element={<Properties/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
