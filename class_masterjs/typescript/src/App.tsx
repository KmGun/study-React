import Router from "./routes/Router";
import {ReactQueryDevtools} from "react-query/devtools";
import {ThemeProvider} from "styled-components";
import {isDarkAtom} from "./atoms";
import { useRecoilValue } from "recoil";
import {darkTheme , lightTheme} from "./theme";

function App(){
  const isDark = useRecoilValue(isDarkAtom);
  return(
    <>

    <ThemeProvider theme={isDark ? darkTheme : lightTheme }>
      <Router></Router>
      {/* <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools> */}
    </ThemeProvider>
    </>
  )
}

export default App;
