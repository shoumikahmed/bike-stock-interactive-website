import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Home/Blogs/Blogs'
import Inventories from './Pages/Home/Inventories/Inventories';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import ManageInventories from './Pages/Home/ManageInventories/ManageInventories';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth'
import StockUpdate from './Pages/Home/StockUpdate/StockUpdate';
import AddItem from './Pages/Home/AddItem/AddItem';
import MyItem from './Pages/Home/MyItem/MyItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myitem' element={<MyItem></MyItem>}></Route>
        <Route path='/stockupdate' element={
          <RequireAuth>
            <StockUpdate></StockUpdate>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
