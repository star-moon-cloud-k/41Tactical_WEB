import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import OverView from './containers/OverView/OverViewContainer';
import Products from './pages/Products';
import Login from './pages/Login';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/overview" element={<OverView />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
