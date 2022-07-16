import { Routes, Route } from 'react-router-dom';
import { Page, Header, Footer } from './components';
import { Home, About } from './views';
import './App.css';

function App() {
  const homeEl = (
    <Page>
      <Home />
    </Page>
  );

  const aboutEl = (
    <Page>
      <About />
    </Page>
  );

  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={homeEl} />
        <Route path='/about' element={aboutEl} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
