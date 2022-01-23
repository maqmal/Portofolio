import Sidebar from './components/Navigation/Sidebar';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import ResumePage from './components/Resume/ResumePage';
import PortofolioPage from './components/Portofolio/PortofolioPage';
import ContactPage from './components/Contact/ContactPage';
import BottomNavigation from './components/Navigation/BottomNavigation';

import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false)
    } else {
      setTheme('light-theme');
      setChecked(true)
    }
  }
  console.log(navToggle)
  return (
    <div className="App">

      <Sidebar navToggle={navToggle} theme={theme} themeToggler={themeToggler} checked={checked} setNavToggle={setNavToggle} />
      
      <div className='theme-normal'>
        <div className={"light-dark-mode-normal " + theme}>
          <Brightness4Icon />
          <Switch
            value=""
            checked={checked}
            inputProps={{ 'aria-label': '' }}
            size="small"
            onClick={themeToggler}
          />
        </div>
      </div>

      <div className={"ham-burger-menu " + navToggle + '-status'}>
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

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

      <div id='bottom-nav'>
        <BottomNavigation theme={theme} themeToggler={themeToggler} />
      </div>

    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
`

export default App;