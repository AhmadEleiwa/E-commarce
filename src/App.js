import logo from './logo.svg';
import './App.css';

import { Button, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

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
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button color='primary' variant='contained' disableElevation> click</Button>
        <Typography>ss</Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
