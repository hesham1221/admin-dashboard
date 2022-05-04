import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import './darkMode.scss'
import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()
function App() {
  const [darkMode , setDarkmode] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('Hpanel_darkMode') === 'true'){
      setDarkmode(true)
    }
  },[]) 
  return (
    <DarkModeContext.Provider value={{setDarkmode , darkMode}}>
    <div className = {`app ${darkMode && 'darkMode'}`}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path="new" element={<New />} />
            <Route path=":userId" element={<Single/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path="new" element={<New />} />
            <Route path=":productId" element={<Single/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </DarkModeContext.Provider>
  );
}

export default App;
