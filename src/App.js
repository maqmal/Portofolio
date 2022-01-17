import Sidebar from './components/Navigation/Sidebar';
import styled from 'styled-components';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import ResumePage from './components/Resume/ResumePage';
import PortofolioPage from './components/Portofolio/PortofolioPage';
import ContactPage from './components/Contact/ContactPage';
import { Route, Routes } from 'react-router-dom';

import './styles/Stars.css'
function App() {
  return (
    <div className="App">
      <div className="stars">
        <div className='stars'></div>
        <div className='twinkling'></div>
      </div>
      <Sidebar />
      <MainContentStyled>
        <Routes>
          <Route exact={'true'} path='/home' element={<HomePage />} />
          <Route exact={'true'} path='/' element={<HomePage />} />
          <Route exact={'true'} path='/about' element={<AboutPage />} />
          <Route exact={'true'} path='/resume' element={<ResumePage />} />
          <Route exact={'true'} path='/portofolio' element={<PortofolioPage />} />
          <Route exact={'true'} path='/contact' element={<ContactPage />} />
        </Routes>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 14.3rem;
  min-height: 100vh;

`

export default App;
