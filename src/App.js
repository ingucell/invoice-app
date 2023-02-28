import { ColorModeContext, useMode } from "./theme";
import {Routes, Route} from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/Dashboard";
import Billing from './pages/Billing'

function App() {
  const [theme, colorMode] = useMode()

  return (
   <>
     <ColorModeContext.Provider value = {colorMode}>
          <ThemeProvider theme={theme}>
               <CssBaseline />
                   <div className="app">
            <Sidebar />
            <main className="content">
                 <Topbar />
                   <Routes>
                       <Route path="/dashboard" element={<Dashboard />}/>
                       <Route path="/billing" element={<Billing />}/>
                   </Routes>

            </main>

                   </div>
          </ThemeProvider>
     </ColorModeContext.Provider>
   </>
  );
}

export default App;
