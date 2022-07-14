import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home } from './views';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
