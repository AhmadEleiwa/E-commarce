
import './App.css';




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skeleton from './Skeleton';

import HomePage from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Skeleton> <HomePage /> </Skeleton>}></Route>
        <Route  path='/product/:id' element={"productId"}></Route>

        <Route  path='*' element={<Skeleton> </Skeleton>}></Route>

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
