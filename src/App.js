import logo from './logo.svg';
import './App.css';

import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import {red} from '@mui/material/colors'
const theme = createTheme({
  palette: {

    primary: {
      main:"#f458ff"
    },
    action:{
      active:'#f1f1f1'
    }

  },

  
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button color='primary' variant='contained'> click</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
