import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import Login from './component/Login/Login.jsx'
import Signup from './component/Signup/Signup.jsx'
import Houses from './component/Houses/Houses.jsx'
import Trending from './component/Trending/Trending.jsx'
import Rooms from './component/Rooms/Rooms.jsx'
import FarmHouse from './component/Farmhouse/Farmhouse.jsx'
import Poolhouse from './component/Poolhouse/Poolhouse.jsx'
import Renthouse from './component/Renthouses/Renthouse.jsx'
import Cabin from './component/cabins/Cabin.jsx'
import ForestHouse from './component/Foresthouse/Foresthouse.jsx'
import Shops from './component/shops/Shops.jsx'
import Listing from './component/Listing/Listing.jsx'
import Transportation from './component/Transportation/Transportation.jsx'
import Reserve from './component/Reserve/Reserve.jsx'
import CreateTrip from './component/CreateTrip/CreateTrip.jsx'
import Guide from './component/Guides/Guide.jsx'
import Food from './component/Food/Food.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
<Route path='' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/house' element={<Houses/>}/>
<Route path='/trending' element={<Trending/>}/>
<Route path='/rooms' element={<Rooms/>}/>
<Route path='/farmhouses' element={<FarmHouse/>}/>
<Route path='/poolhouses' element={<Poolhouse/>}/>
<Route path='/renthouses' element={<Renthouse/>}/>
<Route path='/cabins' element={<Cabin/>}/>
<Route path='/shops' element={<Shops/>}/>
<Route path='/foresthouses' element={<ForestHouse/>}/>
<Route path='/listings' element={<Listing/>}/>
<Route path='/transportation' element={<Transportation/>}/>
<Route path='/reserve' element={<Reserve/>}/>
<Route path='/trip-planner' element={<CreateTrip/>}/>
<Route path='/guides' element={<Guide/>}/>
<Route path='/food' element={<Food/>}/>



</Route>
))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
  </StrictMode>,
)
