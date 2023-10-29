import './App.css'
import {Suspense, useState} from 'react'
import { Website } from './Pages/Website';
import Layout from './Components/Layout/Layout'
import Properties from './Pages/Properties/Properties';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Property } from './Pages/Property/Property';
import UserDetailContext from './Context/userDetailContext';
import Bookings from './Pages/Bookings/Bookings';
import Favourites from './Pages/Favourites/Favourites';

function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null
  })

  return (
    <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
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
              <Route path='/bookings' element={<Bookings/>}/>
              <Route path='/favourites' element={<Favourites/>}/>
            </Route>
          </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer/>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
