import { ColorModeContext, useMode } from "./theme";
import {Routes, Route} from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode()

  return (
   <>
     <ColorModeContext.Provider value = {colorMode}>
          <ThemeProvider theme={theme}>
               <CssBaseline />
                   <div className="app">
            
            <main className="content">
                  Mathias

            </main>

                   </div>
          </ThemeProvider>
     </ColorModeContext.Provider>
   </>
  );
}

export default App;
