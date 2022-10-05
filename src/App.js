import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import OverView from './containers/OverView/OverViewContainer';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/overview" element={<OverView />} />
    </Routes>
  );
}

export default App;
