import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skeleton from './Skeleton';

import HomePage from './pages/Home';
import ProductDetailsPage from './pages/ProductDetails';
import ErrorNotFound from './pages/ErrorNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Skeleton> <HomePage /> </Skeleton>}></Route>
        <Route  path='/product/:id' element={<Skeleton><ProductDetailsPage /></Skeleton>}></Route>

        <Route  path='*' element={<Skeleton><ErrorNotFound /> </Skeleton>}></Route>

      </Routes>
    </Router>
    // <div className="App">
    //   <ThemeProvider theme={theme}>
    //     <Button color='primary' variant='contained' disableElevation> click</Button>
    //     <Typography>ss</Typography>
    //   </ThemeProvider>
    // </div>


  );
}
export default App;
