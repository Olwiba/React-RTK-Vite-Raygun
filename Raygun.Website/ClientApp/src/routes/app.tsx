import {Routes, Route, BrowserRouter} from 'react-router-dom';
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<p>Home</p>} />
        <Route path="/signin" element={<p className={'text-3xl font-bold underline'}>Sign in</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App