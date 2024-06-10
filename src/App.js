import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddFriend from './components/AddFriend';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddFriend/>}/>
        <Route path='/view' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
