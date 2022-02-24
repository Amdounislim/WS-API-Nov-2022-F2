import { Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './Components/Profile/Profile';
import Users from './Components/Users';
import Comments from './Components/Comments';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/posts/:id" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
