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
  
const Skeleton = props =>{
    return   <div className="App">
      <ThemeProvider theme={theme}>
        {/* Header Here */}
            {props.children}
        {/* Footer Here */}
      </ThemeProvider>
    </div>
}


export default Skeleton