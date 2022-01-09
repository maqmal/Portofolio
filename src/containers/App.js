import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        <HomePage />

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

`

export default App;
