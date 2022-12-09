import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditorPage from "./pages/EditorPage";
import Home from "./pages/Home";
import "./App.css"


const App = () => {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />}> </Route>
               <Route path="/editor/:roomId" element={<EditorPage />}>  </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
};

export default App;
