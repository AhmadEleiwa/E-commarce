import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';   
import Footer from './components/Footer';
import Header from './components/Header';
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
        <Header /> 
            {props.children}
        <Footer /> 
        {/* Footer Here */}
      </ThemeProvider>
    </div>
}


export default Skeleton