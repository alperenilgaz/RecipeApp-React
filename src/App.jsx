import './App.css';
import Home from './pages/Home/Home'
import Detail from './pages/Details/Detail'
import Search from './pages/Search/Search'
import Create from './pages/Create/Create'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

const routes = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/tarif',element:<Home/>},
      {path:'/create',element:<Create/>},
      {path:'/tarif/:id',element:<Detail/>},
      {path:'/search',element:<Search/>},
    ]
  },


])

function App() {
  return (
   <RouterProvider router={routes} />

  );
}

export default App;
