import {Route, Routes} from 'react-router-dom';
import ToolBar from './UI/ToolBar';
import Home from './containers/Home';
import Services from './containers/Services';
import About from './containers/About';
import NotFound from './UI/NotFound';
import {Container} from '@mui/material';

function App() {
  return (
    <>
      <header>
        <ToolBar/>
      </header>
      <main>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App
