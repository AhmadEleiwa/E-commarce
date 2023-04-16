
import './App.css';




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skeleton from './Skeleton';



function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Skeleton>test</Skeleton>}></Route>
        <Route  path='/product/:id' element={"productId"}></Route>

        <Route  path='*' element={"ERROR"}></Route>

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
