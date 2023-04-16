import './App.css';

import { Button, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: "#DB4444",
      contrastText: '#fafafa'
    },
    secondary: {
      main: '#00FF66',
      contrastText: '#fafafa'
    },
  },
});


function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={"SS"}></Route>
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
